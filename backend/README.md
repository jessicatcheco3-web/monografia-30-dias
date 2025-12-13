# UFUTURO Licenciado - Backend API

API REST para a plataforma UFUTURO Licenciado, desenvolvida em Node.js com Express e MySQL.

## Requisitos

- Node.js 18+
- MySQL 5.7+ ou MariaDB 10.3+
- npm ou yarn

## Instalação no Hostinger

### 1. Configurar Base de Dados

1. Aceda ao painel do Hostinger → **Bases de Dados** → **MySQL**
2. Crie uma nova base de dados (ex: `u123456789_ufuturo`)
3. Crie um utilizador com permissões totais
4. Anote as credenciais

### 2. Executar o Schema SQL

1. Aceda ao **phpMyAdmin** no Hostinger
2. Seleccione a base de dados criada
3. Vá ao separador **SQL**
4. Cole o conteúdo do ficheiro `schema.sql`
5. Execute

### 3. Configurar o Backend

```bash
# Clonar ou fazer upload dos ficheiros
cd backend

# Instalar dependências
npm install

# Copiar ficheiro de ambiente
cp .env.example .env

# Editar .env com as suas credenciais
nano .env
```

### 4. Gerar Chave JWT

```bash
# No terminal, gerar uma chave segura
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

Copie o resultado para `JWT_SECRET` no `.env`.

### 5. Criar Primeira Chave de Acesso

```javascript
// Executar no Node.js para gerar hash da chave
const bcrypt = require('bcrypt');
const key = 'UFUTUROlicenciadosoueu1';
bcrypt.hash(key, 10).then(hash => console.log(hash));
```

Insira na base de dados:

```sql
INSERT INTO chaves_acesso (key_label, access_password_hash, active_from, active_to)
VALUES (
  'Lote Inicial – Estudantes Fundadores',
  '$2b$10$...hash_gerado...',
  NOW(),
  DATE_ADD(NOW(), INTERVAL 1 YEAR)
);
```

### 6. Iniciar o Servidor

```bash
# Produção
npm start

# Desenvolvimento
npm run dev
```

## Endpoints da API

### Autenticação

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| POST | `/api/auth/login` | Login de estudante |
| POST | `/api/auth/register` | Registo com chave de acesso |
| POST | `/api/auth/verify` | Verificar token JWT |

### Progresso

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/api/progress` | Obter progresso completo |
| POST | `/api/progress/update` | Actualizar progresso de aula |
| POST | `/api/progress/sync` | Sincronizar do localStorage |
| DELETE | `/api/progress/reset` | Resetar progresso |

### Avaliações

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| POST | `/api/reviews` | Submeter avaliação |
| GET | `/api/reviews/mine` | Obter minha avaliação |
| GET | `/api/reviews/stats` | Estatísticas públicas |

## Consumir API no Frontend

### Configurar Cliente HTTP

```typescript
// src/lib/api.ts
const API_URL = 'https://api.ufuturolicenciado.com';

export const api = {
  async request(endpoint: string, options: RequestInit = {}) {
    const token = localStorage.getItem('ufuturo-token');
    
    const response = await fetch(`${API_URL}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options.headers,
      },
    });
    
    return response.json();
  },
  
  get: (endpoint: string) => api.request(endpoint),
  
  post: (endpoint: string, data: object) => 
    api.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    }),
};
```

### Exemplo de Login

```typescript
const handleLogin = async (username: string, password: string) => {
  const result = await api.post('/api/auth/login', { username, password });
  
  if (result.success) {
    localStorage.setItem('ufuturo-token', result.data.token);
    // Redirigir para dashboard
  }
};
```

### Sincronizar Progresso

```typescript
const syncProgress = async () => {
  const stored = localStorage.getItem('ufuturo-progress');
  if (!stored) return;
  
  const { completedLessons } = JSON.parse(stored);
  await api.post('/api/progress/sync', { completedLessons });
};
```

## Segurança

- ✅ Palavras-passe com hash bcrypt
- ✅ Autenticação JWT
- ✅ Rate limiting
- ✅ Helmet para headers de segurança
- ✅ CORS configurado
- ✅ Input sanitization
- ✅ Prepared statements (prevenção SQL injection)

## Suporte

Dúvidas técnicas: grupo WhatsApp oficial do curso
