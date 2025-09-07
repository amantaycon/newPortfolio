import React from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi'

const particlesInit = async (main) => {
  await loadFull(main)
}

export default function Hero(){
  return (
    <section className="relative rounded-3xl overflow-hidden my-6 p-8 bg-white dark:bg-gray-900/70 text-gray-800 dark:text-gray-100">
      <Particles
        id='tsparticles'
        init={particlesInit}
        options={{
          fpsLimit: 60,
          background: { color: 'transparent' },
          interactivity: { events: { onHover: { enable: true, mode: 'repulse' } } },
          particles: {
            color: { value: ['#7c3aed','#06b6d4','#f59e0b'] },
            links: { enable: false },
            move: { enable: true, speed: 1 },
            number: { value: 30 },
            opacity: { value: 0.7 },
            size: { value: { min: 2, max: 5 } }
          }
        }}
      />
      <div className="relative z-10 grid md:grid-cols-2 gap-6 items-center">
        <motion.div initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} transition={{delay:0.1}}>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Aman Kumar</h1>
          <p className="mt-3 text-lg">Full-Stack Developer · MCA Student at 'KIET Group of Institutions' · Building web apps, APIs & wallet systems.</p>
          <div className="mt-6 flex gap-3">
            <a href="/resume.pdf" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 shadow-lg text-white"> <FiDownload/> Resume</a>
            <a href="https://github.com/amantaycon" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border dark:border-white/20 border-gray-800"> <FiGithub/> GitHub</a>
            <a href="https://linkedin.com/in/amantaycon" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full border dark:border-white/20 border-gray-800"> <FiLinkedin/> LinkedIn</a>
          </div>
        </motion.div>

        <motion.div initial={{opacity:0, x:20}} animate={{opacity:1, x:0}} className="p-6 rounded-2xl border dark:border-white/20 border-gray-200 bg-gray-100 dark:bg-gray-800/70">
          <h4 className="font-semibold">Quick Info</h4>
          <ul className="mt-3 text-sm space-y-1">
            <li><strong>Location:</strong> Ghaziabad, Delhi-NCR</li>
            <li><strong>Email:</strong> aman.2426mca1782@kiet.edu</li>
            <li><strong>Phone:</strong> +91 9334626132</li>
            <li><strong>Education:</strong> MCA @ KIET (2024-2026)</li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
