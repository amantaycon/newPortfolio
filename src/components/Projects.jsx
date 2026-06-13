import React, { useState } from "react";
import { motion } from "framer-motion";
import projects from "../data/projects";
import { FiLayout, FiExternalLink, FiServer, FiActivity } from "react-icons/fi";

const categories = ["All", "Web", "Fullstack", "Backend"];

export default function Projects({ theme }) {
  const [cat, setCat] = useState("All");
  const filtered = projects.filter((p) => (cat === "All" ? true : p.cat === cat));

  const activeColor = theme === "matrix" ? "text-matrix-green" : "text-cyber-cyan";
  const activeBorder = theme === "matrix" ? "border-matrix-green/30 hover:border-matrix-green bg-[#070b12]/95" : "border-cyber-cyan/30 hover:border-cyber-cyan bg-[#070b12]/95";
  const activeBtn = theme === "matrix" ? "bg-matrix-green text-black" : "bg-cyber-cyan text-black";
  const activeGlow = theme === "matrix" ? "glow-text-green" : "glow-text-cyan";

  const getMockPort = (title) => {
    let hash = 0;
    for (let i = 0; i < title.length; i++) {
      hash += title.charCodeAt(i);
    }
    return 8081 + (hash % 10);
  };

  return (
    <section className="my-10 relative">
      {/* Title */}
      <div className="flex items-center gap-2 mb-4">
        <FiLayout className={activeColor} />
        <h3 className="text-xl sm:text-2xl font-bold text-slate-100 uppercase tracking-wider">
          deployment_registry.sh
        </h3>
      </div>

      {/* Namespace Filter Tabs */}
      <div className="flex gap-2.5 flex-wrap items-center bg-slate-950 p-2 rounded-lg border border-slate-900 text-xs mb-6">
        <span className="text-slate-500 font-mono select-none mr-1">SELECT_NAMESPACE:</span>
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`px-3 py-1 rounded transition-all duration-300 font-mono font-bold ${
              cat === c
                ? activeBtn
                : "border border-slate-800 text-slate-400 hover:text-slate-200"
            }`}
          >
            ns/{c.toLowerCase()}
          </button>
        ))}
      </div>

      {/* Microservices Deployment Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {filtered.map((p) => {
          const port = getMockPort(p.title);
          return (
            <motion.div
              key={p.title}
              whileHover={{ y: -4 }}
              className={`p-5 rounded-xl border flex flex-col justify-between shadow-2xl transition-all duration-300 ${activeBorder}`}
            >
              <div>
                {/* Deployment Header */}
                <div className="flex justify-between items-start gap-3 border-b border-slate-800/60 pb-3 mb-3 font-mono text-[11px]">
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <FiServer className={activeColor} />
                    <span>container-port: <span className="text-slate-200 font-bold">{port}</span></span>
                  </div>
                  
                  {/* Blinking Health Check Endpoint */}
                  <div className="flex items-center gap-2 bg-slate-950 px-2 py-0.5 rounded border border-slate-900">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-emerald-400 font-bold text-[9px] uppercase tracking-wide">UP</span>
                  </div>
                </div>

                {/* Info */}
                <h4 className="text-base font-extrabold text-slate-100 tracking-tight flex items-center gap-2">
                  {p.title}
                </h4>
                <p className="mt-2 text-xs text-slate-400 leading-relaxed font-sans min-h-[40px]">
                  {p.desc}
                </p>
              </div>

              {/* Deployment Footer */}
              <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between gap-3">
                <div className="flex gap-1.5 flex-wrap">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-slate-900 border border-slate-800 text-slate-500 hover:text-slate-300 transition-colors"
                    >
                      #{t.toLowerCase()}
                    </span>
                  ))}
                </div>

                {/* Git Checkout Command */}
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center gap-1.5 text-xs font-mono font-bold hover:underline ${activeColor}`}
                >
                  <span>GET /code</span>
                  <FiExternalLink />
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
