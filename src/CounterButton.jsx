import { memo } from "react"

function CounterButton({onClick, count}){
    console.log('render Button')
    
    return (
    <>
    <button onClick={onClick}>Увеличить счетчик: {count}</button>
    </>
    )
}

export default memo(CounterButton)