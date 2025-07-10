import { makeAutoObservable } from "mobx";
import * as wordApi from "../api/wordApi";

class WordStore {
  words = [];
  theme = "light";
  isLoading = false;
  error = null;

  constructor() {
    makeAutoObservable(this);
    this.loadTheme();
    this.loadWords();
  }

  loadTheme() {
    const savedTheme = localStorage.getItem("theme");
    this.theme = savedTheme || "light";
  }

  async loadWords() {
    this.setLoading(true);
    try {
      const words = await wordApi.fetchWords();
      this.setWords(words);
    } catch (error) {
      this.setError(error.message);
    } finally {
      this.setLoading(false);
    }
  }

  setWords(words) {
    this.words = words;
  }

  setLoading(isLoading) {
    this.isLoading = isLoading;
  }

  setError(error) {
    this.error = error;
  }

  toggleTheme() {
    this.theme = this.theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", this.theme);
  }

  async addWord(newWord) {
    this.setLoading(true);
    try {
      const addedWord = await wordApi.addWord(newWord);
      this.words = [...this.words, addedWord];
      return addedWord.id;
    } catch (error) {
      this.setError(error.message);
      throw error;
    } finally {
      this.setLoading(false);
    }
  }

  async editWord(id, updatedWord) {
    this.setLoading(true);
    try {
      const updated = await wordApi.updateWord(id, updatedWord);
      this.words = this.words.map((word) => (word.id === id ? updated : word));
    } catch (error) {
      this.setError(error.message);
      throw error;
    } finally {
      this.setLoading(false);
    }
  }

  async deleteWord(id) {
    this.setLoading(true);
    try {
      await wordApi.deleteWord(id);
      this.words = this.words.filter((word) => word.id !== id);
    } catch (error) {
      this.setError(error.message);
      throw error;
    } finally {
      this.setLoading(false);
    }
  }
}

const wordStore = new WordStore();

export default wordStore;
