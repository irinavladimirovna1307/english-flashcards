import React, { useState, useEffect } from "react";
import WordCard from "../WordCard/WordCard";
import "./WordCarousel.css";

const WordCarousel = ({ words = [], initialIndex = 0, onShowTranslation }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (words.length > 0) {
      const safeIndex = Math.min(Math.max(0, initialIndex), words.length - 1);
      setCurrentIndex(safeIndex);
    } else {
      setCurrentIndex(0);
    }
  }, [words, initialIndex]);

  const updateCarousel = (newIndex) => {
    if (isAnimating || words.length === 0) return;
    setIsAnimating(true);

    const adjustedIndex = (newIndex + words.length) % words.length;
    setCurrentIndex(adjustedIndex);

    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const handlePrev = () => {
    updateCarousel(currentIndex - 1);
  };

  const handleNext = () => {
    updateCarousel(currentIndex + 1);
  };

  const handleDotClick = (index) => {
    updateCarousel(index);
  };

  const getCardPosition = (index) => {
    const diff = (index - currentIndex + words.length) % words.length;

    if (diff === 0) return "center";
    if (diff === 1) return "right-1";
    if (diff === 2) return "right-2";
    if (diff === words.length - 1) return "left-1";
    if (diff === words.length - 2) return "left-2";
    return "hidden";
  };

  if (!words.length) {
    return (
      <div className="carousel-empty">
        <p>No words available</p>
      </div>
    );
  }

  const progress = `${currentIndex + 1} / ${words.length}`;

  return (
    <div className="word-carousel">
      <div className="carousel-header">
        <h2>Карточка слова</h2>
        <div className="carousel-progress">{progress}</div>
      </div>

      <div className="carousel-container">
        <button
          className="nav-arrow left"
          onClick={handlePrev}
          aria-label="Previous word"
        >
          ‹
        </button>

        <div className="carousel-track">
          {words.map((word, index) => {
            const position = getCardPosition(index);
            return (
              <div
                key={word.id}
                className={`carousel-card ${position}`}
                onClick={() => updateCarousel(index)}
              >
                <WordCard word={word} onShowTranslation={onShowTranslation} />
              </div>
            );
          })}
        </div>

        <button
          className="nav-arrow right"
          onClick={handleNext}
          aria-label="Next word"
        >
          ›
        </button>
      </div>

      <div className="dots">
        {words.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default WordCarousel;
