import React from "react";
import { motion } from "framer-motion";
import { FiShield, FiLock, FiCheck } from "react-icons/fi";

const certs = [
  {
    title: "Spring Boot From Scratch For Beginners",
    org: "Udemy",
    date: "Jul 2025",
    hash: "SHA-256: d8b2c48ea92a11b6f0e9fa5c4d6",
  },
  {
    title: "Modern JavaScript for React Developer - Zero to Advanced",
    org: "Udemy",
    date: "Jun 2025",
    hash: "SHA-256: 4e91b6b5dfd4f6d8a20bb291a13",
  },
  {
    title: "AWS Academy Graduate — AWS Academy Cloud Foundations",
    org: "AWS Academy",
    date: "Jun 2025",
    hash: "SHA-256: a8b3c9d2f1e0a789bcde341f20a",
  },
  {
    title: "Cisco Cybersecurity Essentials",
    org: "Cisco Networking Academy",
    date: "May 2025",
    hash: "SHA-256: 8f3c7b2a1a8c9e5d4d3b2f1a0e9",
  },
  {
    title: "Red Hat Enterprise Linux 8 Essential Training",
    org: "Red Hat",
    date: "Dec 2023",
    hash: "SHA-256: 8c7b6a5d4e3f2a1b0c9d8e7f6a5",
  },
  {
    title: "Python Essentials 2",
    org: "Cisco / Python Institute",
    date: "May 2025",
    hash: "SHA-256: e8d7c6b5a4938271605b4a39281",
  },
  {
    title: "Software Engineering Intern Certification",
    org: "CodeAlpha",
    date: "Aug 2025",
    hash: "SHA-256: f1e2d3c4b5a69788766a5b4c3d2",
  },
];

export default function Certs({ theme }) {
  const activeColor = theme === "matrix" ? "text-matrix-green" : "text-cyber-cyan";
  const activeBorder = theme === "matrix" ? "border-matrix-green/30 hover:border-matrix-green bg-[#070b12]/95" : "border-cyber-cyan/30 hover:border-cyber-cyan bg-[#070b12]/95";

  return (
    <section className="my-10 relative">
      {/* Title */}
      <div className="flex items-center gap-2 mb-6">
        <FiShield className={activeColor} />
        <h3 className="text-xl sm:text-2xl font-bold text-slate-100 uppercase tracking-wider">
          secure_credential_vault.enc
        </h3>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {certs.map((c, idx) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            className={`p-5 rounded-xl border flex flex-col justify-between shadow-2xl relative overflow-hidden transition-all duration-300 ${activeBorder}`}
          >
            {/* Decrypt key background glow */}
            <div className="absolute right-3 top-3 text-slate-800/20 select-none">
              <FiLock className="text-5xl" />
            </div>

            <div>
              {/* Header */}
              <div className="flex justify-between items-center gap-3 border-b border-slate-800/60 pb-3 mb-3 font-mono text-[11px]">
                <div className="flex items-center gap-1 text-slate-400">
                  <span className={activeColor}>ISSUER:</span>
                  <span className="font-bold text-slate-200">{c.org.toUpperCase()}</span>
                </div>
                
                {/* Verified Badge */}
                <div className="flex items-center gap-1 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/40 text-emerald-400 font-bold text-[9px]">
                  <FiCheck />
                  <span>VERIFIED</span>
                </div>
              </div>

              {/* Title */}
              <h4 className="text-sm sm:text-base font-extrabold text-slate-100 tracking-tight">
                {c.title}
              </h4>
            </div>

            {/* Cryptographic signature footer */}
            <div className="mt-4 pt-3 border-t border-slate-800/60 font-mono text-[10px] text-slate-500">
              <div className="flex justify-between items-center">
                <span className="truncate max-w-[200px] sm:max-w-xs">{c.hash}</span>
                <span className="text-slate-600 font-bold">{c.date}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
