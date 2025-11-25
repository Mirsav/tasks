import { Link, Outlet } from "react-router";

const Dashboard = () => {
  return (
    <div>
      <h3>Мой Dashboard</h3>

      <nav>
        <Link to={'/dashboard/home'}>Главная</Link>
        <Link to={'/dashboard/setting'}>Настройка</Link>
      </nav>

      <hr/>

      <Outlet/>
    </div>
  );
};

export default Dashboard;
