import React from "react";
import { useLanguage } from "./LanguageContext";
import { useTheme } from "./ThemeContext";
import { translations } from "./translations";

export const UserProfile = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();

  const themeStyles = {
    light: {
      backgroundColor: "#e8f4f8",
      color: "#2c3e50",
    },
    dark: {
      backgroundColor: "#2c3e50",
      color: "#ecf0f1",
    },
  };

  return (
    <div
      style={{...themeStyles[theme]}}
    >
      <h2>{translations[language].profile}</h2>
      <p>This is your profile information...</p>
    </div>
  );
};
