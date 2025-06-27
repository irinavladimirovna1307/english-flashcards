import React from "react";
import Table from "../components/word/Table/Table";
import useAppContext from "../hooks/useAppContext";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import ErrorDisplay from "../components/ErrorDisplay/ErrorDisplay";

const HomePage = () => {
  const { words, isLoading, error, fetchWords } = useAppContext();

  if (isLoading) {
    return (
      <div
        style={{
          minHeight: "50vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <ErrorDisplay error={error} onRetry={fetchWords} />;
  }

  return <Table words={words} />;
};

export default HomePage;
