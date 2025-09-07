import React from 'react'
import { motion } from 'framer-motion'

const certs = [
  {title: 'Modern JavaScript & Java OOP', org: 'Udemy', date: 'Jun 2025'},
  {title: 'Python Essentials 1,2 & Cybersecurity Essentials', org: 'Cisco', date: 'May 2025'},
  {title: 'AWS Academy Cloud Foundations', org: 'AWS', date: 'Jun 2025'},
  {title: 'Red Hat Enterprise Linux 8 Essential', org: 'LinkedIn Learning', date: 'Dec 2024'}
]

export default function Certs(){
  return (
    <section className="my-10">
      <motion.h3 initial={{opacity:0, y:8}} animate={{opacity:1, y:0}}
        className="text-2xl font-bold text-gray-900 dark:text-white">
        Certifications
      </motion.h3>

      <div className="mt-4 grid md:grid-cols-2 gap-4">
        {certs.map(c => (
          <motion.div key={c.title}
            className="p-4 rounded-xl border border-gray-200 dark:border-white/20 bg-white dark:bg-gray-900/70 text-gray-800 dark:text-gray-100"
            initial={{opacity:0}} animate={{opacity:1}}>
            <h4 className="font-medium">{c.title}</h4>
            <p className="text-sm mt-1">{c.org} • {c.date}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
