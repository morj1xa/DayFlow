import "./BottomNavBar.css";
import homeIcon from "../../Assets/home-svgrepo-com.svg";
import "../../Assets/leaderboard-svgrepo-com.svg";
import "../../Assets/settings-svgrepo-com.svg";
import "../../Assets/trophy-svgrepo-com.svg";
import { NavLink } from "react-router-dom";
import { House, Trophy, Plus, ChartNoAxesColumn, Settings } from "lucide-react";
export default function BottomNavBar() {
  return (
    <nav className="bottom-nav-bar">
      <NavLink to={"/"} className="nav-item">
        <House className="nav-icon" size={30} />
      </NavLink>

      <NavLink to={"/statistics"} className="nav-item">
        <ChartNoAxesColumn className="nav-icon" size={30} />
      </NavLink>

      <NavLink to={"/TaskCreate"} className="nav-item">
        <Plus className="nav-icon" size={30} />
      </NavLink>

      <NavLink to={"/habits"} className="nav-item">
        <Trophy className="nav-icon" size={30} />
      </NavLink>

      <NavLink to={"/settings"} className="nav-item">
        <Settings className="nav-icon" size={30} />
      </NavLink>
    </nav>
  );
}
