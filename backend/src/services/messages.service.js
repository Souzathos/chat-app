const { Message } = require('../../models');



async function createMessage(content) {

    if(!content || content.trim() === '') {
        throw new Error('Message content cannot be empty');
    }

    const userMessage = await Message.create({
        content: content,
        owner: 'USER',
    })

    const systemMessage = await Message.create({
        content: 'Mensagem recebida com sucesso!',
        owner: 'SYSTEM',
    })
   
    
    return {userMessage, systemMessage}
}

async function getAllMessages() {
  const messages = await Message.findAll({
    order: [["createdAt", "ASC"]],
  });

  return messages;
}

module.exports = { createMessage, getAllMessages };