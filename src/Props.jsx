function Props({home}) {
  return (
    <div>
      <h2>Введение в Props</h2>

      <span>
        <h3> Что такое props? </h3>
        <li>
          - Props — это объект, содержащий данные, которые передаются в
          компонент из его родителя.
        </li>
        <li>
          - Props похожи на параметры функций: они предоставляют компонентам
          необходимую информацию для корректной работы.
        </li>
        <h3>Почему props важны?</h3>
        <li>
          - Они позволяют создавать динамичные компоненты, которые могут
          отображать разные данные.
        </li>
        <li>
          - С props можно легко передавать данные внутрь сложной структуры
          компонентов.
        </li>
        <h3>Аналогия: параметры функций</h3>
        Представь, что props — это параметры, которые передаются функции при ее
        вызове. Вместо:
        <pre>
          <code>
            <b>{`
            function greet(name) {
                return \`Hello, \${name}\`;
            }
            console.log(greet('Pavel'));
`}</b>
          </code>
        </pre>
        В React ты можешь сделать компонент с props:
        <pre>
          <code>
            <b>{`
            function Greeting(props) {
                return <h1>Hello, {props.name}!</h1>;
            }
            <Greeting name={"Pavel"} />;
`}</b>
          </code>
        </pre>
        <h3> Основы работы с Props</h3>
        Props передаются в компоненты так же, как атрибуты в HTML-элементы.
        <h3>Передача данных через JSX</h3>
        Синтаксис прост: данные указываются как атрибуты JSX:
        <pre>
          <code>
            <b>
              {`
                function Welcome(props) {
                return <h1>Welcome, {props.userName}!</h1>;
                }

                <Welcome userName={"Pavel"} />;
            `}
            </b>
          </code>
        </pre>
        <h3> Пример с числом и булевыми значениями</h3>
        <pre>
          <code>
            <b>
              {`
                function UserStatus(props) {
                return (
                    <div>
                    <p>User ID: {props.id}</p>
                    <p>Status: {props.isActive ? 'Active' : 'Inactive'}</p>
                    </div>
                );
                }

                <UserStatus id={123} isActive={true} />;
            `}
            </b>
          </code>
        </pre>


<h3> Использование `props.children` в компонентах</h3>

<h3> Что такое `props.children`?</h3>

`props.children` — это специальное свойство, которое автоматически передаётся в компонент, если внутри него вложены другие компоненты или элементы. Это позволяет создавать гибкие и универсальные компоненты.

<h3> Пример использования `props.children`</h3>
        <pre>
          <code>
            <b>{`
            function Container({ children }) {
                return <div className="container">{children}</div>;
            }

            function App() {
                return (
                    <Container>
                        <h1>Welcome!</h1>
                        <p>This is a reusable container component.</p>
                    </Container>
                );
            }
            `}</b>
          </code>
        </pre>

      </span>

      <p><a href="https://redev.notion.site/Props-183e3afcb6a980c9ace7d2b996a8e153">
      Ссылка на официальный источник</a></p>

      <p><button onClick={home}>Вернуться на главную страницу</button></p>
    </div>
  );
}

export default Props;
