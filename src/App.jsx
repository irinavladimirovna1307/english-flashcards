import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WordCard from "./components/WordCard";
import WordTable from "./components/WordTable";

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

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleEditWord = (id, updatedWord) => {
    setWords(
      words.map((word) => (word.id === id ? { ...word, ...updatedWord } : word))
    );
  };

  const handleDeleteWord = (id) => {
    setWords(words.filter((word) => word.id !== id));
  };

  return (
    <div className="app">
      <Header toggleTheme={toggleTheme} theme={theme} />
      <main>
        <WordCard word={words[0]} />
        <WordTable
          words={words}
          onEditWord={handleEditWord}
          onDeleteWord={handleDeleteWord}
        />
      </main>
      <Footer />
    </div>
  );
};

export default App;
