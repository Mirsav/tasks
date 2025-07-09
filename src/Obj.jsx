import { useState } from 'react'

const Obj =()=>{
    const [user, setUser] = useState({
  name: "Иван",
  age: 25,
  isActive: true,
});
    return (
    <>
    <p>Имя: {user.name}</p>
    <p>Возраст: {user.age}</p>
    <p>Активен: {user.isActive? 'Да' : 'Нет'}</p>
    <button onClick={()=>setUser({...user, name: 'Артем'})}>Изменить имя</button>
    <button onClick={()=>setUser({...user, age: user.age+1})}>Увеличить возраст</button>
    <button onClick={()=>setUser({...user, isActive: !user.isActive})}>Переключить активность</button>
    </>
    )
}

export default Obj