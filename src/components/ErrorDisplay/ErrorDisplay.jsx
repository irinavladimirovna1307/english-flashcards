import React from "react";
import { FiAlertTriangle } from "react-icons/fi";
import "./ErrorDisplay.css";

const ErrorDisplay = ({ error, onRetry }) => {
  return (
    <div className="error-display">
      <FiAlertTriangle className="error-icon" />
      <h3>Something went wrong</h3>
      <p className="error-message">{error}</p>
      {onRetry && (
        <button className="retry-button" onClick={onRetry}>
          Try Again
        </button>
      )}
    </div>
  );
};

export default ErrorDisplay;
