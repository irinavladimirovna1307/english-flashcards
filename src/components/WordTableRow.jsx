import React, { useState } from "react";
import Button from "./Button";
import "./WordTable.css";

const WordTableRow = ({ word, onEdit, onDelete, onWordSelect }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedWord, setEditedWord] = useState({ ...word });

  const handleEditClick = (e) => {
    e.stopPropagation();
    setIsEditing(true);
  };

  const handleSaveClick = (e) => {
    e.stopPropagation();
    onEdit(word.id, editedWord);
    setIsEditing(false);
  };

  const handleCancelClick = (e) => {
    e.stopPropagation();
    setEditedWord({ ...word });
    setIsEditing(false);
  };

  const handleRowClick = () => {
    onWordSelect(word);
  };

  const handleChange = (field, value) => {
    setEditedWord((prev) => ({ ...prev, [field]: value }));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSaveClick(e);
    }
  };

  if (isEditing) {
    return (
      <tr className="editing-row" onClick={handleRowClick}>
        <td className="word-table-cell">
          <input
            type="text"
            value={editedWord.english}
            onChange={(e) => handleChange("english", e.target.value)}
            onKeyDown={handleKeyDown}
            className="edit-input-field"
            onClick={(e) => e.stopPropagation()}
          />
        </td>
        <td className="word-table-cell">
          <input
            type="text"
            value={editedWord.transcription}
            onChange={(e) => handleChange("transcription", e.target.value)}
            onKeyDown={handleKeyDown}
            className="edit-input-field"
            onClick={(e) => e.stopPropagation()}
          />
        </td>
        <td className="word-table-cell">
          <input
            type="text"
            value={editedWord.russian}
            onChange={(e) => handleChange("russian", e.target.value)}
            onKeyDown={handleKeyDown}
            className="edit-input-field"
            onClick={(e) => e.stopPropagation()}
          />
        </td>
        <td className="word-table-cell">
          <div className="editing-actions-container">
            <Button variant="success" onClick={handleSaveClick}>
              Save
            </Button>
            <Button variant="secondary" onClick={handleCancelClick}>
              Cancel
            </Button>
          </div>
        </td>
      </tr>
    );
  }

  return (
    <tr className="word-table-row" onClick={handleRowClick}>
      <td className="word-table-cell">{word.english}</td>
      <td className="word-table-cell">{word.transcription}</td>
      <td className="word-table-cell">{word.russian}</td>
      <td className="word-table-cell actions-container">
        <Button variant="primary" onClick={handleEditClick}>
          Edit
        </Button>
        <Button
          variant="danger"
          onClick={(e) => {
            e.stopPropagation();
            onDelete(word.id);
          }}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default WordTableRow;
