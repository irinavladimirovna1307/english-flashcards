import React, { useState } from "react";
import "./WordCard.css";

const WordCard = ({ word }) => {
  const [showTranslation, setShowTranslation] = useState(false);

  const toggleTranslation = () => {
    setShowTranslation(!showTranslation);
  };

  return (
    <div className="word-card-component">
      <div className="card-content-container">
        <h2 className="english-word-text">{word.english}</h2>
        <p className="transcription-text">{word.transcription}</p>

        {showTranslation ? (
          <div className="translation-section">
            <p className="russian-word-text">{word.russian}</p>
            <button
              className="translation-toggle-button"
              onClick={toggleTranslation}
            >
              Скрыть перевод
            </button>
          </div>
        ) : (
          <button
            className="translation-toggle-button"
            onClick={toggleTranslation}
          >
            Показать перевод
          </button>
        )}
      </div>
    </div>
  );
};

export default WordCard;
