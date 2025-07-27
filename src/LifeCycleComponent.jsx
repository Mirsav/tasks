import React, { useState, useEffect } from "react";

// class LifeCycleComponent extends React.Component{
//   state={
//     count:0
//   }

//   componentDidMount(){
//     console.log('Компонент был смонтирован')

//     fetch('https://todo-redev.herokuapp.com/api/todos')
//     .then(response => response.json())
//     .then(data => console.log('Данные с API: ', data))
//     .catch(error => console.error('Ошибка при запросе: ', error))
//   }

//   componentDidUpdate(prevProps, prevState){
//     console.log('Компонент был обновлен!')
//     console.log('Текущее значение count', this.state.count)
//   }

//   componentWillUnmount(){
//     console.log('Компонент будет размонтирован')
//   }

//   shouldComponentUpdate(nextProps, nextState){
//     return nextState.count % 2 === 0;
//   }

//   handleIncrement = ()=>{
//     this.setState(prevState =>({
//       count: prevState.count+1
//     }))
//   }

//   render(){
//     return(
//       <>
//       <h1>Список задач</h1>
//       <p>Текущее значение count: {this.state.count}</p>
//       <button onClick={this.handleIncrement}>Увеличить</button>
//       <p>
//           {this.state.count % 2 === 0
//             ? 'Чётное число — компонент обновился!'
//             : 'Нечётное число — компонент не обновился!'}
//         </p>
//       </>
//     )
//   }
// }

const LifeCycleComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Компонент был смонтирован");

    fetch("https://todo-redev.herokuapp.com/api/todos")
    .then((response) =>
      response.json(),
    )
    .then((data) => console.log("Данные из API: ", data))
    .catch((error) => console.error("Ошибка запроса: ", error));
  }, [])
    

  useEffect(() => {
    if (count % 2 === 0) {
      console.log("Компонент был обновлен!", count);
    }
  }, [count]);

  useEffect(() => {
    return () => console.log("Компонент будет размонтирован");
  }, []);

  return (
    <>
      <>LifeCycle (Functional)</>
      <h2>Счетчик: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Увеличить</button>
      <p>
        {count % 2 === 0
          ? "Четное число - компонент обновился!"
          : "Нечетное число - рендер пропущен!"}
      </p>
    </>
  );
};

export default LifeCycleComponent;
