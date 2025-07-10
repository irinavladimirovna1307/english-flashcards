import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <p>Loading words...</p>
    </div>
  );
};

export default Loader;
