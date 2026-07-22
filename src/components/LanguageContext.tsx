import { createContext, useContext, useEffect, useState } from "react";

import { pt } from "../locales/pt";
import { en } from "../locales/en";

type Language = "pt" | "en";

const translations = {
  pt,
  en,
};

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: typeof pt;
};

const LanguageContext = createContext({} as LanguageContextType);

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [language, setLanguage] = useState<Language>(() => {
    return (localStorage.getItem("language") as Language) || "pt";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}