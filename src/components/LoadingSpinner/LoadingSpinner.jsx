import React, { useState, useEffect } from "react";
import "./LoadingSpinner.css";

const LoadingSpinner = () => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="spinner-container">
      <div className="spinner">
        <div className="spinner-blade"></div>
        <div className="spinner-blade"></div>
        <div className="spinner-blade"></div>
        <div className="spinner-blade"></div>
        <div className="spinner-blade"></div>
        <div className="spinner-blade"></div>
        <div className="spinner-blade"></div>
        <div className="spinner-blade"></div>
        <div className="spinner-blade"></div>
        <div className="spinner-blade"></div>
        <div className="spinner-blade"></div>
        <div className="spinner-blade"></div>
      </div>
      <p>Loading words...</p>

      {showMessage && (
        <div
          style={{
            color: "var(--error)",
            marginTop: "1rem",
            textAlign: "center",
            maxWidth: "300px",
          }}
        >
          Загрузка занимает больше времени, чем ожидалось.
          <br />
          Пожалуйста, проверьте консоль браузера (F12) для диагностики.
        </div>
      )}
    </div>
  );
};

export default LoadingSpinner;
