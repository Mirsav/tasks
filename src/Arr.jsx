import { useState, memo } from "react";

const TaskItem = memo(({ task }) => {
  console.log("render task");
  return <li>{task}</li>;
});

const Arr = () => {
  const [tasks, setTasks] = useState(["Купить хлеб", "Погулять с собакой"]);
  return (
    <>
      <h3>Список задач</h3>
      <ul>
        {tasks.map((item, index) => (
          <TaskItem key={index} task={item} />
        ))}
      </ul>
      <button onClick={() => setTasks([...tasks, "Вынести мусор"])}>
        Добавить задачу
      </button>
      <button onClick={() => setTasks([])}>Удалить</button>
      <p>
        <button onClick={() => setTasks(tasks.slice(0, -1))}>
          Последняя задача
        </button>
      </p>
    </>
  );
};

export default Arr;