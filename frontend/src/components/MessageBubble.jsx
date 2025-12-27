import { Box, Typography } from "@mui/material";

export default function MessageBubble({ message }) {
  const isUser = message.owner === "USER";

  return (

     // se o owner da mensagem for = User, a mensagem é renderizada para a esquerda. se for System, é renderizada para a direita. 
    <Box
      display="flex"
      justifyContent={isUser ? "flex-end" : "flex-start"}
      mb={1}
    >
      <Box
        maxWidth="70%"
        px={2}
        py={1.2}
        borderRadius={3}
        bgcolor={isUser ? "primary.main" : "grey.200"}
        color={isUser ? "white" : "black"}
      >
        <Typography variant="body2">{message.content}</Typography>
      </Box>
    </Box>
  );
}
