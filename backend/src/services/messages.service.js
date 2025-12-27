const { Message } = require("../../models");

// Aplica a regra de negócio do chat.
// Aqui não existe HTTP: apenas validação e acesso ao banco.
async function createMessage(content, emit) {
  // Evita salvar mensagens vazias ou só com espaços
  if (!content || content.trim() === "") {
    throw new Error("Message content cannot be empty");
  }

  // Salva a mensagem enviada pelo usuário
  const userMessage = await Message.create({
    content,
    owner: "USER",
  });

  // Gera automaticamente a resposta do sistema
  const systemMessage = await Message.create({
    content: "Mensagem recebida com sucesso!",
    owner: "SYSTEM",
  });

  // Se houver um emitter (ex: Socket.IO), notifica clientes em tempo real
  if (typeof emit === "function") {
    emit("message:new", userMessage);
    emit("message:new", systemMessage);
  }

  // Retorna ambas as mensagens criadas
  return { userMessage, systemMessage };
}

// Busca todo o histórico de mensagens do chat,
// ordenando pela data de criação
async function getAllMessages() {
  const messages = await Message.findAll({
    order: [["createdAt", "ASC"]],
  });

  return messages;
}

module.exports = { createMessage, getAllMessages };
