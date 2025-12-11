import { Routes, Route } from "react-router";
import { NavLink } from "react-router";
import { useNavigate } from "react-router";
import Components from "./Components";
import Props from "./props";
import State from "./state";

function Home() {
    const navigateHome = useNavigate()
    const handleClick = () => {
    navigateHome('/');
  };
  return (
    <>
    <h1>React notepad</h1>
      <nav>
        <li>
          <ul><NavLink to={"/"}>Home </NavLink></ul>
          <ul><NavLink to={"/components"}>Components </NavLink></ul>
          <ul><NavLink to={"/props"}>Props </NavLink></ul>
          <ul><NavLink to={"/state"}>State </NavLink></ul>
        </li>
      </nav>
      <Routes>
        <Route path="/components" element={<Components home={handleClick}/>} />
        <Route path="/props" element={<Props home={handleClick}/>} />
        <Route path="/state" element={<State home={handleClick}/>} />
      </Routes>
    </>
  )
}

export default Home
