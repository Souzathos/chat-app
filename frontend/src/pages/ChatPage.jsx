import { Box, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import ChatContainer from "../components/ChatContainer";
import MessageInput from "../components/MessageInput";
import { api } from "../services/api";

export default function ChatPage({ toggleTheme, mode }) {
  const [messages, setMessages] = useState([]);

  // carrega todas as mensagens da API (histórico)
  const loadMessages = async () => {
    const res = await api.get("/messages");
    setMessages(res.data);
  };

  // envia a mensagem do usuário para a API
  // com WebSocket, quem atualiza a tela é o evento "message:new"
  const sendMessage = async (content) => {
    await api.post("/messages", { content });
    // NÃO chama loadMessages() aqui, senão duplica (POST + socket)
  };

  useEffect(() => {
    // carrega histórico ao abrir a tela
    loadMessages();

    // conecta no websocket do backend
    const socket = io("http://localhost:3001");

    // toda vez que o backend emitir uma nova mensagem, adiciona no chat
    socket.on("message:new", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    // fecha a conexão ao desmontar o componente
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <Box height="100vh" width="100vw" display="flex" bgcolor="background.default">
      <Paper
        elevation={0}
        square
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <ChatContainer messages={messages} toggleTheme={toggleTheme} mode={mode} />

        <Box p={2} borderTop="1px solid" borderColor="divider">
          <MessageInput onSend={sendMessage} />
        </Box>
      </Paper>
    </Box>
  );
}
