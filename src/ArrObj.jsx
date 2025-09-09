import { useState, memo, useCallback } from "react";

const CartItem = memo(({ item, onIncrement, onRemove }) => {
  console.log("render cart");
  return (
    <p>
      {item.title} (Ко-во: {item.count})
      <button onClick={() => onIncrement(item.id)}>+1</button>
      <button onClick={() => onRemove(item.id)}>удалить</button>
    </p>
  );
});

const ArrObj = () => {
  const [cart, setCart] = useState([
    { id: 1, title: "Футболка", count: 1 },
    { id: 2, title: "Кепка", count: 2 },
  ]);

  const handleIncrement = useCallback((id) => {
    setCart(prevCart =>
      prevCart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item,
      ),
    );
  }, []);

  const handleRemove = useCallback((id) => {
    setCart(prevCart => prevCart.filter((item) => item.id !== id));
  }, []);
  return (
    <>
      <h3>Корзина товаров</h3>
      {cart.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onIncrement={handleIncrement}
          onRemove={handleRemove}
        />
      ))}
      <p>
        <button onClick={() => setCart([])}>Очистить корзину</button>
      </p>
    </>
  );
};

export default ArrObj;