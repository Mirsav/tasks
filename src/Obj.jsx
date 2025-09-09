import { useState, memo } from "react";

const UserInfo = memo(({ user }) => {
  console.log("render user");
  return (
    <>
      <p>Имя: {user.name}</p>
      <p>Возраст: {user.age}</p>
      <p>Активен: {user.isActive ? "Да" : "Нет"}</p>
    </>
  );
});

const Obj = () => {
  const [user, setUser] = useState({
    name: "Иван",
    age: 25,
    isActive: true,
  });
  return (
    <>
      <h3>Профиль Пользователя</h3>
      <UserInfo user={user} />
      <button onClick={() => setUser({ ...user, name: "Артем" })}>
        Изменить имя
      </button>
      <button onClick={() => setUser({ ...user, age: user.age + 1 })}>
        Увеличить возраст
      </button>
      <p>
        <button onClick={() => setUser({ ...user, isActive: !user.isActive })}>
          Переключить активность
        </button>
      </p>
    </>
  );
};

export default Obj;