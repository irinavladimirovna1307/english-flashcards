import React from "react";
import WordTableRow from "../WordTableRow/WordTableRow";
import "./WordTable.css";

const headers = [
  { id: "english", label: "English" },
  { id: "transcription", label: "Transcription" },
  { id: "russian", label: "Russian" },
  { id: "actions", label: "Actions" },
];

const WordTable = ({ words, onEditWord, onDeleteWord }) => {
  return (
    <div className="word-table-container">
      <table className="word-table">
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header.id} className="word-table-header">
                {header.label}
              </th>
            ))}
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
