import React, { useState } from "react";
import Button from "../../Button/Button";
import "./Form.css";

const Form = ({ onAddWord }) => {
  const [newWord, setNewWord] = useState({
    english: "",
    transcription: "",
    russian: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setNewWord({ ...newWord, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: null });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!newWord.english.trim()) newErrors.english = "English word is required";
    if (!newWord.transcription.trim())
      newErrors.transcription = "Transcription is required";
    if (!newWord.russian.trim()) newErrors.russian = "Russian word is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onAddWord(newWord);
      setNewWord({ english: "", transcription: "", russian: "" });
      setErrors({});
    }
  };

  return (
    <form className="word-form" onSubmit={handleSubmit}>
      <h3>Add New Word</h3>
      <div className="form-group">
        <label>English Word</label>
        <input
          type="text"
          value={newWord.english}
          onChange={(e) => handleChange("english", e.target.value)}
          className={errors.english ? "error" : ""}
        />
        {errors.english && (
          <span className="error-message">{errors.english}</span>
        )}
      </div>

      <div className="form-group">
        <label>Transcription</label>
        <input
          type="text"
          value={newWord.transcription}
          onChange={(e) => handleChange("transcription", e.target.value)}
          className={errors.transcription ? "error" : ""}
        />
        {errors.transcription && (
          <span className="error-message">{errors.transcription}</span>
        )}
      </div>

      <div className="form-group">
        <label>Russian Word</label>
        <input
          type="text"
          value={newWord.russian}
          onChange={(e) => handleChange("russian", e.target.value)}
          className={errors.russian ? "error" : ""}
        />
        {errors.russian && (
          <span className="error-message">{errors.russian}</span>
        )}
      </div>

      <Button type="submit" variant="success">
        Add Word
      </Button>
    </form>
  );
};

export default Form;
