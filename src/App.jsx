import React, { userEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import RandomPic from "./RandomPic";

function App() {
  return (
    <>
      <h1>Галерея собак</h1>
      <RandomPic />
    </>
  );
}

export default App;
