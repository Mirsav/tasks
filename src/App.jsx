import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Comp1 from './Comp1.jsx'
import Comp2 from './Comp2.jsx'
import Comp3 from './Comp3.jsx'
import Comp4 from './Comp4.jsx'
import Comp5 from './Comp5.jsx'
import Comp6 from './Comp6.jsx'

function App() {
  
  return (
    <>
      <h2>Начинаем работать с компонентами</h2>
      <h6>
        <Comp1 numb={1} str={'Игрок'} bool={true} obj={{name: 'Александр'}} func={()=> 'набираем высоту и'} arr={['летит в небо']}/>
        <Comp1 numb={2} str={'Игрок'} bool={false} obj={{name: 'Алексей'}} func={()=> 'остается дома и'} arr={[' не летит в небо']}/>
        <Comp1 numb={3} str={'Игрок'} bool={true} obj={{name: 'Стас'}} func={()=> 'набираем высоту и'} arr={['летит в небо']}/>
        <Comp1 numb={4} str={'Игрок'} bool={false} obj={{name: 'Олег'}} func={()=> 'остается дома и'} arr={['не летит в небо']}/>
        <Comp1 numb={5} str={'Игрок'} bool={false} obj={{name: 'Алик'}} func={()=> 'остается дома и'} arr={['не летит в небо']}/>
        <Comp1 numb={6} str={'Игрок'} bool={true} obj={{name: 'Дрю'}} func={()=> 'набираем высоту и'} arr={['летит в небо']}/>
        </h6>
    </>
  )
}

export default App

