import React, { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import List from "./List";

function App() {

  return (
    <>
    <List arr={['First ','Second ','Third ','Fourth ', 'Fifth ']}/>
    </>
  );
}

export default App;
