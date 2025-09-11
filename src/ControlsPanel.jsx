import React from "react";
import { useLanguage } from "./LanguageContext";
import { useTheme } from "./ThemeContext";

export const ControlsPanel = () => {
  const { toggleLanguage } = useLanguage();
  const { toggleTheme } = useTheme();

  return (
    <>
      <h3>Controls Panel</h3>
      <button onClick={toggleLanguage}>Сменить язык</button>
      <button onClick={toggleTheme}>Сменить тему</button>
    </>
  );
};
