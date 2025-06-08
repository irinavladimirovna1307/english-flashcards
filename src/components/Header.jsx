import React from "react";
import "./Header.css";
import { FiSun, FiMoon } from "react-icons/fi";

const Header = ({ toggleTheme, theme }) => {
  return (
    <header className="header-component">
      <h1 className="header-title">WordFlow</h1>
      <nav className="navigation-container">
        <button className="nav-button">Words</button>
        <button className="nav-button">Training</button>
        <button className="nav-button">Progress</button>
        <button
          className="theme-toggle-button"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {theme === "light" ? <FiMoon size={20} /> : <FiSun size={20} />}
        </button>
      </nav>
    </header>
  );
};

export default Header;
