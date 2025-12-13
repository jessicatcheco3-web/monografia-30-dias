/**
 * Rotas de Avaliações do Curso
 */

const express = require('express');
const db = require('../config/database');
const { authenticateToken } = require('../middleware/auth');

const router = express.Router();

// Todas as rotas requerem autenticação
router.use(authenticateToken);

// ============================================
// POST /api/reviews
// Submeter ou actualizar avaliação
// ============================================
router.post('/', async (req, res) => {
  try {
    const studentId = req.student.id;
    const { rating, comment } = req.body;

    // Validação
    if (!rating || rating < 1 || rating > 5) {
      return res.status(400).json({
        success: false,
        message: 'Avaliação deve ser entre 1 e 5 estrelas'
      });
    }

    // Sanitizar comentário
    const sanitizedComment = comment 
      ? comment.trim().substring(0, 1000) 
      : null;

    // Upsert da avaliação
    await db.execute(`
      INSERT INTO avaliacoes_curso (student_id, rating, comment)
      VALUES (?, ?, ?)
      ON DUPLICATE KEY UPDATE 
        rating = VALUES(rating),
        comment = VALUES(comment)
    `, [studentId, rating, sanitizedComment]);

    res.json({
      success: true,
      message: 'Obrigado pela sua avaliação!'
    });

  } catch (error) {
    console.error('Erro ao submeter avaliação:', error);
    res.status(500).json({
      success: false,
      message: 'Erro ao submeter avaliação'
    });
  }
});

// ============================================
// GET /api/reviews/mine
// Obter avaliação do estudante autenticado
// ============================================
router.get('/mine', async (req, res) => {
  try {
    const studentId = req.student.id;

    const [reviews] = await db.execute(
      'SELECT rating, comment, created_at FROM avaliacoes_curso WHERE student_id = ?',
      [studentId]
    );

    if (reviews.length === 0) {
      return res.json({
        success: true,
        data: null
      });
    }

    res.json({
      success: true,
      data: reviews[0]
    });

  } catch (error) {
    console.error('Erro ao obter avaliação:', error);
    res.status(500).json({
      success: false,
      message: 'Erro ao obter avaliação'
    });
  }
});

// ============================================
// GET /api/reviews/stats
// Estatísticas públicas de avaliações
// ============================================
router.get('/stats', async (req, res) => {
  try {
    const [stats] = await db.execute(`
      SELECT 
        COUNT(*) as total_reviews,
        ROUND(AVG(rating), 1) as average_rating,
        SUM(CASE WHEN rating = 5 THEN 1 ELSE 0 END) as five_stars,
        SUM(CASE WHEN rating = 4 THEN 1 ELSE 0 END) as four_stars,
        SUM(CASE WHEN rating = 3 THEN 1 ELSE 0 END) as three_stars,
        SUM(CASE WHEN rating = 2 THEN 1 ELSE 0 END) as two_stars,
        SUM(CASE WHEN rating = 1 THEN 1 ELSE 0 END) as one_star
      FROM avaliacoes_curso
    `);

    res.json({
      success: true,
      data: stats[0]
    });

  } catch (error) {
    console.error('Erro ao obter estatísticas:', error);
    res.status(500).json({
      success: false,
      message: 'Erro ao obter estatísticas'
    });
  }
});

module.exports = router;
