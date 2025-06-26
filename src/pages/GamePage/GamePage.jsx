import React, { useState } from "react";
import Carousel from "../../components/word/Carousel/Carousel";
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
      <Carousel words={words} onShowTranslation={handleShowTranslation} />
    </div>
  );
};

export default GamePage;
