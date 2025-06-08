import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WordCard from "./components/WordCard";
import WordTable from "./components/WordTable";

const App = () => {
  const [words, setWords] = useState([
    { id: 1, english: "hello", transcription: "[həˈləʊ]", russian: "привет" },
    { id: 2, english: "world", transcription: "[wɜːld]", russian: "мир" },
    { id: 3, english: "stork", transcription: "[stɔːk]", russian: "аист" },
  ]);

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
      <Header />
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
