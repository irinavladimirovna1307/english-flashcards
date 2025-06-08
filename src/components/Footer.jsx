import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Language Flashcards App</p>
      <div className="footer-links">
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Privacy</a>
      </div>
    </footer>
  );
};

export default Footer;
