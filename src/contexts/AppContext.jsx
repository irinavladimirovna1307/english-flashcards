/* eslint-disable react-refresh/only-export-components */
import React, {
  createContext,
  useEffect,
  useState,
  useCallback,
  useRef,
  useMemo,
} from "react";

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

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [words, setWords] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const isMounted = useRef(true);

  // загрузка слов (имитация асинхронного запроса)
  const fetchWords = useCallback(async () => {
    if (!isMounted.current) return;

    setIsLoading(true);
    setError(null);

    try {
      console.log("Начало загрузки слов...");
      await new Promise((resolve) => {
        console.log("Таймер запущен");
        setTimeout(() => {
          console.log("Таймер завершен");
          resolve();
        }, 1000);
      });

      if (isMounted.current) {
        console.log("Установка слов");
        setWords(mockWords);
      }
    } catch (err) {
      if (isMounted.current) {
        console.error("Ошибка загрузки слов:", err);
        setError("Не удалось загрузить слова. Пожалуйста, попробуйте позже.");
      }
    } finally {
      if (isMounted.current) {
        console.log("Завершение загрузки");
        setIsLoading(false);
      }
    }
  }, []);

  /* Имитация ошибки
  const fetchWords = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      throw new Error("Тестовая ошибка загрузки данных");

      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (isMounted.current) {
        setWords(mockWords);
      }
    } catch (err) {
      if (isMounted.current) {
        setError(err.message);
        console.error("Ошибка загрузки слов:", err);
      }
    } finally {
      if (isMounted.current) {
        setIsLoading(false);
      }
    }
  }, []); */

  // добавление нового слова
  const addWord = useCallback(async (newWord) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      const wordWithId = { ...newWord, id: Date.now() };
      setWords((prevWords) => [...prevWords, wordWithId]);
      return wordWithId;
    } catch (err) {
      setError("Не удалось добавить слово");
      throw err;
    }
  }, []);

  // редактирование слова
  const editWord = useCallback(async (id, updatedWord) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setWords((prevWords) =>
        prevWords.map((word) =>
          word.id === id ? { ...word, ...updatedWord } : word
        )
      );
    } catch (err) {
      setError("Не удалось обновить слово");
      throw err;
    }
  }, []);

  // удаление слова
  const deleteWord = useCallback(async (id) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setWords((prevWords) => prevWords.filter((word) => word.id !== id));
    } catch (err) {
      setError("Не удалось удалить слово");
      throw err;
    }
  }, []);

  // при монтировании компонента загружаем слова
  useEffect(() => {
    isMounted.current = true;
    fetchWords();

    return () => {
      isMounted.current = false;
    };
  }, [fetchWords]);

  const contextValue = useMemo(
    () => ({
      words,
      isLoading,
      error,
      addWord,
      editWord,
      deleteWord,
      fetchWords,
    }),
    [words, isLoading, error, addWord, editWord, deleteWord, fetchWords]
  );

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
