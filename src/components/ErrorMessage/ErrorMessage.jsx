import React from "react";
import Button from "../Button/Button";
import "./ErrorMessage.css";

const ErrorMessage = ({ message, onRetry }) => {
  return (
    <div className="error-container">
      <div className="error-icon">!</div>
      <h3>Error loading data</h3>
      <p>{message}</p>
      <Button variant="primary" onClick={onRetry}>
        Try Again
      </Button>
    </div>
  );
};

export default ErrorMessage;
