/**
 * Middleware de Autenticação JWT
 */

const jwt = require('jsonwebtoken');
const db = require('../config/database');

const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Token de autenticação não fornecido'
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Verificar se o estudante ainda existe e está activo
    const [rows] = await db.execute(
      'SELECT id, username, full_name, is_active FROM estudantes WHERE id = ?',
      [decoded.studentId]
    );

    if (rows.length === 0) {
      return res.status(401).json({
        success: false,
        message: 'Estudante não encontrado'
      });
    }

    if (!rows[0].is_active) {
      return res.status(403).json({
        success: false,
        message: 'Conta desactivada. Contacte o suporte.'
      });
    }

    req.student = rows[0];
    next();
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      return res.status(401).json({
        success: false,
        message: 'Sessão expirada. Faça login novamente.'
      });
    }
    
    return res.status(403).json({
      success: false,
      message: 'Token inválido'
    });
  }
};

module.exports = { authenticateToken };
