import { makeAutoObservable } from "mobx";

class WordStore {
  words = [];
  theme = "light";

  constructor() {
    makeAutoObservable(this);
    this.loadWords();
    this.loadTheme();
  }

  loadTheme() {
    const savedTheme = localStorage.getItem("theme");
    this.theme = savedTheme || "light";
  }

  loadWords() {
    const savedWords = localStorage.getItem("words");
    this.words = savedWords
      ? JSON.parse(savedWords)
      : [
          {
            id: 1,
            english: "hello",
            transcription: "[həˈləʊ]",
            russian: "привет",
          },
          { id: 2, english: "world", transcription: "[wɜːld]", russian: "мир" },
          {
            id: 3,
            english: "stork",
            transcription: "[stɔːk]",
            russian: "аист",
          },
          { id: 4, english: "book", transcription: "[bʊk]", russian: "книга" },
          {
            id: 5,
            english: "water",
            transcription: "[ˈwɔːtə]",
            russian: "вода",
          },
          {
            id: 6,
            english: "friend",
            transcription: "[frend]",
            russian: "друг",
          },
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
  }

  saveWords() {
    localStorage.setItem("words", JSON.stringify(this.words));
  }

  toggleTheme() {
    this.theme = this.theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", this.theme);
  }

  addWord(newWord) {
    const id =
      this.words.length > 0
        ? Math.max(...this.words.map((word) => word.id)) + 1
        : 1;

    this.words.push({ id, ...newWord });
    this.saveWords();
    return id;
  }

  editWord(id, updatedWord) {
    const index = this.words.findIndex((word) => word.id === id);
    if (index !== -1) {
      this.words[index] = { ...this.words[index], ...updatedWord };
      this.saveWords();
    }
  }

  deleteWord(id) {
    this.words = this.words.filter((word) => word.id !== id);
    this.saveWords();
  }
}

const wordStore = new WordStore();

export default wordStore;
