import React from "react";
import WordTable from "../components/word/WordTable/WordTable";

const HomePage = ({ words, onEditWord, onDeleteWord }) => {
  return (
    <WordTable
      words={words}
      onEditWord={onEditWord}
      onDeleteWord={onDeleteWord}
    />
  );
};

export default HomePage;
