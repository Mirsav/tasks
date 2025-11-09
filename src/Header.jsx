import React from "react";
import { useLanguage } from "./LanguageContext";
import { useTheme } from "./ThemeContext";
import { translations } from "./translations";

export const Header = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();

  const themeStyles = {
    light: {
      backgroundColor: "#f0f0f0",
      color: "#333",
    },
    dark: {
      backgroundColor: "#333",
      color: "#fff",
    },
  };

  return (
    <header
      style={{
        ...themeStyles[theme],
      }}
    >
      <h1>{translations[language].welcome}</h1>
    </header>
  );
};
