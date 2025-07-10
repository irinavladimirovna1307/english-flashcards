import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { observer } from "mobx-react-lite";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage";
import GamePage from "./pages/GamePage/GamePage";
import NotFoundPage from "./pages/NotFoundPage";
import wordStore from "./stores/wordStore";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

const App = observer(() => {
  const { theme, isLoading, error } = wordStore;

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return (
      <ErrorMessage message={error} onRetry={() => wordStore.loadWords()} />
    );
  }

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
