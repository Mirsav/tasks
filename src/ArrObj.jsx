import { useState } from 'react'

const ArrObj =()=>{
    const [cart, setCart] = useState([
  { id: 1, title: "Футболка", count: 1 },
  { id: 2, title: "Кепка", count: 2 },
]);
    return (
    <>
    <h3>Корзина товаров</h3>
    {cart.map(item=>(
        <p key={item.id}>
          {item.title} (Кол-во: {item.count})
          
          <button onClick={() => setCart(cart.map(i => 
            i.id === item.id ? {...i, count: i.count + 1} : i
          ))}>
            +1
          </button>
          
          <button onClick={() => setCart(cart.filter(i => 
            i.id !== item.id
          ))}>
            удалить
          </button>
        </p>
    ))}
    <p>
      <button onClick={()=>setCart([])}>Очистить корзину</button>
    </p>
    </>
    )
}

export default ArrObj