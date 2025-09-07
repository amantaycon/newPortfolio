import React from 'react'

export default function Footer(){
  return (
    <footer className="py-10 text-center text-sm text-gray-700 dark:text-gray-300">
      © {new Date().getFullYear()} Aman Kumar — Built with React, Tailwind & Framer Motion.
    </footer>
  )
}
