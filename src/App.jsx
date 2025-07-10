import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage";
import GamePage from "./pages/GamePage/GamePage";
import NotFoundPage from "./pages/NotFoundPage";
import wordStore from "./stores/wordStore";

const App = observer(() => {
  const { theme } = wordStore;

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="app">
      <Header toggleTheme={() => wordStore.toggleTheme()} theme={theme} />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                words={wordStore.words}
                onEditWord={wordStore.editWord.bind(wordStore)}
                onDeleteWord={wordStore.deleteWord.bind(wordStore)}
                addWord={wordStore.addWord.bind(wordStore)}
              />
            }
          />
          <Route path="/game" element={<GamePage words={wordStore.words} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
});

export default App;
