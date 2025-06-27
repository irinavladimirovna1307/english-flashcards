import React, { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [words, setWords] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  //база данных слов
  const mockWords = [
    { id: 1, english: "hello", transcription: "[həˈləʊ]", russian: "привет" },
    { id: 2, english: "world", transcription: "[wɜːld]", russian: "мир" },
    { id: 3, english: "stork", transcription: "[stɔːk]", russian: "аист" },
    { id: 4, english: "book", transcription: "[bʊk]", russian: "книга" },
    { id: 5, english: "water", transcription: "[ˈwɔːtə]", russian: "вода" },
    { id: 6, english: "friend", transcription: "[frend]", russian: "друг" },
    {
      id: 7,
      english: "computer",
      transcription: "[kəmˈpjuːtə]",
      russian: "компьютер",
    },
    {
      id: 8,
      english: "language",
      transcription: "[ˈlæŋɡwɪdʒ]",
      russian: "язык",
    },
    {
      id: 9,
      english: "knowledge",
      transcription: "[ˈnɒlɪdʒ]",
      russian: "знание",
    },
    {
      id: 10,
      english: "development",
      transcription: "[dɪˈveləpmənt]",
      russian: "развитие",
    },
    {
      id: 11,
      english: "beautiful",
      transcription: "[ˈbjuːtɪfl]",
      russian: "красивый",
    },
    {
      id: 12,
      english: "environment",
      transcription: "[ɪnˈvaɪrənmənt]",
      russian: "окружающая среда",
    },
    {
      id: 13,
      english: "experience",
      transcription: "[ɪkˈspɪəriəns]",
      russian: "опыт",
    },
    {
      id: 14,
      english: "important",
      transcription: "[ɪmˈpɔːtnt]",
      russian: "важный",
    },
    {
      id: 15,
      english: "government",
      transcription: "[ˈɡʌvənmənt]",
      russian: "правительство",
    },
    {
      id: 16,
      english: "different",
      transcription: "[ˈdɪfrənt]",
      russian: "разный",
    },
    {
      id: 17,
      english: "understand",
      transcription: "[ˌʌndəˈstænd]",
      russian: "понимать",
    },
    {
      id: 18,
      english: "education",
      transcription: "[ˌedʒuˈkeɪʃn]",
      russian: "образование",
    },
    {
      id: 19,
      english: "community",
      transcription: "[kəˈmjuːnəti]",
      russian: "сообщество",
    },
    {
      id: 20,
      english: "technology",
      transcription: "[tekˈnɒlədʒi]",
      russian: "технология",
    },
  ];

  //загрузка слов (имитация асинхронного запроса)
  const fetchWords = async () => {
    setIsLoading(true);
    setError(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // имитация задержки
      setWords(mockWords);
    } catch (err) {
      setError("Failed to load words. Please try again later.");
      console.error("Error fetching words:", err);
    } finally {
      setIsLoading(false);
    }
  };

  //добавление нового слова
  const addWord = async (newWord) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500)); // имитация задержки

      const wordWithId = { ...newWord, id: Date.now() };

      setWords((prevWords) => [...prevWords, wordWithId]);
      return wordWithId;
    } catch (err) {
      setError("Failed to add word");
      throw err;
    }
  };

  //редактирование слова
  const editWord = async (id, updatedWord) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));

      setWords((prevWords) =>
        prevWords.map((word) =>
          word.id === id ? { ...word, ...updatedWord } : word
        )
      );
    } catch (err) {
      setError("Failed to update word");
      throw err;
    }
  };

  //удаление слова
  const deleteWord = async (id) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));

      setWords((prevWords) => prevWords.filter((word) => word.id !== id));
    } catch (err) {
      setError("Failed to delete word");
      throw err;
    }
  };

  //при монтировании компонента загружаем слова
  useEffect(() => {
    fetchWords();
  }, []);

  const contextValue = {
    words,
    isLoading,
    error,
    addWord,
    editWord,
    deleteWord,
    fetchWords, //если нужно перезагрузить слова
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
