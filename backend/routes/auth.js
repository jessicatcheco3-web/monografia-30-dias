/**
 * Rotas de Autenticação
 */

const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../config/database');

const router = express.Router();

// ============================================
// POST /api/auth/login
// Autenticação de estudante
// ============================================
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Validação de entrada
    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: 'Nome de utilizador e palavra-passe são obrigatórios'
      });
    }

    // Buscar estudante
    const [students] = await db.execute(
      'SELECT id, username, full_name, password_hash, is_active FROM estudantes WHERE username = ?',
      [username.toLowerCase().trim()]
    );

    if (students.length === 0) {
      return res.status(401).json({
        success: false,
        message: 'Credenciais inválidas'
      });
    }

    const student = students[0];

    // Verificar se conta está activa
    if (!student.is_active) {
      return res.status(403).json({
        success: false,
        message: 'Conta desactivada. Contacte o suporte via WhatsApp.'
      });
    }

    // Verificar palavra-passe
    const isValidPassword = await bcrypt.compare(password, student.password_hash);
    
    if (!isValidPassword) {
      return res.status(401).json({
        success: false,
        message: 'Credenciais inválidas'
      });
    }

    // Verificar acesso válido
    const [access] = await db.execute(`
      SELECT ae.id, ca.key_label, ca.active_from, ca.active_to
      FROM acesso_estudantes ae
      JOIN chaves_acesso ca ON ae.access_key_id = ca.id
      WHERE ae.student_id = ? 
        AND ca.is_active = TRUE
        AND NOW() BETWEEN ca.active_from AND ca.active_to
      LIMIT 1
    `, [student.id]);

    if (access.length === 0) {
      return res.status(403).json({
        success: false,
        message: 'O seu acesso ao curso expirou ou não está activo.'
      });
    }

    // Gerar token JWT
    const token = jwt.sign(
      { 
        studentId: student.id,
        username: student.username 
      },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
    );

    res.json({
      success: true,
      message: 'Autenticação bem-sucedida',
      data: {
        token,
        student: {
          id: student.id,
          username: student.username,
          fullName: student.full_name
        },
        access: {
          label: access[0].key_label,
          expiresAt: access[0].active_to
        }
      }
    });

  } catch (error) {
    console.error('Erro no login:', error);
    res.status(500).json({
      success: false,
      message: 'Erro interno do servidor'
    });
  }
});

// ============================================
// POST /api/auth/register
// Registo de novo estudante com chave de acesso
// ============================================
router.post('/register', async (req, res) => {
  try {
    const { username, fullName, whatsapp, password, accessKey } = req.body;

    // Validação de entrada
    if (!username || !fullName || !whatsapp || !password || !accessKey) {
      return res.status(400).json({
        success: false,
        message: 'Todos os campos são obrigatórios'
      });
    }

    // Validar formato do username
    const usernameRegex = /^[a-z]+\.[a-z]+$/;
    if (!usernameRegex.test(username.toLowerCase())) {
      return res.status(400).json({
        success: false,
        message: 'O nome de utilizador deve estar no formato: estudante.nome'
      });
    }

    // Verificar se username já existe
    const [existingUser] = await db.execute(
      'SELECT id FROM estudantes WHERE username = ?',
      [username.toLowerCase()]
    );

    if (existingUser.length > 0) {
      return res.status(409).json({
        success: false,
        message: 'Este nome de utilizador já está em uso'
      });
    }

    // Verificar chave de acesso válida
    const [keys] = await db.execute(`
      SELECT id, key_label, access_password_hash, max_uses, current_uses
      FROM chaves_acesso
      WHERE is_active = TRUE
        AND NOW() BETWEEN active_from AND active_to
    `);

    let validKey = null;
    for (const key of keys) {
      const isValidKey = await bcrypt.compare(accessKey, key.access_password_hash);
      if (isValidKey) {
        // Verificar limite de utilizações
        if (key.max_uses !== null && key.current_uses >= key.max_uses) {
          return res.status(403).json({
            success: false,
            message: 'Esta chave de acesso atingiu o limite de utilizações'
          });
        }
        validKey = key;
        break;
      }
    }

    if (!validKey) {
      return res.status(401).json({
        success: false,
        message: 'Chave de acesso inválida ou expirada'
      });
    }

    // Hash da palavra-passe
    const passwordHash = await bcrypt.hash(password, 10);

    // Iniciar transacção
    const connection = await db.getConnection();
    await connection.beginTransaction();

    try {
      // Criar estudante
      const [result] = await connection.execute(
        'INSERT INTO estudantes (username, full_name, whatsapp, password_hash) VALUES (?, ?, ?, ?)',
        [username.toLowerCase(), fullName, whatsapp, passwordHash]
      );

      const studentId = result.insertId;

      // Associar chave de acesso
      await connection.execute(
        'INSERT INTO acesso_estudantes (student_id, access_key_id) VALUES (?, ?)',
        [studentId, validKey.id]
      );

      // Incrementar contador de utilizações
      await connection.execute(
        'UPDATE chaves_acesso SET current_uses = current_uses + 1 WHERE id = ?',
        [validKey.id]
      );

      await connection.commit();

      // Gerar token JWT
      const token = jwt.sign(
        { studentId, username: username.toLowerCase() },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
      );

      res.status(201).json({
        success: true,
        message: 'Registo concluído com sucesso! Bem-vindo ao UFUTURO Licenciado.',
        data: {
          token,
          student: {
            id: studentId,
            username: username.toLowerCase(),
            fullName
          }
        }
      });

    } catch (error) {
      await connection.rollback();
      throw error;
    } finally {
      connection.release();
    }

  } catch (error) {
    console.error('Erro no registo:', error);
    res.status(500).json({
      success: false,
      message: 'Erro interno do servidor'
    });
  }
});

// ============================================
// POST /api/auth/verify
// Verificar se token ainda é válido
// ============================================
router.post('/verify', async (req, res) => {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
      return res.status(401).json({
        success: false,
        valid: false
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    const [students] = await db.execute(
      'SELECT id, username, full_name, is_active FROM estudantes WHERE id = ?',
      [decoded.studentId]
    );

    if (students.length === 0 || !students[0].is_active) {
      return res.status(401).json({
        success: false,
        valid: false
      });
    }

    res.json({
      success: true,
      valid: true,
      student: {
        id: students[0].id,
        username: students[0].username,
        fullName: students[0].full_name
      }
    });

  } catch (error) {
    res.status(401).json({
      success: false,
      valid: false
    });
  }
});

module.exports = router;
