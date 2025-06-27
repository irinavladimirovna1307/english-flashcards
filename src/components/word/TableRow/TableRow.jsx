import React, { useState } from "react";
import Button from "../../Button/Button";
import useAppContext from "../../../hooks/useAppContext";
import "../Table/Table.css";

const TableRow = ({ word }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedWord, setEditedWord] = useState({ ...word });
  const [errors, setErrors] = useState({});

  const { editWord, deleteWord } = useAppContext();

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
        newErrors[field.key] = "Поле не может быть пустым";
        hasErrors = true;
      }
    });

    setErrors(newErrors);
    return !hasErrors;
  };

  const handleEditClick = (event) => {
    event.stopPropagation();
    setIsEditing(true);
  };

  const handleSaveClick = async (event) => {
    event.stopPropagation();

    if (validateFields()) {
      try {
        await editWord(word.id, editedWord);
        setIsEditing(false);
      } catch (err) {
        console.error("Ошибка изменения слова:", err);
      }
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

  const handleDelete = async (event) => {
    event.stopPropagation();
    try {
      await deleteWord(word.id);
    } catch (err) {
      console.error("Ошибка удаления слова:", err);
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
        <Button variant="danger" onClick={handleDelete}>
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default TableRow;
