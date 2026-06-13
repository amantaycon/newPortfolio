import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiTerminal, FiDatabase, FiCpu, FiAward } from "react-icons/fi";
import profileImg from "../assets/profile.jpg";
import Lottie from "lottie-react";
import coderAnimation from "../assets/coder.json";

const BOOT_LOGS = [
  "  .   ____          _            __ _ _",
  " /\\\\ / ___'_ __ _ _(_)_ __  __ _ \\ \\ \\ \\",
  "( ( )\\___ | '_ | '_| | '_ \\/ _` | \\ \\ \\ \\",
  " \\\\/  ___)| |_)| |  | | | || (_| |  ) ) ) )",
  "  '  |____| .__|_|  |_|_| |__,, | / / / /",
  " =========|_|==============|___/=/_/_/_/",
  " :: Spring Boot ::        (v3.2.0)",
  "",
  "INFO 1782 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat initialized on port(s): 8080 (http)",
  "INFO 1782 --- [           main] c.a.portfolio.PortfolioApplication       : Starting PortfolioApplication on AMAN-DEV-BOX",
  "INFO 1782 --- [           main] c.a.portfolio.PortfolioApplication       : Active profiles: hacker, spring-boot",
  "INFO 1782 --- [           main] c.a.portfolio.services.DataService       : Initializing Aman's developer profile...",
  "INFO 1782 --- [           main] c.a.portfolio.services.DataService       : Loading active projects & microservices...",
  "INFO 1782 --- [           main] c.a.portfolio.PortfolioApplication       : Started PortfolioApplication in 1.25s (JVM running for 1.8s)",
  "Welcome, guest user. Type 'help' to check available commands.",
  ""
];

