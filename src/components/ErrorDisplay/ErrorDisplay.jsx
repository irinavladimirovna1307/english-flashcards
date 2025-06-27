import React from "react";
import { FiAlertTriangle } from "react-icons/fi";
import "./ErrorDisplay.css";

const ErrorDisplay = ({ error, onRetry }) => {
  return (
    <div className="error-display-container">
      <div className="error-display">
        <FiAlertTriangle className="error-icon" />
        <h3>Что-то пошло не так!</h3>
        <p className="error-message">{error}</p>
        {onRetry && (
          <button className="retry-button" onClick={onRetry}>
            Попробовать снова
          </button>
        )}
      </div>
    </div>
  );
};

export default ErrorDisplay;
