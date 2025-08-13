import { useState, useRef, useEffect } from "react";

function List({ arr }) {
    const [items, setItem] = useState(arr)

    const addItem = (index)=>{
        const newItem = [...items]
        newItem[index] = `!!!${newItem[index]}`
        setItem(newItem)
    }

  return (
  <>
  {items.map((item, index) => (
    <li key={index}>
        {item}
        <button onClick={()=>addItem(index)}>Add</button>
    </li>
  ))}
  </>
  )
}

export default List;
