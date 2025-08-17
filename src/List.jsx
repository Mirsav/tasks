import React from "react";

function List({ items, onUpdateItem }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {item}
          <button onClick={() => onUpdateItem(index)}>Add</button>
        </li>
      ))}
    </ul>
  );
}

export default List;
