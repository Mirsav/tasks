import React, { createContext, useState, useContext } from "react";

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LangSwitch");
  }
  return context;
};

export const LangSwitch = ({ children }) => {
  const [lang, setLang] = useState("en");

  const toggleLanguage = () => {
    setLang((prev) => (prev === "en" ? "ru" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ language: lang, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
