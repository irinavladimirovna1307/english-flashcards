import React from "react";
import Table from "../components/word/Table/Table";

const HomePage = ({ words, onEditWord, onDeleteWord }) => {
  return (
    <Table words={words} onEditWord={onEditWord} onDeleteWord={onDeleteWord} />
  );
};

export default HomePage;
