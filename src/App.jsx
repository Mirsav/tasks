import "./App.css";
import { Routes, Route, NavLink } from "react-router";
import Home from "./Home";
import User from "./User";
import About from "./About";
import Dashboard from "./Dashboard";
import DashboardHome from "./DashboardHome";
import DashboardSetting from "./DashboardSetting";

function App() {
  return (
    <>
      <nav>
        <NavLink to={"/home"}>Домашняя</NavLink> |
        <NavLink to={"/about"}>О компании</NavLink> |
        <NavLink to={"/user"}>О себе</NavLink> |
        <NavLink to={"/dashboard"}>DASH</NavLink>
      </nav>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user/:id" element={<User />} />

        <Route path="/dashboard" element={<Dashboard />}>
          <Route index path="home" element={<DashboardHome />} />
          <Route path="setting" element={<DashboardSetting />} />
        </Route>

        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
