# PGATS API

API REST para login, registro de usuários, consulta de usuários e transferência de valores. Utiliza Express, Swagger UI e banco de dados em memória.

## Instalação

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o servidor:
   ```bash
   node server.js
   ```

## Endpoints

- `POST /users/register`: Registra novo usuário
- `POST /users/login`: Realiza login
- `GET /users`: Consulta usuários
- `POST /transfers`: Realiza transferência
- `GET /transfers`: Consulta transferências
- `GET /api-docs`: Documentação Swagger

## Regras de Negócio
- Login exige usuário e senha
- Não é permitido registrar usuários duplicados
- Transferências para não favorecidos só podem ser feitas se o valor for menor que R$ 5.000,00

## Testes
Para testar a API, utilize ferramentas como Postman ou automação com Supertest.

## Estrutura
- `controller/`: Rotas e lógica de entrada
- `service/`: Regras de negócio
- `model/`: Dados em memória
- `app.js`: Configuração da aplicação
- `server.js`: Inicialização do servidor
- `swagger.json`: Documentação Swagger
