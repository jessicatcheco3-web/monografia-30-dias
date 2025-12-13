-- ============================================
-- UFUTURO LICENCIADO - Esquema de Base de Dados
-- Compatível com MySQL / MariaDB (Hostinger)
-- ============================================

-- Criar base de dados (executar apenas se necessário)
-- CREATE DATABASE IF NOT EXISTS ufuturo_licenciado CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
-- USE ufuturo_licenciado;

-- ============================================
-- 1. Tabela de Estudantes
-- ============================================
CREATE TABLE IF NOT EXISTS estudantes (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL UNIQUE COMMENT 'Formato: estudante.nome',
    full_name VARCHAR(255) NOT NULL,
    whatsapp VARCHAR(20) NOT NULL,
    password_hash VARCHAR(255) NOT NULL COMMENT 'Hash bcrypt da palavra-passe',
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    INDEX idx_username (username),
    INDEX idx_is_active (is_active)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- 2. Tabela de Chaves de Acesso
-- ============================================
CREATE TABLE IF NOT EXISTS chaves_acesso (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    key_label VARCHAR(255) NOT NULL COMMENT 'Ex: Lote 1 – Primeiros 50 estudantes',
    access_password_hash VARCHAR(255) NOT NULL COMMENT 'Hash bcrypt da chave de acesso',
    max_uses INT UNSIGNED DEFAULT NULL COMMENT 'Número máximo de utilizações (NULL = ilimitado)',
    current_uses INT UNSIGNED DEFAULT 0,
    active_from DATETIME NOT NULL,
    active_to DATETIME NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    INDEX idx_is_active (is_active),
    INDEX idx_active_period (active_from, active_to)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- 3. Tabela de Acesso dos Estudantes
-- ============================================
CREATE TABLE IF NOT EXISTS acesso_estudantes (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    student_id INT UNSIGNED NOT NULL,
    access_key_id INT UNSIGNED NOT NULL,
    granted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (student_id) REFERENCES estudantes(id) ON DELETE CASCADE,
    FOREIGN KEY (access_key_id) REFERENCES chaves_acesso(id) ON DELETE RESTRICT,
    
    UNIQUE KEY unique_student_key (student_id, access_key_id),
    INDEX idx_student_id (student_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- 4. Tabela de Progresso das Aulas
-- ============================================
CREATE TABLE IF NOT EXISTS progresso_aulas (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    student_id INT UNSIGNED NOT NULL,
    module_id VARCHAR(50) NOT NULL,
    lesson_id VARCHAR(50) NOT NULL,
    completed BOOLEAN DEFAULT FALSE,
    completed_at DATETIME DEFAULT NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    FOREIGN KEY (student_id) REFERENCES estudantes(id) ON DELETE CASCADE,
    
    UNIQUE KEY unique_student_lesson (student_id, module_id, lesson_id),
    INDEX idx_student_progress (student_id, completed)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- 5. Tabela de Avaliações do Curso
-- ============================================
CREATE TABLE IF NOT EXISTS avaliacoes_curso (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    student_id INT UNSIGNED NOT NULL,
    rating TINYINT UNSIGNED NOT NULL CHECK (rating >= 1 AND rating <= 5),
    comment TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (student_id) REFERENCES estudantes(id) ON DELETE CASCADE,
    
    UNIQUE KEY unique_student_review (student_id),
    INDEX idx_rating (rating)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- 6. Tabela de Sessões (para autenticação JWT)
-- ============================================
CREATE TABLE IF NOT EXISTS sessoes (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    student_id INT UNSIGNED NOT NULL,
    token_hash VARCHAR(255) NOT NULL,
    expires_at DATETIME NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (student_id) REFERENCES estudantes(id) ON DELETE CASCADE,
    
    INDEX idx_token (token_hash),
    INDEX idx_expires (expires_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================
-- Dados Iniciais (Opcional)
-- ============================================

-- Inserir uma chave de acesso de exemplo (palavra-passe: UFUTUROlicenciadosoueu1)
-- O hash abaixo deve ser gerado com bcrypt
-- INSERT INTO chaves_acesso (key_label, access_password_hash, active_from, active_to, is_active)
-- VALUES ('Lote Inicial – Estudantes Fundadores', '$2b$10$...hash_aqui...', NOW(), DATE_ADD(NOW(), INTERVAL 1 YEAR), TRUE);
