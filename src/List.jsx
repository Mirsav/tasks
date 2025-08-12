import { useState, useRef, useEffect } from "react";

function List() {
  const [text, setText] = useState("");
  const [student, setStudent] = useState([
    { id: 1, name: "Igor", age: 27 },
    { id: 2, name: "Vitya", age: 15 },
    { id: 3, name: "Sasha", age: 35 },
    { id: 4, name: "Lena", age: 22 },
  ]);

  const inputRef = useRef(null);

  useEffect(()=>{
    inputRef.current.focus()
  },[])

  return (
    <>
      <input
      ref = {inputRef} 
      onChange={(e) => setText(e.target.value)}
      value={text} 
      />
      {student.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.name}</p>
            <p>{item.age}</p>
            -----------------
          </div>
        );
      })}
    </>
  );
}

export default List;
