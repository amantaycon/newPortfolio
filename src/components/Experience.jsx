import React from 'react'
import { motion } from 'framer-motion'

export default function Experience(){
  return (
    <section className="my-10">
      <motion.h3 initial={{opacity:0, y:8}} animate={{opacity:1, y:0}}
        className="text-2xl font-bold text-gray-900 dark:text-white">
        Experience
      </motion.h3>

      <div className="mt-4 space-y-4">
        <motion.div className="p-4 rounded-xl border border-gray-200 dark:border-white/20 bg-white dark:bg-gray-900/70 text-gray-800 dark:text-gray-100"
          initial={{opacity:0}} animate={{opacity:1}}>
          <h4 className="font-semibold">Full Stack Development Intern — CodeAlpha</h4>
          <p className="text-sm mt-1">Jun 2025 — Virtual internship focusing on modern web technologies. Received LOR for technical proficiency.</p>
        </motion.div>
      </div>
    </section>
  )
}
