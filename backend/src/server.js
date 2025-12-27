require("dotenv").config();
const http = require("http");
const { Server } = require("socket.io");
const app = require("./app");
const { setIO } = require("./socket");

const PORT = process.env.PORT || 3001;

// Cria o servidor HTTP a partir do Express
// Isso é necessário para integrar o Socket.IO
const httpServer = http.createServer(app);

// Inicializa o Socket.IO em cima do servidor HTTP
// Liberando acesso do frontend (Vite roda em 5173)
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

// Disponibiliza a instância do io para o restante da aplicação
// (controllers/services podem emitir eventos)
setIO(io);

// Escuta conexões de novos clientes via WebSocket
io.on("connection", (socket) => {
  console.log("Socket conectado:", socket.id);

  // Dispara quando o cliente se desconecta
  socket.on("disconnect", () => {
    console.log("Socket desconectou:", socket.id);
  });
});

// Sobe o servidor HTTP (Express + Socket.IO)
httpServer.listen(PORT, () => {
  console.log(`API rodando em http://localhost:${PORT}`);
});
