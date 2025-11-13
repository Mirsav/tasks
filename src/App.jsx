import React, { useMemo, useState, useCallback } from "react";
import "./App.css";
import SearchInput from "./SearchInput";
import ItemList from "./ItemList";
import CounterButton from "./CounterButton";
import withRenderTracker from "./hoc";

const generatedItem = () => {
  let items = [];
  for (let i = 0; i <= 100; i++) {
    items.push({ id: i, text: `Элемент ${i}` });
  }
  return items;
};

const allItems = generatedItem();

const RenderCounterButton = withRenderTracker(CounterButton, 'CounterButton')
const RenderItemList = withRenderTracker(ItemList, 'ItemList')
const RenderSearchInput = withRenderTracker(SearchInput, 'SearchInput')

function App() {
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);


  const plusCount = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  const handleSearch = useCallback((value) => {
    setSearch(value);
  }, []);

  const filtered = useMemo(() => {
    return allItems.filter((item) =>
      item.text.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  return (
    <>
      <h3>Отсортированный список</h3>
      <RenderSearchInput onChange={handleSearch} />
      <RenderCounterButton onClick={plusCount} count={count} />
      <RenderItemList items={filtered} />
    </>
  );
}

export default App;
