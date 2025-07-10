const API_URL = "http://itgirlschool.justmakeit.ru/api/words";

export const fetchWords = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Failed to fetch words");
    return await response.json();
  } catch (error) {
    console.error("API Error - fetchWords:", error);
    throw error;
  }
};

export const addWord = async (word) => {
  try {
    // Добавляем обязательные поля tags и tags_json
    const wordToSend = {
      ...word,
      tags: "",
      tags_json: "",
    };

    const response = await fetch(`${API_URL}/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(wordToSend),
    });

    if (!response.ok) throw new Error("Failed to add word");
    return await response.json();
  } catch (error) {
    console.error("API Error - addWord:", error);
    throw error;
  }
};

export const updateWord = async (id, updatedWord) => {
  try {
    // Добавляем обязательные поля tags и tags_json
    const wordToSend = {
      ...updatedWord,
      tags: "",
      tags_json: "",
    };

    const response = await fetch(`${API_URL}/${id}/update`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(wordToSend),
    });

    if (!response.ok) throw new Error("Failed to update word");
    return await response.json();
  } catch (error) {
    console.error("API Error - updateWord:", error);
    throw error;
  }
};

export const deleteWord = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}/delete`, {
      method: "POST",
    });

    if (!response.ok) throw new Error("Failed to delete word");
    return true;
  } catch (error) {
    console.error("API Error - deleteWord:", error);
    throw error;
  }
};
