import { useLanguage } from "./LanguageContext";

import "../styles/languageToggle.css";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      className="language-toggle"
      onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
      aria-label="Trocar idioma"
    >
      <span className={language === "pt" ? "active" : ""}>
        PT
      </span>

      <span className="separator">•</span>

      <span className={language === "en" ? "active" : ""}>
        EN
      </span>
    </button>
  );
}