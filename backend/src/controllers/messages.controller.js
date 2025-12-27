const { createMessage, getAllMessages } = require("../services/messages.service");
const { getIO } = require("../socket");

// Controller responsável por lidar com a requisição HTTP
// e chama o service para aplicar a lógica
async function sendMessage(req, res) {
  try {
    const { content } = req.body;

    // Pega a instância do Socket.IO e cria um "emit" para o service usar
    const io = getIO();
    const emit = (event, payload) => io.emit(event, payload);

    // Chama o service que aplica a regra de negócio
    const result = await createMessage(content, emit);

    // Retorna 201 pois um novo recurso foi criado
    res.status(201).json(result);
  } catch (error) {
    // Erros de validação retornam 400
    res.status(400).json({ error: error.message });
  }
}

async function getMessages(req, res) {
  try {
    const messages = await getAllMessages();
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { sendMessage, getMessages };
