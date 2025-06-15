import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1>404</h1>
        <h2>Страница потерялась!</h2>
        <div className="cute-dog">
          <div className="dog-body"></div>
          <div className="dog-head">
            <div className="dog-ear left"></div>
            <div className="dog-ear right"></div>
            <div className="dog-eye left"></div>
            <div className="dog-eye right"></div>
            <div className="dog-nose"></div>
            <div className="dog-mouth"></div>
          </div>
          <div className="dog-tail"></div>
          <div className="dog-leg front"></div>
          <div className="dog-leg back"></div>
        </div>
        <p>
          Кажется, наша собачка случайно одела эту страницу... Но не волнуйтесь,
          у нас есть другие вкусные страницы!
        </p>
        <Link to="/" className="home-button">
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
