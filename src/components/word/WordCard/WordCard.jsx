import React, { useState, useEffect, useRef } from "react";
import "./WordCard.css";

const WordCard = ({ word, onShowTranslation }) => {
  const [showTranslation, setShowTranslation] = useState(false);
  const showButtonRef = useRef(null);

  const toggleTranslation = () => {
    if (!showTranslation && onShowTranslation) {
      onShowTranslation();
    }
    setShowTranslation(!showTranslation);
  };

  // автофокус при изменении слова
  useEffect(() => {
    setShowTranslation(false);

    // фокус после небольшой задержки для корректной работы анимации
    const timer = setTimeout(() => {
      if (showButtonRef.current) {
        showButtonRef.current.focus();
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [word]);

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
            ref={showButtonRef}
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
