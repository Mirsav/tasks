import React, { useState, useEffect } from "react";

const RandomPic = () => {
  const [img, setImg] = useState([]);
  const [update, setUpdate] = useState(0);
  const [count, setCount] = useState(3);
  const [breed, setBreed] = useState([]);
  const [selectBreed, setSelect] = useState("all");

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((response) => response.json())
      .then((data) => {
        const breedList = Object.keys(data.message);
        setBreed(breedList);
      })
      .catch((error) => console.error("Ошибка загрузвки данных: ", error));
  },[]);

  function fetchImg() {
    let selURL;

    if (selectBreed === "all") {
      selURL = `https://dog.ceo/api/breeds/image/random/${count}`;
    } else {
      selURL = `https://dog.ceo/api/breed/${selectBreed}/images/random/${count}`;
    }

    fetch(selURL)
      .then((response) => response.json())
      .then((data) => setImg(data.message))
      .catch((error) => console.error("Ошибка загрузки данных: ", error));
  }
  useEffect(() => {
    fetchImg();
  }, [count, selectBreed]);

  const handleBreedChange = (e) => {
    setSelect(e.target.value);
    setUpdate((prev) => prev + 1);
  };

  return (
    <>
      <h3>Картинки обновлены {update} раз(а)</h3>
      <button
        onClick={() => {
          fetchImg()
          setUpdate((update) => update + 1);
        }}
      >
        Обновить
      </button>
      <h4>
        Показать
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(Math.min(50, Math.max(1, e.target.value)))}
        />
      </h4>

      <div>
        <label htmlFor="breed-select">Выберите породу: </label>
        <select id="breed-select" value={selectBreed} onChange={handleBreedChange}>
          <option value="all">Все породы</option>
          {breed.map((breed) => (
            <option key={breed} value={breed}>
              {breed}
            </option>
          ))}
        </select>
      </div>

      {img.map((dog, i) => (
        <img key={i} src={dog} alt={`Собака породы ${selectBreed}`}/>
      ))}
    </>
  );
};

export default RandomPic;
