import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WordCard from "./components/WordCard/WordCard";
import WordTable from "./components/WordTable/WordTable";

const App = () => {
  const [theme, setTheme] = useState("light");
  const [words, setWords] = useState([
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
  ]);

  const [selectedWord, setSelectedWord] = useState(words[0]);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleEditWord = (id, updatedWord) => {
    const updatedWords = words.map((word) =>
      word.id === id ? { ...word, ...updatedWord } : word
    );

    setWords(updatedWords);

    // обновляем выбранное слово, если оно было изменено
    if (selectedWord.id === id) {
      setSelectedWord({ ...selectedWord, ...updatedWord });
    }
  };

  const handleDeleteWord = (id) => {
    const updatedWords = words.filter((word) => word.id !== id);
    setWords(updatedWords);

    // если удалили выбранное слово, выбираем первое из оставшихся
    if (selectedWord.id === id) {
      setSelectedWord(updatedWords[0] || null);
    }
  };

  const handleWordSelect = (word) => {
    setSelectedWord(word);
  };

  return (
    <div className="app">
      <Header toggleTheme={toggleTheme} theme={theme} />
      <main>
        {selectedWord && <WordCard word={selectedWord} />}
        <WordTable
          words={words}
          onEditWord={handleEditWord}
          onDeleteWord={handleDeleteWord}
          onWordSelect={handleWordSelect}
        />
      </main>
      <Footer />
    </div>
  );
};

export default App;
