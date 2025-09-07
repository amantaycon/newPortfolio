import React, {useState} from 'react'
import { motion } from 'framer-motion'
import projects from '../data/projects'

const categories = ['All','Web','Fullstack','Backend']

export default function Projects(){
  const [cat, setCat] = useState('All')
  const filtered = projects.filter(p => cat === 'All' ? true : p.cat === cat)

  return (
    <section className="my-10">
      <motion.h3 initial={{opacity:0, y:8}} animate={{opacity:1, y:0}}
        className="text-2xl font-bold text-gray-900 dark:text-white">
        Projects
      </motion.h3>

      <div className="mt-4 flex gap-3 flex-wrap">
        {categories.map(c => (
          <button key={c} onClick={()=>setCat(c)}
            className={`px-3 py-1 rounded-full text-sm ${cat===c
              ? 'bg-gradient-to-r from-purple-500 to-cyan-400 text-white'
              : 'border border-gray-300 dark:border-white/20 text-gray-700 dark:text-gray-300'}`}>
            {c}
          </button>
        ))}
      </div>

      <div className="mt-6 grid md:grid-cols-2 gap-4">
        {filtered.map(p => (
          <motion.a key={p.title} whileHover={{y:-6}}
            href={p.link} target="_blank" rel="noreferrer"
            className="p-5 rounded-2xl border border-gray-200 dark:border-white/20 bg-white dark:bg-gray-900/70 text-gray-800 dark:text-gray-100 shadow-sm"
          >
            <h4 className="text-lg font-semibold">{p.title}</h4>
            <p className="mt-2 text-sm">{p.desc}</p>
            <div className="mt-4 flex gap-2 flex-wrap">
              {p.tags.map(t => <span key={t} className="px-2 py-1 rounded-full text-xs bg-gray-200 dark:bg-gray-700">{t}</span>)}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
