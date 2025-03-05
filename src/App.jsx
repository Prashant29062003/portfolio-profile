import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Tools from "./components/Tools";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";

function App() {
  const [theme, setTheme] = useState("light");
  const [isLoading, setIsLoading] = useState(true);

  // Check system preference on initial load
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      // Check system preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
    }
  }, []);

  // Apply theme to html tag
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      <div className={`transition-opacity duration-500 ${isLoading ? "opacity-0" : "opacity-100"}`}>
        <Navbar theme={theme} setTheme={setTheme} />
        <Hero />
        <Services />
        <Tools />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
