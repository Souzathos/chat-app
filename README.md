# Chat App — Desafio Técnico Full Stack

Este projeto foi desenvolvido como parte de um desafio técnico para desenvolvedor júnior/full stack, com o objetivo de demonstrar conhecimentos práticos em React.js, Node.js (Express), PostgreSQL e Sequelize, além de boas práticas de organização, arquitetura e integração entre frontend e backend.

A aplicação consiste em um chat simples, no qual usuários podem enviar mensagens para um atendente e receber uma resposta automática do sistema, com suporte a atualização em tempo real.

# Funcionalidades

Envio de mensagens pelo usuário

Resposta automática do sistema

Exibição do histórico completo de mensagens

Atualização em tempo real entre múltiplos clientes

Interface responsiva e intuitiva

Persistência de dados em banco PostgreSQL

# Tecnologias Utilizadas
## Backend

Node.js

Express

PostgreSQL

Sequelize ORM

Sequelize CLI (migrations)

Socket.IO

Docker

## Frontend

React.js

Vite

Material UI (MUI)

Axios

Socket.IO Client

# Arquitetura

O backend foi estruturado com foco em separação de responsabilidades, facilitando manutenção, leitura e evolução do código:

routes → controllers → services → models


Routes: definem os endpoints da API

Controllers: lidam com as requisições HTTP e respostas

Services: concentram a regra de negócio e o acesso ao banco de dados

Models: representam as entidades do banco utilizando Sequelize

# Fluxo da Aplicação
Comunicação REST (HTTP)

GET /messages → retorna o histórico de mensagens

POST /messages → salva a mensagem do usuário e gera a resposta automática do sistema

Comunicação em Tempo Real (WebSocket)

Após salvar a mensagem no banco, o backend emite um evento via Socket.IO

Todos os clientes conectados recebem a nova mensagem instantaneamente

O frontend atualiza o chat sem necessidade de recarregar a página ou realizar polling

Esse modelo melhora a experiência do usuário e reduz chamadas desnecessárias à API.

#  Banco de Dados
Tabela: Messages
Campo	Tipo	Descrição
id	integer	Identificador da mensagem
content	text	Conteúdo da mensagem
owner	string	USER ou SYSTEM
createdAt	timestamp	Data e hora de criação
updatedAt	timestamp	Data e hora da última atualização

As tabelas são criadas utilizando migrations do Sequelize, conforme solicitado no desafio.

#  Como Executar o Projeto
Pré-requisitos

Node.js

Docker

NPM

## 1️ Banco de Dados (PostgreSQL via Docker)
docker run --name postgres-chat \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=chat_app \
  -p 5432:5432 \
  -d postgres:16

## 2️ Backend
cd backend,
npm install,
npx sequelize-cli db:migrate,
npm start


A API estará disponível em:

http://localhost:3001

## 3️ Frontend
cd frontend,
npm install,
npm run dev


A aplicação estará disponível em:

http://localhost:5173

#  Diferencial Implementado

Como diferencial ao desafio, foi implementado um chat em tempo real utilizando WebSocket (Socket.IO).

Mensagens exibidas instantaneamente em múltiplos clientes

Eliminação de polling no frontend

Backend atuando como fonte única de verdade

Esse diferencial melhora a performance e a experiência do usuário.


### .env
PORT=3001

DB_HOST=127.0.0.1

DB_PORT=5432

DB_NAME=chat_app

DB_USER=postgres

DB_PASSWORD=postgres

DB_DIALECT=postgres

