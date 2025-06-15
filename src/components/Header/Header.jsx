import React from "react";
import "./Header.css";
import { FiSun, FiMoon } from "react-icons/fi";
import { Link } from "react-router-dom";

const Header = ({ toggleTheme, theme }) => {
  return (
    <header className="header-component">
      <Link to="/" className="logo-link">
        <h1 className="header-title">WordFlow</h1>
      </Link>
      <nav className="navigation-container">
        <Link to="/" className="nav-button">
          Words
        </Link>
        <Link to="/game" className="nav-button">
          Training
        </Link>
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
