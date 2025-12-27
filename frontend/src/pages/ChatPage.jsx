import { Box, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import ChatContainer from "../components/ChatContainer";
import MessageInput from "../components/MessageInput";
import { api } from "../services/api";

export default function ChatPage({ toggleTheme, mode }) {
  const [messages, setMessages] = useState([]);

  // carrega todas as mensagens da API
  const loadMessages = async () => {
    const res = await api.get("/messages");
    // passa todas as mensagens da API para o state messages
    setMessages(res.data);
  };

  // envia a mensagem do usuário para a API
  const sendMessage = async (content) => {
    await api.post("/messages", { content });
    // recarrega todas as mensagens após o envio
    loadMessages();
  };

  // carrega todas as mensagens ao montar o componente
  useEffect(() => {
    loadMessages();
  }, []);

  return (
    <Box
      height="100vh"
      width="100vw"
      display="flex"
      bgcolor="background.default"
    >
      <Paper
        elevation={0}
        square
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <ChatContainer
          messages={messages}
          toggleTheme={toggleTheme}
          mode={mode}
        />

        <Box
          p={2}
          borderTop="1px solid"
          borderColor="divider"
        >
          <MessageInput onSend={sendMessage} />
        </Box>
      </Paper>
    </Box>
  );

}
