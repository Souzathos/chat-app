import { CssBaseline, ThemeProvider } from "@mui/material";
import { useMemo, useState } from "react";
import ChatPage from "./pages/ChatPage";
import { getTheme } from "./theme";

export default function App() {
  // cria o state mode (light ou dark) e lê o tema salvo no localStorage, se não houver nenhum, usa light como padrão
  const [mode, setMode] = useState(
    localStorage.getItem("theme") || "light"
  );

  // garante que getTheme só sera recriado quando mode mudar
  const theme = useMemo(() => getTheme(mode), [mode]);

  const toggleTheme = () => {
    // alterna entre light/dark e salva no localStorage
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("theme", newMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ChatPage toggleTheme={toggleTheme} mode={mode} />
    </ThemeProvider>
  );
}