export default function Hero({ theme }) {
  const [terminalHistory, setTerminalHistory] = useState([]);
  const [currentInput, setCurrentInput] = useState("");
  const [booting, setBooting] = useState(true);
  const terminalEndRef = useRef(null);

  // Simulated Boot sequence on mount
  useEffect(() => {
    let index = 0;
    setTerminalHistory([]);
    setBooting(true);

    const interval = setInterval(() => {
      if (index < BOOT_LOGS.length) {
        const logLine = BOOT_LOGS[index];
        setTerminalHistory((prev) => [...prev, logLine]);
        index++;
      } else {
        clearInterval(interval);
        setBooting(false);
      }
    }, 45);

    return () => clearInterval(interval);
  }, []);

  // Auto scroll terminal to bottom
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [terminalHistory]);

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = currentInput.trim();
    const cleanCmd = cmd.toLowerCase();
    setCurrentInput("");

    if (cleanCmd === "") {
      setTerminalHistory((prev) => [...prev, "aman@dev-box:~$"]);
      return;
    }

    let response = [`aman@dev-box:~$ ${cmd}`];

    switch (cleanCmd) {
      case "help":
        response.push(
          "Available commands:",
          "  about        - Short biography of Aman",
          "  skills       - List core developer technologies",
          "  projects     - List active projects & microservices",
          "  system       - System parameters & diagnostics",
          "  contact      - Display contact endpoints",
          "  clear        - Clear console history",
          "  sudo rm -rf / - Run command as administrator"
        );
        break;
      case "about":
        response.push(
          "Aman Kumar - Full-Stack Developer",
          "MCA Student at KIET Group of Institutions (2024-2026).",
          "Passionate about building secure REST APIs, scalable microservices,",
          "and dynamic responsive web applications."
        );
        break;
      case "skills":
        response.push(
          "Languages: Java, C++, JavaScript, Python, SQL",
          "Backend:   Spring Boot, Hibernate (JPA), REST APIs, JWT, WebSocket, Microservices, Kafka, Redis",
          "Frontend:  React.js, HTML, CSS, JavaScript, Tailwind CSS",
          "Databases: MySQL, PostgreSQL, MongoDB",
          "Tools:     Git, GitHub, Docker, Postman, GitLab"
        );
        break;
      case "projects":
        response.push(
          "Active Deployments:",
          "  - TimeCoins: Spring Boot wallet & messaging platform.",
          "  - DSA Trainer: Node.js/MongoDB DSA learning platform.",
          "  - CodeKing: Social platform for coders.",
          "Type 'curl <project_name>' to view repo (e.g. 'curl timecoins')."
        );
        break;
      case "curl timecoins":
        response.push("Opening Repository link for TimeCoins...");
        window.open("https://github.com/amantaycon/TimeCoins", "_blank");
        break;
      case "curl dsatrainer":
      case "curl dsa":
        response.push("Opening Repository link for DSA Trainer...");
        window.open("https://github.com/amantaycon/DsaTrainer", "_blank");
        break;
      case "curl codeking":
        response.push("Opening Repository link for CodeKing...");
        window.open("https://github.com/amantaycon/CodeKing", "_blank");
        break;
      case "system":
        response.push(
          "SYSTEM DIAGNOSTICS:",
          "  OS:          Ubuntu 22.04 LTS (Aman Dev WSL)",
          "  JDK:         Eclipse Temurin OpenJDK 17.0.7",
          "  SPRING BOOT: v3.2.0 (port: 8080)",
          "  NODE:        v18.16.0",
          "  STATUS:      ONLINE"
        );
        break;
      case "contact":
        response.push(
          "CONTACT ENDPOINTS:",
          "  Email: amantaycon@gmail.com",
          "  Phone: +91 9334626132",
          "  Location: Delhi-NCR, Ghaziabad",
          "  Profiles: github.com/amantaycon | linkedin.com/in/amantaycon"
        );
        break;
      case "sudo rm -rf /":
        response.push(
          "⚠️ ACCESS DENIED ⚠️",
          "Nice try, hacker. Aman's kernel firewall is secured by Spring Security. 😉"
        );
        break;
      case "clear":
        setTerminalHistory([]);
        return;
      default:
        if (cleanCmd.startsWith("curl ")) {
          response.push(`bash: curl: target microservice '${cleanCmd.substring(5)}' not found.`);
        } else {
          response.push(`bash: command not found: ${cmd}. Type 'help' for instructions.`);
        }
        break;
    }

    setTerminalHistory((prev) => [...prev, ...response]);
  };

  const activeColor = theme === "matrix" ? "text-matrix-green" : "text-cyber-cyan";
  const activeBorder = theme === "matrix" ? "glow-border-green" : "glow-border-cyan";
  const activeGlow = theme === "matrix" ? "glow-text-green" : "glow-text-cyan";

  return (
    <section className="grid md:grid-cols-12 gap-6 items-stretch relative">
      
      {/* Left Column: Interactive Terminal CLI */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`md:col-span-7 rounded-xl border border-slate-800 bg-[#070b12]/95 backdrop-blur-md shadow-2xl flex flex-col min-h-[380px] overflow-hidden crt-effect ${activeBorder}`}
      >
        {/* Terminal Header */}
        <div className="bg-slate-900 px-4 py-2 border-b border-slate-800 flex justify-between items-center text-xs text-slate-400">
          <div className="flex items-center gap-1.5 font-mono">
            <FiTerminal className={activeColor} />
            <span>terminal - aman@dev-box:~</span>
          </div>
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
          </div>
        </div>

        {/* Terminal Screen */}
        <div className="p-4 flex-1 font-mono text-[11px] sm:text-xs overflow-y-auto max-h-[340px] space-y-1 select-text">
          {terminalHistory.map((line, idx) => (
            <pre key={idx} className={`whitespace-pre-wrap ${
              line && line.startsWith("INFO") 
                ? "text-slate-500" 
                : line && (line.startsWith("Welcome") || line.startsWith("Available"))
                ? "text-slate-300 font-semibold"
                : line && line.startsWith("aman@dev-box:~$")
                ? activeColor
                : line && (line.includes("⚠️") || line.includes("Access Denied"))
                ? "text-red-400 font-bold"
                : "text-slate-200"
            }`}>
              {line}
            </pre>
          ))}
          
          <div ref={terminalEndRef} />
        </div>

        {/* Terminal Input prompt */}
        {!booting && (
          <form onSubmit={handleCommand} className="bg-slate-950 p-2.5 border-t border-slate-900 flex items-center gap-1 font-mono text-xs">
            <span className={activeColor}>aman@dev-box:~$</span>
            <input
              type="text"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              className="flex-1 bg-transparent text-slate-100 border-none outline-none focus:ring-0 focus:border-none p-0 ml-1 font-mono text-xs placeholder:text-slate-700"
              placeholder="type help to begin..."
              autoFocus
            />
            <span className={`terminal-cursor ${activeColor}`}></span>
          </form>
        )}
      </motion.div>

      {/* Right Column: High Tech HUD Profile Card */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        className={`md:col-span-5 rounded-xl border border-slate-800 bg-[#070b12]/95 backdrop-blur-md p-6 flex flex-col justify-between shadow-2xl relative overflow-hidden`}
      >
        {/* Glow behind profile photo */}
        <div className={`absolute -top-12 -right-12 w-36 h-36 rounded-full blur-3xl opacity-20 ${theme === 'matrix' ? 'bg-matrix-green' : 'bg-cyber-cyan'}`} />

        <div className="flex flex-col sm:flex-row items-center gap-5 relative z-10">
          <div className="relative group">
            {/* Avatar Glow Ring */}
            <div className={`absolute -inset-1 rounded-full opacity-60 blur animate-pulse ${theme === 'matrix' ? 'bg-matrix-green' : 'bg-cyber-cyan'}`} />
            
            <img
              src={profileImg}
              alt="Aman Kumar"
              className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover border-2 border-slate-700"
            />
          </div>

          <div className="text-center sm:text-left">
            <span className={`text-[10px] tracking-widest px-2 py-0.5 rounded border uppercase font-bold ${
              theme === 'matrix' ? 'border-matrix-green/30 text-matrix-green bg-matrix-green/5' : 'border-cyber-cyan/30 text-cyber-cyan bg-cyber-cyan/5'
            }`}>
              SYSTEM INTEGRATOR
            </span>
            <h1 className={`text-2xl font-extrabold mt-2 tracking-tight ${activeGlow} ${activeColor}`}>
              Aman Kumar
            </h1>
            <p className="text-xs text-slate-400 font-mono mt-1">
              MCA Student @ KIET (Delhi-NCR)
            </p>
            <p className="text-[11px] text-slate-500 font-mono">
              IP: 192.168.1.1782 · ONLINE
            </p>
          </div>
        </div>

        {/* Quick Diagnostics Stats Grid */}
        <div className="grid grid-cols-3 gap-3 my-5 py-3 border-y border-slate-800/60 text-center relative z-10">
          <div className="flex flex-col items-center">
            <FiCpu className={`text-lg mb-1 ${activeColor}`} />
            <span className="text-[10px] text-slate-500 uppercase font-bold">Algorithms</span>
            <span className="text-sm font-bold text-slate-200">250+ Solved</span>
          </div>
          <div className="flex flex-col items-center border-x border-slate-800/60">
            <FiDatabase className={`text-lg mb-1 ${activeColor}`} />
            <span className="text-[10px] text-slate-500 uppercase font-bold">Stack</span>
            <span className="text-sm font-bold text-slate-200">Spring Boot</span>
          </div>
          <div className="flex flex-col items-center">
            <FiAward className={`text-lg mb-1 ${activeColor}`} />
            <span className="text-[10px] text-slate-500 uppercase font-bold">Internship</span>
            <span className="text-sm font-bold text-slate-200">CodeAlpha</span>
          </div>
        </div>

        <div className="space-y-3 relative z-10">
          {/* Quick contact / profiles */}
          <div className="flex justify-center sm:justify-start gap-4">
            <a
              href="https://github.com/amantaycon"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded bg-slate-900 border border-slate-800 hover:border-slate-600 text-slate-300 hover:text-white transition-all"
              title="GitHub"
            >
              <FiGithub />
            </a>
            <a
              href="https://linkedin.com/in/amantaycon"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded bg-slate-900 border border-slate-800 hover:border-slate-600 text-slate-300 hover:text-white transition-all"
              title="LinkedIn"
            >
              <FiLinkedin />
            </a>
            <a
              href="mailto:amantaycon@gmail.com"
              className="p-2.5 rounded bg-slate-900 border border-slate-800 hover:border-slate-600 text-slate-300 hover:text-white transition-all"
              title="Email Developer"
            >
              <FiMail />
            </a>
          </div>
          
          <div className="text-[11px] text-slate-500 bg-slate-950 p-2.5 rounded border border-slate-900 flex justify-between items-center font-mono">
            <span>loc: Ghaziabad, Delhi-NCR</span>
            <span className={`w-2 h-2 rounded-full animate-pulse ${theme === 'matrix' ? 'bg-matrix-green' : 'bg-cyber-cyan'}`}></span>
          </div>
        </div>

        {/* Small floating cartoon element in bottom corner */}
        <div className="absolute -bottom-8 -right-8 w-24 h-24 opacity-25 hover:opacity-80 transition-opacity">
          <Lottie animationData={coderAnimation} loop={true} />
        </div>
      </motion.div>
    </section>
  );
}
