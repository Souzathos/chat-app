💬 Chat App – Desafio Técnico Full Stack

Este projeto foi desenvolvido como parte de um desafio técnico para desenvolvedor júnior/full stack, com o objetivo de avaliar conhecimentos em React.js, Node.js (Express), PostgreSQL e Sequelize, além de organização de código e arquitetura.

A aplicação consiste em um chat simples, onde usuários podem enviar mensagens para um atendente e receber uma resposta automática do sistema, com suporte a atualização em tempo real.

🚀 Funcionalidades

Envio de mensagens pelo usuário

Resposta automática do sistema

Histórico completo de mensagens

Atualização em tempo real entre múltos clientes (WebSocket)

Interface responsiva e simples

Persistência de dados em banco PostgreSQL

🛠️ Tecnologias Utilizadas
Backend

Node.js

Express

PostgreSQL

Sequelize ORM

Sequelize CLI (migrations)

Socket.IO

Docker (para ambiente de banco de dados)

Frontend

React.js

Vite

Material UI (MUI)

Axios

Socket.IO Client

🧱 Arquitetura do Projeto

O backend foi estruturado seguindo separação de responsabilidades:

routes → controllers → services → models


Routes: definem os endpoints da API

Controllers: lidam com requisições HTTP e respostas

Services: concentram a regra de negócio e acesso ao banco

Models: representam as entidades do banco (Sequelize)

Essa abordagem facilita manutenção, testes e evolução do código.

🔄 Fluxo da Aplicação
Comunicação REST (HTTP)

GET /messages → retorna o histórico de mensagens

POST /messages → salva a mensagem do usuário e gera a resposta automática

Comunicação em Tempo Real (WebSocket)

Após salvar a mensagem no banco, o backend emite um evento via Socket.IO

Todos os clientes conectados recebem a nova mensagem instantaneamente

O frontend atualiza o chat sem necessidade de polling ou refresh

Esse modelo melhora a experiência do usuário e reduz chamadas desnecessárias à API.

🗄️ Banco de Dados

Tabela Messages:

Campo	Tipo	Descrição
id	integer	Identificador da mensagem
content	text	Conteúdo da mensagem
owner	string	USER ou SYSTEM
createdAt	timestamp	Data/hora da criação
updatedAt	timestamp	Data/hora da última atualização

As tabelas são criadas utilizando migrations do Sequelize, conforme solicitado no desafio.

▶️ Como Rodar o Projeto
Pré-requisitos

Node.js

Docker

NPM

1️⃣ Banco de Dados (PostgreSQL com Docker)
docker run --name postgres-chat \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=chat_app \
  -p 5432:5432 \
  -d postgres:16

2️⃣ Backend
cd backend
npm install
npx sequelize-cli db:migrate
npm start


Backend rodando em:

http://localhost:3001

3️⃣ Frontend
cd frontend
npm install
npm run dev


Frontend rodando em:

http://localhost:5173

⭐ Diferencial Implementado

Além dos requisitos básicos do desafio, foi implementado um chat em tempo real utilizando WebSocket (Socket.IO).

Mensagens aparecem instantaneamente em múltiplas abas

Sem polling no frontend

Backend atua como fonte única de verdade

Esse diferencial melhora a performance e a experiência do usuário.

📌 Possíveis Melhorias Futuras

Identificação de usuários (nome ou sessão)

Autenticação

Indicador de “usuário digitando”

Testes automatizados

Deploy em ambiente cloud

👤 Autor

Desenvolvido por Athos Felipe Nascimento de Souza
Como parte de um desafio técnico para avaliação de habilidades em desenvolvimento full stack.
