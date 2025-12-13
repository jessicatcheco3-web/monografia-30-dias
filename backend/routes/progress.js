/**
 * Rotas de Progresso das Aulas
 */

const express = require('express');
const db = require('../config/database');
const { authenticateToken } = require('../middleware/auth');

const router = express.Router();

// Todas as rotas requerem autenticação
router.use(authenticateToken);

// ============================================
// GET /api/progress
// Obter progresso completo do estudante
// ============================================
router.get('/', async (req, res) => {
  try {
    const studentId = req.student.id;

    const [progress] = await db.execute(`
      SELECT module_id, lesson_id, completed, completed_at
      FROM progresso_aulas
      WHERE student_id = ?
      ORDER BY module_id, lesson_id
    `, [studentId]);

    // Formatar como array de lições concluídas
    const completedLessons = progress
      .filter(p => p.completed)
      .map(p => `${p.module_id}:${p.lesson_id}`);

    res.json({
      success: true,
      data: {
        completedLessons,
        details: progress
      }
    });

  } catch (error) {
    console.error('Erro ao obter progresso:', error);
    res.status(500).json({
      success: false,
      message: 'Erro ao obter progresso'
    });
  }
});

// ============================================
// POST /api/progress/update
// Actualizar progresso de uma aula
// ============================================
router.post('/update', async (req, res) => {
  try {
    const studentId = req.student.id;
    const { moduleId, lessonId, completed } = req.body;

    // Validação
    if (!moduleId || !lessonId || typeof completed !== 'boolean') {
      return res.status(400).json({
        success: false,
        message: 'moduleId, lessonId e completed são obrigatórios'
      });
    }

    // Upsert do progresso
    await db.execute(`
      INSERT INTO progresso_aulas (student_id, module_id, lesson_id, completed, completed_at)
      VALUES (?, ?, ?, ?, ?)
      ON DUPLICATE KEY UPDATE 
        completed = VALUES(completed),
        completed_at = VALUES(completed_at)
    `, [
      studentId,
      moduleId,
      lessonId,
      completed,
      completed ? new Date() : null
    ]);

    res.json({
      success: true,
      message: completed 
        ? 'Aula marcada como concluída!' 
        : 'Aula desmarcada'
    });

  } catch (error) {
    console.error('Erro ao actualizar progresso:', error);
    res.status(500).json({
      success: false,
      message: 'Erro ao actualizar progresso'
    });
  }
});

// ============================================
// POST /api/progress/sync
// Sincronizar progresso do localStorage
// ============================================
router.post('/sync', async (req, res) => {
  try {
    const studentId = req.student.id;
    const { completedLessons } = req.body;

    if (!Array.isArray(completedLessons)) {
      return res.status(400).json({
        success: false,
        message: 'completedLessons deve ser um array'
      });
    }

    const connection = await db.getConnection();
    await connection.beginTransaction();

    try {
      // Processar cada lição
      for (const lessonKey of completedLessons) {
        const [moduleId, lessonId] = lessonKey.split(':');
        
        if (moduleId && lessonId) {
          await connection.execute(`
            INSERT INTO progresso_aulas (student_id, module_id, lesson_id, completed, completed_at)
            VALUES (?, ?, ?, TRUE, NOW())
            ON DUPLICATE KEY UPDATE 
              completed = TRUE,
              completed_at = COALESCE(completed_at, NOW())
          `, [studentId, moduleId, lessonId]);
        }
      }

      await connection.commit();

      res.json({
        success: true,
        message: `${completedLessons.length} aulas sincronizadas com sucesso`
      });

    } catch (error) {
      await connection.rollback();
      throw error;
    } finally {
      connection.release();
    }

  } catch (error) {
    console.error('Erro na sincronização:', error);
    res.status(500).json({
      success: false,
      message: 'Erro ao sincronizar progresso'
    });
  }
});

// ============================================
// DELETE /api/progress/reset
// Resetar todo o progresso
// ============================================
router.delete('/reset', async (req, res) => {
  try {
    const studentId = req.student.id;

    await db.execute(
      'DELETE FROM progresso_aulas WHERE student_id = ?',
      [studentId]
    );

    res.json({
      success: true,
      message: 'Progresso reiniciado'
    });

  } catch (error) {
    console.error('Erro ao resetar progresso:', error);
    res.status(500).json({
      success: false,
      message: 'Erro ao resetar progresso'
    });
  }
});

module.exports = router;
