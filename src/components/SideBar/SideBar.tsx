import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { routeUrls } from "../../routes/routes";
import logo from "./Logo.png";
import "./styles.css";

const navItems = [{icon: "home", name: "Home", path: routeUrls.home}, {icon: "view_list", name: "Accordions", path: routeUrls.accordions}, {icon: "remove_red_eye", name: "Paralax", path: routeUrls.parallax}];

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()
  return (
    <nav className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-inner">
        <header className="sidebar-header">
          <button
            type="button"
            className="sidebar-burger"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="material-symbols-outlined">
              {isOpen ? "close" : "menu"}
            </span>
          </button>
          <h2 className="sidebar-logo">Sheva-dev</h2>
        </header>
        <nav className="sidebar-menu">
          {navItems.map((item) => (
            <button key={item.icon} onClick={() => navigate(item.path)} type="button" className="sidebar-button">
              <span className="material-symbols-outlined">{item.icon}</span>
              <p>{item.name}</p>
            </button>
          ))}
        </nav>
      </div>
    </nav>
  );
};