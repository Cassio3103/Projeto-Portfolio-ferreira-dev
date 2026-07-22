import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import { LanguageProvider } from "./components/LanguageContext";

import "./styles/global.css";
import "./styles/logo.css";
import "./styles/hero.css";
import "./styles/home.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>
);