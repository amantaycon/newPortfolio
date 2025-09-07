import React, { useEffect, useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certs from "./components/Certs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center py-6">
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-300">
            Aman Kumar
          </h2>
          <div className="flex items-center gap-3">
            <a
              href="/resume.pdf"
              className="px-3 py-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 text-white"
            >
              Resume
            </a>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="px-3 py-2 rounded-full border border-gray-800 dark:border-white/20 
             text-black dark:text-white"
            >
              {theme === "dark" ? "Light" : "Dark"}
            </button>
          </div>
        </div>

        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certs />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
