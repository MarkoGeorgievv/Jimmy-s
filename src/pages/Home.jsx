import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Gallery from "../components/Gallery";
import Locations from "../components/Locations";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { translations } from "../data/translations";

function Home() {
  const [language, setLanguage] = useState(() => {
    try {
      return localStorage.getItem("jimmys-language") === "mk" ? "mk" : "en";
    } catch {
      return "en";
    }
  });
  const text = translations[language];

  useEffect(() => {
    document.documentElement.lang = language;
    try {
      localStorage.setItem("jimmys-language", language);
    } catch { /* Language switching also works when storage is unavailable. */ }
  }, [language]);

  return (
    <div id="top" className="min-h-screen bg-white text-stone-900">
      <a href="#main-content" className="skip-link">{text.skipToContent}</a>
      <Navbar language={language} onLanguageChange={setLanguage} text={text} />
      <main id="main-content" tabIndex={-1}>
        <Hero text={text} />
        <Services text={text} />
        <About text={text} />
        <Gallery text={text} />
        <Locations text={text} language={language} />
      </main>
      <Footer text={text} />
    </div>
  );
}

export default Home;
