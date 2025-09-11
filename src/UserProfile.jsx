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
      border: "1px solid #bdc3c7",
    },
    dark: {
      backgroundColor: "#2c3e50",
      color: "#ecf0f1",
      border: "1px solid #7f8c8d",
    },
  };

  return (
    <div
      style={{
        padding: "20px",
        margin: "10px",
        borderRadius: "8px",
        ...themeStyles[theme],
      }}
    >
      <h2>{translations[language].profile}</h2>
      <p>This is your profile information...</p>
    </div>
  );
};
