import React, { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import List from "./List";

function App() {
  const [items, setItems] = useState(['First ','Second ','Third ','Fourth ', 'Fifth '])
  const [value, setValue] = useState('')
  const res = useRef(null)

const addItem = (index)=>{
        const newItem = [...items]
        newItem[index] = `!!!${newItem[index]}`
        setItems(newItem)
    }

  function focusInput() {
  res.current.focus();
}
  const handleInput=(e)=>{
    if(e.key==='Enter' && value.trim() !== '')
      setItems([...items, value.trim()])
      setValue(value)
  }

  return (
    <>
    <input ref={res} type="text" value={value} onChange={(e)=> setValue(e.target.value)} onKeyDown={handleInput} />
    <button onClick={focusInput}>Фикс</button>
    <List items={items} onUpdateItem={addItem}/>
    </>
  );
}

export default App;
