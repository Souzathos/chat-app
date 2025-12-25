const messagesController = require("../controllers/messages.controller");
const express = require("express");
const router = express.Router();

router.get("/messages", messagesController.getMessages);
router.post("/messages", messagesController.sendMessage);

module.exports = router;