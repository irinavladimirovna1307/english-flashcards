import React, { useState } from "react";
import Button from "../../Button/Button";
import "../Table/Table.css";

const TableRow = ({ word, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedWord, setEditedWord] = useState({ ...word });

  const fields = [
    { key: "english", label: "English" },
    { key: "transcription", label: "Transcription" },
    { key: "russian", label: "Russian" },
  ];

  const handleEditClick = (event) => {
    event.stopPropagation();
    setIsEditing(true);
  };

  const handleSaveClick = (event) => {
    event.stopPropagation();
    onEdit(word.id, editedWord);
    setIsEditing(false);
  };

  const handleCancelClick = (event) => {
    event.stopPropagation();
    setEditedWord({ ...word });
    setIsEditing(false);
  };

  const handleChange = (field, value) => {
    setEditedWord((prev) => ({ ...prev, [field]: value }));
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSaveClick(event);
    }
  };

  if (isEditing) {
    return (
      <tr className="editing-row">
        {fields.map((field) => (
          <td key={field.key} className="word-table-cell">
            <input
              type="text"
              value={editedWord[field.key]}
              onChange={(event) => handleChange(field.key, event.target.value)}
              onKeyDown={handleKeyDown}
              className="edit-input-field"
              onClick={(event) => event.stopPropagation()}
              aria-label={`Edit ${field.label}`}
            />
          </td>
        ))}
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
    <tr className="word-table-row">
      {fields.map((field) => (
        <td key={field.key} className="word-table-cell">
          {word[field.key]}
        </td>
      ))}
      <td className="word-table-cell actions-container">
        <Button variant="primary" onClick={handleEditClick}>
          Edit
        </Button>
        <Button
          variant="danger"
          onClick={(event) => {
            event.stopPropagation();
            onDelete(word.id);
          }}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default TableRow;
