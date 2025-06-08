import React from "react";
import WordTableRow from "./WordTableRow";
import "./WordTable.css";

const WordTable = ({ words, onEditWord, onDeleteWord }) => {
  return (
    <div className="word-table-container">
      <table className="word-table">
        <thead>
          <tr>
            <th>English</th>
            <th>Transcription</th>
            <th>Russian</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {words.map((word) => (
            <WordTableRow
              key={word.id}
              word={word}
              onEdit={onEditWord}
              onDelete={onDeleteWord}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WordTable;
