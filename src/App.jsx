import "./App.css";
import { ControlsPanel } from "./ControlsPanel";
import { LangSwitch } from "./LanguageContext";
import { ThemeSwitch } from "./ThemeContext";
import { Header } from "./Header";
import { UserProfile } from "./UserProfile";

function App() {
  return (
    <>
      <LangSwitch>
        <ThemeSwitch>
          <Header />
          <ControlsPanel />
          <UserProfile />
        </ThemeSwitch>
      </LangSwitch>
    </>
  );
}

export default App;
