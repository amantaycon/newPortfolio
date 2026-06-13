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
  const [theme, setTheme] = useState(localStorage.getItem("hacker-theme") || "matrix");

  useEffect(() => {
    localStorage.setItem("hacker-theme", theme);
    const root = document.documentElement;
    if (theme === "matrix") {
      root.classList.add("dark");
      root.classList.remove("cyberpunk");
    } else {
      root.classList.add("dark");
      root.classList.add("cyberpunk");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "matrix" ? "cyber" : "matrix"));
  };

  return (
    <div className="min-h-screen bg-[#05070a] text-slate-200 font-mono relative pb-12 selection:bg-matrix-green/20 selection:text-matrix-green">
      {/* Background Cyber Grid */}
      <div className={`absolute inset-0 pointer-events-none opacity-40 z-0 ${theme === 'matrix' ? 'cyber-grid-green' : 'cyber-grid'}`} />

      {/* Decorative Neon top glow */}
      <div className={`absolute top-0 left-1/4 right-1/4 h-[1px] blur-md z-10 ${theme === 'matrix' ? 'bg-matrix-green/50' : 'bg-cyber-cyan/50'}`} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Hacker Dashboard Status Header */}
        <header className="border-b border-slate-800/80 bg-[#070b12]/90 backdrop-blur-md sticky top-0 z-50 py-3 px-4 rounded-b-xl flex flex-wrap justify-between items-center gap-3">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <div className="text-xs sm:text-sm">
              <span className="text-slate-500">SYS_ENV: </span>
              <span className={`${theme === 'matrix' ? 'text-matrix-green glow-text-green' : 'text-cyber-cyan glow-text-cyan'} font-bold`}>
                AMAN_PROD_v2.0
              </span>
            </div>
            <div className="hidden md:flex items-center gap-3 text-xs text-slate-500 border-l border-slate-800 pl-3">
              <div>PORT: <span className="text-slate-300">8080</span></div>
              <div>PROFILES: <span className={theme === 'matrix' ? 'text-matrix-green' : 'text-cyber-cyan'}>hacker,spring-boot</span></div>
              <div>DB_CONN: <span className="text-emerald-500">ACTIVE</span></div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`text-xs px-3 py-1.5 rounded border ${
                theme === "matrix"
                  ? "border-matrix-green/30 text-matrix-green hover:bg-matrix-green/10"
                  : "border-cyber-cyan/30 text-cyber-cyan hover:bg-cyber-cyan/10"
              } transition-all duration-300 flex items-center gap-2`}
            >
              <span>THEME:</span>
              <span className="font-bold">{theme === "matrix" ? "MATRIX" : "CYBERPUNK"}</span>
            </button>

            {/* Resume File Endpoint */}
            <a
              href="/resume.pdf"
              download
              className={`text-xs px-3.5 py-1.5 rounded bg-slate-900 border ${
                theme === "matrix"
                  ? "border-matrix-green/50 text-matrix-green hover:bg-matrix-green hover:text-black"
                  : "border-cyber-cyan/50 text-cyber-cyan hover:bg-cyber-cyan hover:text-black"
              } transition-all duration-300 font-bold`}
            >
              GET_RESUME.sh
            </a>
          </div>
        </header>

        {/* Portfolio Content */}
        <main className="space-y-12 mt-6">
          <Hero theme={theme} />
          <About theme={theme} />
          <Skills theme={theme} />
          <Projects theme={theme} />
          <Experience theme={theme} />
          <Certs theme={theme} />
          <Contact theme={theme} />
        </main>

        <Footer theme={theme} />
      </div>
    </div>
  );
}
