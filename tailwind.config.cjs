module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      colors: {
        primary: '#7c3aed',
        accent: '#06b6d4',
        'terminal-dark': '#05070a',
        'terminal-gray': '#0d1117',
        'terminal-card': '#121820',
        'spring-green': '#6db33f',
        'matrix-green': '#39ff14',
        'cyber-cyan': '#00f0ff',
        'cyber-purple': '#9d4edd',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
}
