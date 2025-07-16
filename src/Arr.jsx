import { useState } from 'react'

const Arr =()=>{
    const [tasks, setTasks] = useState(["Купить хлеб", "Погулять с собакой"])
    return (
    <>
    <h3>Список задач</h3>
    <ul>{tasks.map((item,index)=> <li key={index}>{item}</li>)}</ul>
    <button onClick={()=>setTasks([...tasks, 'Вынести мусор'])}>Добавить задачу</button>
    <button onClick={()=>setTasks([])}>Удалить</button>
    <p><button onClick={()=>setTasks(tasks.slice(0,-1))}>Последняя задача</button></p>
    </>
    )
}

export default Arr