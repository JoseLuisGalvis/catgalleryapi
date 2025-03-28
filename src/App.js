// App.js
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Carousel from "./components/Carousel";
import Grid from "./components/Grid";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [language, setLanguage] = useState("es");
  const [theme, setTheme] = useState("light");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  };

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  useEffect(() => {
    // Añadir o quitar clase 'dark' al body según el tema
    document.body.classList.toggle("dark-mode", theme === "dark");
  }, [theme]);

  return (
    <div className="App">
      <Navbar
        language={language}
        toggleLanguage={toggleLanguage}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <Hero language={language} theme={theme} />
      <Carousel language={language} theme={theme} />
      <Grid language={language} theme={theme} />
      <ContactForm language={language} theme={theme} />
      <Footer language={language} theme={theme} />
    </div>
  );
}

export default App;
