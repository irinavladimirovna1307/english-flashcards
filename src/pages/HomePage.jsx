import React, { useEffect } from "react";
import Table from "../components/word/Table/Table";
import useAppContext from "../hooks/useAppContext";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import ErrorDisplay from "../components/ErrorDisplay/ErrorDisplay";

const HomePage = () => {
  const { words, isLoading, error, fetchWords } = useAppContext();

  useEffect(() => {
    console.log("HomePage render:", {
      isLoading,
      error,
      wordsCount: words.length,
    });
  }, [isLoading, error, words]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorDisplay error={error} onRetry={fetchWords} />;
  }

  return <Table words={words} />;
};

export default HomePage;
