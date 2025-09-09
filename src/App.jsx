import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/GlobalStyle";
import { lightTheme, darkTheme } from "./components/Themes";
import { useDarkMode } from "./components/useDarkMode";
import Toggle from "./components/Toggler";
import "./App.css";
import Obj from "./Obj";
import Arr from "./Arr";
import ArrObj from "./ArrObj";

function App() {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!mountedComponent) return <div />;

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Toggle theme={theme} toggleTheme={themeToggler} />
        <Obj />
        <Arr />
        <ArrObj />
      </>
    </ThemeProvider>
  );
}

export default App;