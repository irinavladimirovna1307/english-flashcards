import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1>Language Flashcards</h1>
      <nav>
        <button className="nav-btn">Words</button>
        <button className="nav-btn">Training</button>
        <button className="nav-btn">Progress</button>
      </nav>
    </header>
  );
};

export default Header;
