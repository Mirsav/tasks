import { useState } from "react";
import ChildComponent from "./ChildComponent";
import SiblingComponent from "./SiblingComponent";

const ParentComponent=()=>{
    const [counter, useCount] = useState(0)
    return (
    <>
    <h1>{counter}</h1>
    <p><button onClick={()=>useCount((counter)=>counter+1)}>Увеличить</button>
    <button onClick={()=>useCount(0)}>Сбросить</button>
    <button onClick={()=>useCount(Math.floor(Math.random()*11))}>Случайное значение</button>
    <button onClick={()=>useCount((counter)=>counter-1)}>Уменьшить</button></p>

    <ChildComponent name={'Георий'} counter={counter}/>
    <p><SiblingComponent/></p>
    </>
    )
}

export default ParentComponent