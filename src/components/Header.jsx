import React from "react";
import "./Header.css";
import { FiSun, FiMoon } from "react-icons/fi";

const Header = ({ toggleTheme, theme }) => {
  return (
    <header className="header">
      <h1>WordFlow</h1>
      <nav>
        <button className="nav-btn">Words</button>
        <button className="nav-btn">Training</button>
        <button className="nav-btn">Progress</button>
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "light" ? <FiMoon size={20} /> : <FiSun size={20} />}
        </button>
      </nav>
    </header>
  );
};

export default Header;
