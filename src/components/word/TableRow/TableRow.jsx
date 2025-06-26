import React, { useEffect, useState } from "react";
import Button from "../../Button/Button";
import "../Table/Table.css";

const TableRow = ({ word, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedWord, setEditedWord] = useState({ ...word });
  const [errors, setErrors] = useState({});

  const fields = [
    { key: "english", label: "English" },
    { key: "transcription", label: "Transcription" },
    { key: "russian", label: "Russian" },
  ];

  //проверка пустые ли поля
  const validateFields = () => {
    const newErrors = {};
    let hasErrors = false;

    fields.forEach((field) => {
      if (!editedWord[field.key]?.trim()) {
        newErrors[field.key] = "Field cannot be empty";
        hasErrors = true;
      }
    });

    setErrors(newErrors);
    return !hasErrors;
  };

  //сбрасывание ошибок при редактировании полей
  useEffect(() => {
    if (isEditing) {
      setErrors({});
    }
  }, [isEditing]);

  const handleEditClick = (event) => {
    event.stopPropagation();
    setIsEditing(true);
  };

  const handleSaveClick = (event) => {
    event.stopPropagation();

    if (validateFields()) {
      onEdit(word.id, editedWord);
      setIsEditing(false);
      console.log("Successfully edited word:", editedWord);
    } else {
      //уведомление о невалидных полях
      console.log(
        "Validation error: One or more fields are invalid",
        editedWord
      );
    }
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
              className={`edit-input-field ${errors[field.key] ? "error" : ""}`}
              onClick={(event) => event.stopPropagation()}
              aria-label={`Edit ${field.label}`}
            />
            {errors[field.key] && (
              <div className="error-message">{errors[field.key]}</div>
            )}
          </td>
        ))}
        <td className="word-table-cell">
          <div className="editing-actions-container">
            <Button
              variant="success"
              onClick={handleSaveClick}
              disabled={fields.some((f) => !editedWord[f.key]?.trim())}
            >
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
