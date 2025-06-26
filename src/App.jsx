import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage";
import GamePage from "./pages/GamePage/GamePage";
import NotFoundPage from "./pages/NotFoundPage";

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
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                words={words}
                onEditWord={handleEditWord}
                onDeleteWord={handleDeleteWord}
              />
            }
          />
          <Route path="/game" element={<GamePage words={words} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
