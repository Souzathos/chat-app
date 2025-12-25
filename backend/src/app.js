const express = require("express");
const cors = require("cors");

const messagesRoutes = require("./routes/messages.routes");

const app = express();

app.use(cors());
app.use(express.json());

// rotas
app.use(messagesRoutes);


module.exports = app;