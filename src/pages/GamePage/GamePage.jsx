import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import Carousel from "../../components/word/Carousel/Carousel";
import "./GamePage.css";
import wordStore from "../../stores/wordStore";

const GamePage = observer(() => {
  const [learnedWordsCount, setLearnedWordsCount] = useState(0);

  const handleShowTranslation = () => {
    setLearnedWordsCount((prev) => prev + 1);
  };

  return (
    <div className="game-page">
      <div className="progress-indicator">
        Изучено слов: {learnedWordsCount}
      </div>
      <Carousel
        words={wordStore.words}
        onShowTranslation={handleShowTranslation}
      />
    </div>
  );
});

export default GamePage;
