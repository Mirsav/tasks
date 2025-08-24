import React, { useMemo, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SearchInput from "./SearchInput";
import ItemList from "./ItemList";
import CounterButton from "./CounterButton";

  const generatedItem = () =>{
    let items = []
    for(let i=0; i<=100;i++){
      items.push({id: i, text: `Элемент ${i}`})
    }
    return items
  }

  const allItems = generatedItem()



function App() {
  const [search, setSearch] = useState('')
  const [count, setCount] = useState(0)
  
  const plusCount = ()=>{
    setCount(count+1)
  }

  // const handleSearch = ()=>{
  //   setSearch(search)
  // }

  const filtered =
    allItems.filter((item)=>
    item.text.toLowerCase().includes(search.toLowerCase()))

  return (
    <>
    <h3>Отсортированный список</h3>
      <SearchInput onChange={setSearch}/>
      <ItemList items={filtered}/>
      <CounterButton onClick={plusCount} count={count}/>
    </>
  );
}

export default App;
