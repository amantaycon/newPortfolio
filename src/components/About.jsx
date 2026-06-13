import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiCode, FiFile, FiBookOpen } from "react-icons/fi";

export default function About({ theme }) {
  const [activeTab, setActiveTab] = useState("java");

  const activeColor = theme === "matrix" ? "text-matrix-green" : "text-cyber-cyan";
  const activeBorder = theme === "matrix" ? "border-matrix-green/50 bg-matrix-green/5" : "border-cyber-cyan/50 bg-cyber-cyan/5";
  const glowText = theme === "matrix" ? "glow-text-green" : "glow-text-cyan";

  const renderCode = () => {
    switch (activeTab) {
      case "java":
        return (
          <code className="text-slate-300 font-mono text-[11px] sm:text-xs leading-relaxed block whitespace-pre overflow-x-auto">
            <span className="text-amber-500/90">@RestController</span>{"\n"}
            <span className="text-amber-500/90">@RequestMapping</span>(<span className="text-emerald-400">"/api/v1/developer"</span>){"\n"}
            <span className="text-indigo-400 font-bold">public class</span> <span className="text-yellow-300">AmanProfileController</span> {"{"}{"\n"}
            {"\n"}
            {"    "}<span className="text-amber-500/90">@Autowired</span>{"\n"}
            {"    "}<span className="text-indigo-400 font-bold">private</span> ProfileService profileService;{"\n"}
            {"\n"}
            {"    "}<span className="text-amber-500/90">@GetMapping</span>(<span className="text-emerald-400">"/aman"</span>){"\n"}
            {"    "}<span className="text-indigo-400 font-bold">public</span> ResponseEntity&lt;Developer&gt; <span className="text-sky-300">getAmanProfile</span>() {"{"}{"\n"}
            {"        "}Developer aman = <span className="text-indigo-400 font-bold">new</span> Developer();{"\n"}
            {"        "}aman.setName(<span className="text-emerald-400">"Aman Kumar"</span>);{"\n"}
            {"        "}aman.setRole(<span className="text-emerald-400">"Full-Stack / Spring Boot"</span>);{"\n"}
            {"        "}aman.setDegree(<span className="text-emerald-400">"MCA @ KIET"</span>);{"\n"}
            {"        "}aman.setPassions(List.of(<span className="text-emerald-400">"APIs"</span>, <span className="text-emerald-400">"Microservices"</span>, <span className="text-emerald-400">"DSA"</span>));{"\n"}
            {"\n"}
            {"        "}<span className="text-indigo-400 font-bold">return</span> ResponseEntity.ok(aman);{"\n"}
            {"    "}{"}"}{"\n"}
            {"}"}
          </code>
        );
      case "yaml":
        return (
          <code className="text-slate-300 font-mono text-[11px] sm:text-xs leading-relaxed block whitespace-pre overflow-x-auto">
            <span className="text-blue-400 font-bold">developer:</span>{"\n"}
            {"  "}<span className="text-blue-400 font-bold">name:</span> Aman Kumar{"\n"}
            {"  "}<span className="text-blue-400 font-bold">title:</span> Full Stack Developer{"\n"}
            {"  "}<span className="text-blue-400 font-bold">skills:</span>{"\n"}
            {"    "}<span className="text-blue-400 font-bold">backend:</span>{"\n"}
            {"      "}- <span className="text-blue-400 font-bold">framework:</span> Spring Boot{"\n"}
            {"        "}<span className="text-blue-400 font-bold">languages:</span> [Java, SQL]{"\n"}
            {"      "}- <span className="text-blue-400 font-bold">framework:</span> Node.js{"\n"}
            {"        "}<span className="text-blue-400 font-bold">languages:</span> [JavaScript]{"\n"}
            {"    "}<span className="text-blue-400 font-bold">frontend:</span>{"\n"}
            {"      "}- <span className="text-blue-400 font-bold">library:</span> React{"\n"}
            {"        "}<span className="text-blue-400 font-bold">styling:</span> Tailwind CSS{"\n"}
            {"  "}<span className="text-blue-400 font-bold">configurations:</span>{"\n"}
            {"    "}<span className="text-blue-400 font-bold">active_profile:</span> production-hacker
          </code>
        );
      case "sql":
        return (
          <code className="text-slate-300 font-mono text-[11px] sm:text-xs leading-relaxed block whitespace-pre overflow-x-auto">
            <span className="text-indigo-400 font-bold">CREATE TABLE</span> developer_details ({"\n"}
            {"  "}id <span className="text-indigo-400 font-bold">INT AUTO_INCREMENT PRIMARY KEY</span>,{"\n"}
            {"  "}full_name <span className="text-indigo-400 font-bold">VARCHAR</span>(<span className="text-amber-500">100</span>) <span className="text-indigo-400 font-bold">NOT NULL</span>,{"\n"}
            {"  "}active_internship <span className="text-indigo-400 font-bold">VARCHAR</span>(<span className="text-amber-500">100</span>),{"\n"}
            {"  "}location <span className="text-indigo-400 font-bold">VARCHAR</span>(<span className="text-amber-500">100</span>){"\n"}
            );{"\n"}
            {"\n"}
            <span className="text-indigo-400 font-bold">INSERT INTO</span> developer_details {"\n"}
            {"  "}(full_name, active_internship, location){"\n"}
            <span className="text-indigo-400 font-bold">VALUES</span> ({"\n"}
            {"  "}<span className="text-emerald-400">'Aman Kumar'</span>, <span className="text-emerald-400">'CodeAlpha'</span>, <span className="text-emerald-400">'Ghaziabad, Delhi-NCR'</span>{"\n"}
            );
          </code>
        );
      default:
        return null;
    }
  };

  return (
    <section className="my-10 relative">
      <div className="flex items-center gap-2 mb-6">
        <FiCode className={activeColor} />
        <h3 className="text-xl sm:text-2xl font-bold text-slate-100 uppercase tracking-wider">
          developer_profile.java
        </h3>
      </div>

      <div className="grid md:grid-cols-12 gap-6 items-stretch">
        
        {/* Mock IntelliJ Editor Window */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="md:col-span-7 rounded-xl border border-slate-800 bg-[#070b12]/95 backdrop-blur-md overflow-hidden flex flex-col shadow-2xl min-h-[320px]"
        >
          {/* File tabs bar */}
          <div className="bg-slate-900 border-b border-slate-800 flex flex-wrap gap-0.5 text-xs text-slate-400">
            <button
              onClick={() => setActiveTab("java")}
              className={`px-4 py-2 border-r border-slate-800/80 flex items-center gap-1.5 transition-all ${
                activeTab === "java"
                  ? "bg-[#070b12] text-slate-100 border-t-2 border-t-amber-500"
                  : "hover:bg-slate-800/50"
              }`}
            >
              <FiFile className="text-amber-500" />
              <span>AmanProfileController.java</span>
            </button>
            <button
              onClick={() => setActiveTab("yaml")}
              className={`px-4 py-2 border-r border-slate-800/80 flex items-center gap-1.5 transition-all ${
                activeTab === "yaml"
                  ? "bg-[#070b12] text-slate-100 border-t-2 border-t-purple-500"
                  : "hover:bg-slate-800/50"
              }`}
            >
              <FiFile className="text-purple-400" />
              <span>skills-config.yml</span>
            </button>
            <button
              onClick={() => setActiveTab("sql")}
              className={`px-4 py-2 border-r border-slate-800/80 flex items-center gap-1.5 transition-all ${
                activeTab === "sql"
                  ? "bg-[#070b12] text-slate-100 border-t-2 border-t-cyan-500"
                  : "hover:bg-slate-800/50"
              }`}
            >
              <FiFile className="text-cyan-400" />
              <span>schema.sql</span>
            </button>
          </div>

          {/* Editor Area */}
          <div className="p-4 flex-1 bg-[#05070a] overflow-auto select-text font-mono relative">
            <div className="absolute right-3 top-3 text-[10px] text-slate-700 select-none">
              UTF-8 · LF · ReadOnly
            </div>
            {renderCode()}
          </div>
        </motion.div>

        {/* Human Readable Profile Details */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="md:col-span-5 flex flex-col justify-between gap-4"
        >
          {/* Bio statement */}
          <div className="p-5 rounded-xl border border-slate-800 bg-[#070b12]/95 backdrop-blur-md">
            <h4 className={`text-sm font-bold uppercase tracking-wider mb-2 flex items-center gap-1.5 ${activeColor}`}>
              <FiBookOpen /> System Overview
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              I am <span className={`${activeColor} font-bold`}>Aman Kumar</span>, currently pursuing a Master of Computer Applications (MCA) at KIET Group of Institutions (2024-2026).
              I specialize in constructing robust microservices, securing APIs, and engineering responsive front-ends.
            </p>
          </div>

          {/* Education timeline cards */}
          <div className="p-5 rounded-xl border border-slate-800 bg-[#070b12]/95 backdrop-blur-md flex-1">
            <h4 className={`text-sm font-bold uppercase tracking-wider mb-3 flex items-center gap-1.5 ${activeColor}`}>
              <FiBookOpen /> Education Chronology
            </h4>
            <div className="space-y-3 font-sans text-xs">
              <div className="border-l-2 border-slate-700 pl-3 py-0.5 relative">
                <span className={`absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-slate-900 border-2 ${
                  theme === "matrix" ? "border-matrix-green" : "border-cyber-cyan"
                }`} />
                <div className="font-bold text-slate-200">MCA (Master of Computer Applications)</div>
                <div className="text-slate-400">KIET Group of Institutions, Ghaziabad</div>
                <div className={`text-[10px] ${activeColor} font-mono mt-0.5`}>[ 2024 - 2026 ] · Present</div>
              </div>

              <div className="border-l-2 border-slate-700 pl-3 py-0.5 relative">
                <span className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-slate-900 border-2 border-slate-600" />
                <div className="font-bold text-slate-200">BCA (Bachelor of Computer Applications)</div>
                <div className="text-slate-400">Maharaja College, Ara</div>
                <div className="text-[10px] text-slate-500 font-mono mt-0.5">[ 2021 - 2024 ] · GPA: 8.4/10</div>
              </div>

              <div className="border-l-2 border-slate-700 pl-3 py-0.5 relative">
                <span className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-slate-900 border-2 border-slate-600" />
                <div className="font-bold text-slate-200">12th Grade (PCM)</div>
                <div className="text-slate-400">S.B. High School, Ara</div>
                <div className="text-[10px] text-slate-500 font-mono mt-0.5">[ 2019 - 2021 ]</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
