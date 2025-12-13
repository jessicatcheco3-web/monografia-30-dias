/**
 * Configuração da Conexão com MySQL
 */

const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT) || 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0
});

// Testar conexão ao iniciar
pool.getConnection()
  .then(connection => {
    console.log('✅ Conexão com MySQL estabelecida');
    connection.release();
  })
  .catch(err => {
    console.error('❌ Erro ao conectar com MySQL:', err.message);
  });

module.exports = pool;
