import React from "react";
import { motion } from "framer-motion";
import { FiActivity, FiArrowRight } from "react-icons/fi";

export default function Experience({ theme }) {
  const activeColor = theme === "matrix" ? "text-matrix-green" : "text-cyber-cyan";
  const activeBorder = theme === "matrix" ? "border-matrix-green/30 hover:border-matrix-green/50 bg-[#070b12]/95" : "border-cyber-cyan/30 hover:border-cyber-cyan/50 bg-[#070b12]/95";

  return (
    <section className="my-10 relative">
      {/* Title */}
      <div className="flex items-center gap-2 mb-6">
        <FiActivity className={activeColor} />
        <h3 className="text-xl sm:text-2xl font-bold text-slate-100 uppercase tracking-wider">
          system_lifecycle_events.log
        </h3>
      </div>

      {/* Events Log Timeline */}
      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className={`p-5 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xl transition-all duration-300 ${activeBorder}`}
        >
          <div className="font-mono text-xs sm:text-sm">
            {/* Timestamp & Tag */}
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-slate-500 font-bold">[2025-06-01T09:00:00Z]</span>
              <span className={`px-1.5 py-0.5 rounded font-bold text-[10px] bg-slate-900 border border-slate-800 ${activeColor}`}>
                STATUS: INTERNSHIP_ACTIVE
              </span>
            </div>
            
            {/* Content */}
            <h4 className="text-base font-extrabold text-slate-100">
              Full-Stack Developer Intern @ CodeAlpha
            </h4>
            <p className="text-xs text-slate-400 mt-1 font-sans leading-relaxed max-w-2xl">
              Virtual engineering residency concentrating on microservices and modern frontend development. 
              Collaborated on API designs, REST architectures, and received a Letter of Recommendation (LOR) for technical proficiency.
            </p>
          </div>

          {/* Timeline Range Indicator */}
          <div className="flex items-center gap-2 font-mono text-[10px] sm:text-xs text-slate-500 self-start sm:self-center border-l sm:border-l-0 sm:border-t border-slate-800/80 pl-3 sm:pl-0 sm:pt-2">
            <span>Jun 2025</span>
            <FiArrowRight className={activeColor} />
            <span className={activeColor}>Active</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
