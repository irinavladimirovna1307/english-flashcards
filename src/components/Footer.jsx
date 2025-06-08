import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-component">
      <p className="footer-text">© {new Date().getFullYear()} WordFlow App</p>
      <div className="footer-links-container">
        <a href="#" className="footer-link">
          About
        </a>
        <a href="#" className="footer-link">
          Contact
        </a>
        <a href="#" className="footer-link">
          Privacy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
