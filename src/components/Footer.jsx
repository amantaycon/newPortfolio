import React from 'react'

export default function Footer({ theme }){
  const activeColor = theme === 'matrix' ? 'text-matrix-green' : 'text-cyber-cyan';
  return (
    <footer className="py-6 mt-12 border-t border-slate-900 text-center font-mono text-[10px] text-slate-500">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
        <div>
          © {new Date().getFullYear()} Aman Kumar · <span className={activeColor}>SECURE_PORTAL_ACTIVE</span>
        </div>
        <div className="text-[9px] uppercase tracking-wider">
          Node: v18.16.0 · Tomcat: 8080 · React: v18.2 · Tailwind CSS
        </div>
      </div>
    </footer>
  )
}
