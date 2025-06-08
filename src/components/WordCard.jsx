import React, { useState } from "react";
import "./WordCard.css";

const WordCard = ({ word }) => {
  const [showTranslation, setShowTranslation] = useState(false);

  const toggleTranslation = () => {
    setShowTranslation(!showTranslation);
  };

  return (
    <div className="word-card">
      <div className="card-content">
        <h2 className="english-word">{word.english}</h2>
        <p className="transcription">{word.transcription}</p>

        {showTranslation ? (
          <div className="translation-section">
            <p className="russian-word">{word.russian}</p>
            <button
              className="hide-translation-btn"
              onClick={toggleTranslation}
            >
              Скрыть перевод
            </button>
          </div>
        ) : (
          <button className="show-translation-btn" onClick={toggleTranslation}>
            Показать перевод
          </button>
        )}
      </div>
    </div>
  );
};

export default WordCard;
