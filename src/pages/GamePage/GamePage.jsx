import React, { useState, useEffect } from "react";
import Carousel from "../../components/word/Carousel/Carousel";
import useAppContext from "../../hooks/useAppContext";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import ErrorDisplay from "../../components/ErrorDisplay/ErrorDisplay";
import "./GamePage.css";

const GamePage = () => {
  const [learnedWordsCount, setLearnedWordsCount] = useState(0);
  const { words, isLoading, error, fetchWords } = useAppContext();

  useEffect(() => {
    console.log("GamePage render:", {
      isLoading,
      error,
      wordsCount: words.length,
      learnedWordsCount,
    });
  }, [isLoading, error, words, learnedWordsCount]);

  const handleShowTranslation = () => {
    setLearnedWordsCount((prev) => prev + 1);
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorDisplay error={error} onRetry={fetchWords} />;
  }

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
