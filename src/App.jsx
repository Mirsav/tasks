import React, { useMemo, useState, useCallback} from "react";
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
  
  const plusCount = useCallback(()=>{
    setCount((prevCount)=> prevCount+1)
  },[])

  const handleSearch = useCallback((value) =>{
    setSearch(value)
  },[])

  const filtered = useMemo(() =>{
    return allItems.filter(item=>
    item.text.toLowerCase().includes(search.toLowerCase()))
  }, [search])
    

  return (
    <>
    <h3>Отсортированный список</h3>
      <SearchInput onChange={handleSearch}/>
      <CounterButton onClick={plusCount} count={count}/>
      <ItemList items={filtered}/>
      
    </>
  );
}

export default App;
