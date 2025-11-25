import { useParams, useNavigate } from "react-router";

const User = () => {
  const students = [
    { id: 1, name: "Igor", age: 17 },
    { id: 2, name: "Artik", age: 19 },
    { id: 3, name: "Grisha", age: 17 },
    { id: 4, name: "Ilya", age: 18 },
  ];

  const { id } = useParams()
  const navigate = useNavigate()

  const result = students.find((item) => item.id == id);

  const handleClick = ()=>{
    console.log('ReDirect')
    navigate('/home')
  }
  return (
    <div>
      {result.name} {result.age}
      <button onClick={handleClick}>Домой</button>
    </div>
  );
};

export default User;
