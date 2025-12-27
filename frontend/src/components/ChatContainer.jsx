// container para a header e o chat + toggle

import {
  Box,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import MessageBubble from "./MessageBubble";

export default function ChatContainer({
  messages,
  toggleTheme,
  mode,
}) {
  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        px={2}
        py={1.5}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        borderBottom="1px solid"
        borderColor="divider"
      >
        <Typography variant="h6" fontWeight="bold">
          Atendimento
        </Typography>

        <IconButton onClick={toggleTheme}>
          {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
      </Box>


      {/* renderiza todas as mensagens via map */}
      <Box flex={1} p={2} overflow="auto">
        {messages.map((msg) => (
          <MessageBubble key={msg.id} message={msg} />
        ))}
      </Box>
    </Box>
  );
}
