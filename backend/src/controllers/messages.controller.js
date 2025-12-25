const { createMessage, getAllMessages } = require("../services/messages.service");

async function sendMessage(req, res) {
    try {
        const { content } = req.body;
        const result = await createMessage(content);
        res.status(201).json(result);
    } catch (error) {
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
