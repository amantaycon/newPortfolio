import React from 'react'
import { motion } from 'framer-motion'

export default function About(){
  return (
    <section className="my-10">
      <motion.h3 initial={{opacity:0, y:8}} animate={{opacity:1, y:0}}
        className="text-2xl font-bold text-gray-900 dark:text-white">
        About Me
      </motion.h3>
      <motion.div
        initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.1}}
        className="mt-4 p-6 rounded-2xl border border-gray-200 dark:border-white/20
                   bg-white dark:bg-gray-900/70 text-gray-800 dark:text-gray-100"
      >
        <p className="text-base leading-relaxed">
          I'm Aman Kumar, currently pursuing a Master of Computer Applications (MCA) at KIET Group of Institutions (2024-2026).
          I build full-stack applications using React, Node.js, Spring Boot and Django. I enjoy solving algorithmic problems and designing secure REST APIs.
        </p>

        <div className="mt-6 grid md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl border border-gray-200 dark:border-white/20 bg-gray-50 dark:bg-gray-800/60">
            <h4 className="font-semibold">Education Timeline</h4>
            <ul className="mt-2 text-sm space-y-2">
              <li><strong>2024–2026:</strong> MCA — KIET, Ghaziabad</li>
              <li><strong>2021–2024:</strong> BCA — Maharaja College, Ara</li>
              <li><strong>2019–2021:</strong> 12th (PCM) — S.B. High School, Ara</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl border border-gray-200 dark:border-white/20 bg-gray-50 dark:bg-gray-800/60">
            <h4 className="font-semibold">What I do</h4>
            <p className="text-sm mt-2">
              Full-stack development, building REST APIs, creating wallet systems, and working on DSA learning platforms.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-gray-200 dark:border-white/20 bg-gray-50 dark:bg-gray-800/60">
            <h4 className="font-semibold">Profiles</h4>
            <p className="text-sm mt-2">
              <a href="https://github.com/amantaycon" target="_blank" rel="noreferrer">GitHub</a> · 
              <a href="https://leetcode.com/u/amantaycon/" target="_blank" rel="noreferrer">LeetCode</a> · 
              <a href="https://linkedin.com/in/amantaycon" target="_blank" rel="noreferrer">LinkedIn</a>
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
