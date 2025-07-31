import React, {useState, useEffect} from "react"

const RandomPic = () =>{
    const [img, setImg] = useState([])
    const [update, setUpdate] = useState(0)
    const [count, setCount] = useState(3)
    
        function fetchImg(){
        fetch(`https://dog.ceo/api/breeds/image/random/${count}`)
        .then(response => response.json())
        .then(data => setImg(data.message))
        .catch((error) => console.error('Ошибка загрузки данных: ', error))
        }
    useEffect(()=>{
        fetchImg()
    },[])

    return (
    <>
    <h3>Картинки обновлены {update} раз(а)</h3>
    <button onClick={()=>{fetchImg(), setUpdate((update)=>update+1)}}>Обновить</button>
    <h4>Показать <input type='number' value={count} onChange={e => setCount(Math.min(50, Math.max(1, e.target.value)))}/>
    </h4>

   
          {img.map((dog, i) => (
            <img key={i} src={dog} alt="Собака" style={{ width: '200px', height: '200px' }} />
          ))}
    </>
    )
}

export default RandomPic