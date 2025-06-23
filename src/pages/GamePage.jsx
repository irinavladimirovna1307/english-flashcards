import React, { useState } from "react";
import WordCarousel from "../components/word/WordCarousel/WordCarousel";
import "./GamePage.css";

const GamePage = ({ words }) => {
  const [learnedWordsCount, setLearnedWordsCount] = useState(0);

  const handleShowTranslation = () => {
    setLearnedWordsCount((prev) => prev + 1);
  };

  return (
    <div className="game-page">
      <div className="progress-indicator">
        Изучено слов: {learnedWordsCount}
      </div>
      <WordCarousel words={words} onShowTranslation={handleShowTranslation} />
    </div>
  );
};

export default GamePage;
