import { Routes, Route } from "react-router";

function State({home}) {
  return (
    
    <div>
      <h2>Управление состоянием с использованием useState</h2>
      <span>
        <h3>1. Что такое state?</h3>
        State (состояние) в React — это место, где компонент хранит свои
        'динамические данные'. Это как записная книжка, которую компонент
        использует для хранения текущего состояния и его изменения.
        <h3>Чем отличается state от props?</h3>
        <li>
          - Props передаются компоненту "снаружи", от родителя и 'неизменные'.
        </li>
        <li>- State управляется "внутри" компонента и 'изменяется'.</li>
        <p>
          Пример аналогии: Props — это текст в книге, который ты читаешь, а
          state — это твои личные заметки на полях.{" "}
        </p>
        <h3>2. Создание и использование state</h3>
        <h4>Hook `useState`</h4>В функциональных компонентах для работы с state
        используется хук useState.
        <p>Он возвращает массив из двух элементов:</p>
        <li>- state: текущее значение состояния</li>
        <li>- setState: функцию для его обновления.</li>
        <p>
          а принимает initialState: начальное значение состояния. Может быть
          примитивным типом данных, объектом или функцией.
        </p>
        <pre>
          <b>
            <code>{`
                import React, { useState } from 'react';
                const [state, setState] = useState(initialState);
                import React, { useState } from "react";

                function Counter() {
                    const [count, setCount] = useState(0);

                    return (
                        <div>
                        <p>Current count: {count}</p>
                        <button onClick={() => setCount((prevCount) => prevCount + 1)}>Increase</button>
                        </div>
                    );
                    }`}</code>
          </b>
        </pre>
        <p>В этом примере:</p>
        <li>- useState(0) устанавливает начальное значение счётчика.</li>
        <li>- setCount обновляет значение.</li>
        При вызове функции обновления, React перерисует компонент с новым
        значением состояния.
      </span>

      <p>
        <a href="https://redev.notion.site/State-183e3afcb6a980b6a293c6d490c994c1">
          Ссылка на официальную документацию
        </a>
      </p>

      <p><button onClick={home}>Вернуться на главную страницу</button></p>
    </div>
  );
}

export default State;
