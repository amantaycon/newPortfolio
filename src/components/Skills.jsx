import React from 'react'
import { motion } from 'framer-motion'

const skillData = [
  {name: 'JavaScript', value: 85},
  {name: 'React', value: 80},
  {name: 'Spring Boot', value: 70},
  {name: 'Node.js', value: 75},
  {name: 'MySQL', value: 75},
  {name: 'C++', value: 85},
  {name: 'Java', value: 78},
  {name: 'Python', value: 65},
  {name: 'Django', value: 60},
  {name: 'PHP', value: 60},
]

export default function Skills(){
  return (
    <section className="my-10">
      <motion.h3 initial={{opacity:0, y:8}} animate={{opacity:1, y:0}}
        className="text-2xl font-bold text-gray-900 dark:text-white">
        Skills
      </motion.h3>
      <div className="mt-4 grid md:grid-cols-2 gap-4">
        {skillData.map(s => (
          <motion.div key={s.name} initial={{opacity:0, y:6}} animate={{opacity:1, y:0}}
            className="p-4 rounded-xl border border-gray-200 dark:border-white/20 bg-white dark:bg-gray-900/70 text-gray-800 dark:text-gray-100"
          >
            <div className="flex justify-between items-center">
              <h4 className="font-medium">{s.name}</h4>
              <span className="text-sm">{s.value}%</span>
            </div>
            <div className="mt-3 bg-gray-200 dark:bg-gray-700 h-3 rounded-full overflow-hidden">
              <motion.div
                initial={{width:0}} animate={{width: s.value + '%'}}
                transition={{duration:1.2}}
                className="h-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
