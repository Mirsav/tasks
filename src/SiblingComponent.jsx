import { useState } from "react";

const SiblingComponent = () =>{
    const [text, setText] = useState('Видишь текст? Нажми кнопку чуть ниже!')
    return (
    <>
    <b><h1>{text}</h1></b>
    <p><button onClick={()=>setText("REDEV")}>Жми!</button></p>
    </>
    )
}

export default SiblingComponent