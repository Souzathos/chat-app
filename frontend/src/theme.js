import { createTheme } from "@mui/material/styles";

// define a paleta de cor, tipografia e bordas do modo light e dark
export const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: "#6366F1",
      },
      background: {
        default: mode === "dark" ? "#0F172A" : "#F3F4F6",
        paper: mode === "dark" ? "#020617" : "#FFFFFF",
      },
    },
    shape: {
      borderRadius: 12,
    },
    typography: {
      fontFamily: "Inter, Roboto, Arial, sans-serif",
    },
  });
