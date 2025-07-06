import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material";
import { AppContextProvider } from "./context/AppContext.tsx";
import "./styles/index.css";
import App from "./App.tsx";
import "leaflet/dist/leaflet.css";
import theme from "./styles/theme.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </ThemeProvider>
  </StrictMode>
);
