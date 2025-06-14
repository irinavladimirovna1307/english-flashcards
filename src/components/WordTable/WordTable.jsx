import React from "react";
import WordTableRow from "../WordTableRow/WordTableRow";
import "./WordTable.css";

const WordTable = ({ words, onEditWord, onDeleteWord, onWordSelect }) => {
  return (
    <div className="word-table-container">
      <table className="word-table">
        <thead>
          <tr>
            <th className="word-table-header">English</th>
            <th className="word-table-header">Transcription</th>
            <th className="word-table-header">Russian</th>
            <th className="word-table-header">Actions</th>
          </tr>
        </thead>
        <tbody>
          {words.map((word) => (
            <WordTableRow
              key={word.id}
              word={word}
              onEdit={onEditWord}
              onDelete={onDeleteWord}
              onWordSelect={onWordSelect}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WordTable;
