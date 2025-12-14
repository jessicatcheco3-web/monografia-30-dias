# UFUTURO Licenciado - Guia de Deployment (Hostinger)

## Estrutura Final

```
public_html/
├── api/                    # Backend PHP
│   ├── .htaccess
│   ├── config.php
│   ├── db.php
│   ├── helpers.php
│   ├── auth_login.php
│   ├── auth_logout.php
│   ├── me.php
│   ├── progress_get.php
│   ├── progress_upsert.php
│   ├── review_create.php
│   ├── admin_create_student.php
│   └── schema.sql
├── assets/                 # Ficheiros estáticos do build
├── index.html              # SPA entry point
└── ...                     # Outros ficheiros do dist/
```

## Passo a Passo

### 1. Criar Base de Dados no Hostinger

1. Aceda ao **hPanel** → **Bases de Dados** → **MySQL**
2. Crie uma nova base de dados
3. Anote:
   - Nome da base de dados
   - Nome do utilizador
   - Palavra-passe

### 2. Executar o Schema SQL

1. Aceda ao **phpMyAdmin** no hPanel
2. Seleccione a base de dados criada
3. Vá ao separador **SQL**
4. Cole o conteúdo do ficheiro `public_html/api/schema.sql`
5. Execute

### 3. Configurar API PHP

1. Edite `public_html/api/config.php`:

```php
define('DB_HOST', 'localhost');
define('DB_NAME', 'seu_nome_db');      // Altere!
define('DB_USER', 'seu_utilizador');   // Altere!
define('DB_PASS', 'sua_password');     // Altere!

define('ALLOWED_ORIGINS', [
    'https://seudominio.com',
    'https://www.seudominio.com'
]);
```

2. Edite `public_html/api/admin_create_student.php`:

```php
define('ADMIN_SECRET_KEY', 'GERE_UMA_CHAVE_SECRETA_FORTE');
```

### 4. Build do Frontend

No seu computador local:

```bash
npm install
npm run build
```

### 5. Upload dos Ficheiros

1. Aceda ao **Gestor de Ficheiros** no hPanel
2. Navegue para `public_html/`
3. Faça upload do conteúdo da pasta `dist/`
4. Faça upload da pasta `public_html/api/` completa

### 6. Criar Primeiro Estudante

Use o cURL ou Postman para criar um estudante:

```bash
curl -X POST https://seudominio.com/api/admin_create_student.php \
  -H "Content-Type: application/json" \
  -d '{
    "admin_key": "SUA_CHAVE_ADMIN",
    "username": "estudante.nome",
    "full_name": "Nome Completo do Estudante",
    "password": "senha123",
    "whatsapp": "+258841234567"
  }'
```

### 7. Testar

1. Aceda ao seu domínio
2. Faça login com as credenciais criadas
3. Verifique se o progresso é guardado correctamente

## Segurança

- [ ] Altere todas as palavras-passe no `config.php`
- [ ] Altere a `ADMIN_SECRET_KEY`
- [ ] Remova o estudante de teste da base de dados
- [ ] Configure HTTPS no Hostinger
- [ ] Desactive `display_errors` em produção

## Resolução de Problemas

### Erro de CORS
Verifique se o domínio está listado em `ALLOWED_ORIGINS` no `config.php`.

### Erro de conexão à base de dados
Verifique as credenciais no `config.php` e se a base de dados existe.

### Sessão não persiste
Verifique se os cookies estão a ser enviados com `credentials: 'include'`.
