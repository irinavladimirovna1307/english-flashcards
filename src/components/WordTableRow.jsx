import React, { useState } from "react";
import Button from "./Button";
import "./WordTable.css";

const WordTableRow = ({ word, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedWord, setEditedWord] = useState({ ...word });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onEdit(word.id, editedWord);
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setEditedWord({ ...word });
    setIsEditing(false);
  };

  const handleChange = (field, value) => {
    setEditedWord((prev) => ({ ...prev, [field]: value }));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSaveClick();
    }
  };

  if (isEditing) {
    return (
      <tr className="editing-row">
        <td>
          <input
            type="text"
            value={editedWord.english}
            onChange={(e) => handleChange("english", e.target.value)}
            onKeyDown={handleKeyDown}
            className="edit-input"
          />
        </td>
        <td>
          <input
            type="text"
            value={editedWord.transcription}
            onChange={(e) => handleChange("transcription", e.target.value)}
            onKeyDown={handleKeyDown}
            className="edit-input"
          />
        </td>
        <td>
          <input
            type="text"
            value={editedWord.russian}
            onChange={(e) => handleChange("russian", e.target.value)}
            onKeyDown={handleKeyDown}
            className="edit-input"
          />
        </td>
        <td className="actions-cell">
          <Button variant="success" onClick={handleSaveClick}>
            Save
          </Button>
          <Button variant="secondary" onClick={handleCancelClick}>
            Cancel
          </Button>
        </td>
      </tr>
    );
  }

  return (
    <tr>
      <td>{word.english}</td>
      <td>{word.transcription}</td>
      <td>{word.russian}</td>
      <td className="actions-cell">
        <Button variant="primary" onClick={handleEditClick}>
          Edit
        </Button>
        <Button variant="danger" onClick={() => onDelete(word.id)}>
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default WordTableRow;
