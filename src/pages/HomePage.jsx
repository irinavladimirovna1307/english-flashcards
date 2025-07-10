import React from "react";
import Table from "../components/word/Table/Table";
import Form from "../components/word/Form/Form";

const HomePage = ({ words, onEditWord, onDeleteWord, addWord }) => {
  return (
    <div>
      <Form onAddWord={addWord} />
      <Table
        words={words}
        onEditWord={onEditWord}
        onDeleteWord={onDeleteWord}
      />
    </div>
  );
};

export default HomePage;
