import React from "react";
import TableRow from "../TableRow/TableRow";
import "./Table.css";

const headers = [
  { id: "english", label: "English" },
  { id: "transcription", label: "Transcription" },
  { id: "russian", label: "Russian" },
  { id: "actions", label: "Actions" },
];

const Table = ({ words, onEditWord, onDeleteWord }) => {
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
            <TableRow
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

export default Table;
