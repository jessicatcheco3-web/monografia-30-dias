/**
 * UFUTURO LICENCIADO - Servidor Backend
 * API REST para gestão de estudantes, progresso e avaliações
 */

require('dotenv').config();

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const authRoutes = require('./routes/auth');
const progressRoutes = require('./routes/progress');
const reviewRoutes = require('./routes/reviews');

const app = express();
const PORT = process.env.PORT || 3001;

// ============================================
// Middleware de Segurança
// ============================================

// Helmet para headers de segurança
app.use(helmet());

// CORS configurado para domínios específicos
const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:5173'];
app.use(cors({
  origin: (origin, callback) => {
    // Permitir requests sem origin (como mobile apps ou Postman)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Acesso não autorizado pelo CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Rate limiting para prevenir ataques de força bruta
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // máximo 100 requests por IP
  message: {
    success: false,
    message: 'Demasiadas requisições. Tente novamente em 15 minutos.'
  }
});

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10, // máximo 10 tentativas de login
  message: {
    success: false,
    message: 'Demasiadas tentativas de autenticação. Tente novamente em 15 minutos.'
  }
});

app.use(limiter);
app.use('/api/auth', authLimiter);

// Parser de JSON
app.use(express.json({ limit: '10kb' }));

// ============================================
// Rotas da API
// ============================================

app.use('/api/auth', authRoutes);
app.use('/api/progress', progressRoutes);
app.use('/api/reviews', reviewRoutes);

// Rota de verificação de saúde
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'API UFUTURO Licenciado operacional',
    timestamp: new Date().toISOString()
  });
});

// ============================================
// Tratamento de Erros
// ============================================

// Rota não encontrada
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Recurso não encontrado'
  });
});

// Erro global
app.use((err, req, res, next) => {
  console.error('Erro:', err.message);
  
  res.status(err.status || 500).json({
    success: false,
    message: process.env.NODE_ENV === 'production' 
      ? 'Erro interno do servidor' 
      : err.message
  });
});

// ============================================
// Iniciar Servidor
// ============================================

app.listen(PORT, () => {
  console.log(`🚀 Servidor UFUTURO Licenciado a correr na porta ${PORT}`);
  console.log(`📚 Ambiente: ${process.env.NODE_ENV || 'development'}`);
});
