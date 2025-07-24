import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComp from './MyComp'


function App (){
  const [state, setState] = useState(1)
  return (
    <>
  {state %2 == 0 ? <MyComp number={state}/> : <h1>Пусто!!!</h1>}
  <button onClick={()=> setState(state=>state+1)}>KILL</button>
    </>
  )
}

export default App

