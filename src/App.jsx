import { useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import But from './But.jsx'

const App = () => {
  const [numb, setState] = useState(1)
  const [showHide, setShowHide] = useState(true)
  const [text, setText] = useState('')
  const [color, setColor] = useState('blue')
  const style={color: color}

  return (
  <>
  <But />
  state: {numb}
  <button onClick={() => setState(numb+1)}>click</button>
  <button onClick={() => setShowHide(!showHide)}>{showHide ? 'Скрыть' : 'Показать'}</button>
      {showHide && <p>Опа!</p>}
  <p><input type='text' value={text} onChange={e=>setText(e.target.value)}/></p>
  {<p>Вы ввели: {text}</p>}
  
  <p><button onClick={()=> setColor(color === 'blue' ? 'green' : 'blue')}>Change Color</button></p>
  <p style={style}>Поменяй мне цвет</p>
  </>
  )
}

export default App

