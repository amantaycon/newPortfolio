import React from "react";
import { motion } from "framer-motion";
import { FiCpu, FiServer, FiDatabase, FiGrid } from "react-icons/fi";

const skillCategories = [
  {
    title: "Backend & Systems",
    icon: <FiServer />,
    skills: [
      { name: "Spring Boot & Hibernate", value: 88, status: "OPTIMAL" },
      { name: "REST APIs & WebSocket", value: 90, status: "OPTIMAL" },
      { name: "Microservices & JWT", value: 85, status: "ACTIVE" },
      { name: "Kafka & Redis", value: 72, status: "LOADED" },
    ],
  },
  {
    title: "Languages & Frontend",
    icon: <FiGrid />,
    skills: [
      { name: "Java & C++", value: 88, status: "ACTIVE" },
      { name: "JavaScript & Python", value: 85, status: "LOADED" },
      { name: "React.js & Tailwind CSS", value: 82, status: "RENDERED" },
    ],
  },
  {
    title: "Databases & Tools",
    icon: <FiDatabase />,
    skills: [
      { name: "MySQL & PostgreSQL", value: 85, status: "CONNECTED" },
      { name: "MongoDB", value: 78, status: "CONNECTED" },
      { name: "Docker, Git & GitLab", value: 80, status: "CONTAINER_UP" },
    ],
  },
];

export default function Skills({ theme }) {
  const activeColor = theme === "matrix" ? "text-matrix-green" : "text-cyber-cyan";
  const activeBorder = theme === "matrix" ? "hover:border-matrix-green/40 bg-[#070b12]/95" : "hover:border-cyber-cyan/40 bg-[#070b12]/95";
  const glowText = theme === "matrix" ? "glow-text-green" : "glow-text-cyan";

  // Helper to draw ASCII progress bar
  const getAsciiBar = (value) => {
    const totalChars = 12;
    const filledChars = Math.round((value / 100) * totalChars);
    const emptyChars = totalChars - filledChars;
    return "[" + "█".repeat(filledChars) + "░".repeat(emptyChars) + "]";
  };

  return (
    <section className="my-10 relative">
      <div className="flex items-center gap-2 mb-6">
        <FiCpu className={activeColor} />
        <h3 className="text-xl sm:text-2xl font-bold text-slate-100 uppercase tracking-wider">
          system_diagnostics.exe
        </h3>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className={`p-5 rounded-xl border border-slate-800/80 shadow-lg flex flex-col justify-between hover:scale-[1.01] transition-all duration-300 ${activeBorder}`}
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-slate-800">
                <span className={`text-base ${activeColor}`}>{category.icon}</span>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300">
                  {category.title}
                </h4>
              </div>

              {/* Skills Items */}
              <div className="space-y-4">
                {category.skills.map((s) => (
                  <div key={s.name} className="font-mono text-xs">
                    <div className="flex justify-between items-center text-slate-400 mb-1">
                      <span>{s.name}</span>
                      <span className={`text-[10px] px-1 rounded bg-slate-900 border border-slate-800 ${
                        s.status === "OPTIMAL" || s.status === "CONNECTED"
                          ? "text-emerald-400"
                          : activeColor
                      }`}>
                        {s.status}
                      </span>
                    </div>

                    {/* Progress details */}
                    <div className="flex items-center gap-2 justify-between">
                      <span className={`text-[10px] ${activeColor} select-none`}>
                        {getAsciiBar(s.value)}
                      </span>
                      <span className="text-slate-500 text-[10px] font-bold">{s.value}%</span>
                    </div>

                    {/* Glowing dynamic background bar */}
                    <div className="mt-1 bg-slate-950 h-[3px] rounded-full overflow-hidden border border-slate-900">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${s.value}%` }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className={`h-full rounded-full ${
                          theme === "matrix"
                            ? "bg-gradient-to-r from-emerald-500 to-matrix-green"
                            : "bg-gradient-to-r from-purple-500 to-cyber-cyan"
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Simulated terminal response footer */}
            <div className="mt-4 text-[9px] text-slate-600 font-mono border-t border-slate-800/60 pt-2 text-right">
              thread_allocation_completed
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
