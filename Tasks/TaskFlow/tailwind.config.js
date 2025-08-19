/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        exo: ['Exo 2', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        nunito: ['Nunito Sans', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
        fira: ['Fira Code', 'monospace'],
        jetbrains: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        brand: {
          purple: '#7c3aed',   // بنفسجي لامع
          blue: '#1e3a8a',     // أزرق كُحلي لامع
          violetNeon: '#a855f7', // بنفسجي نيون
          navyNeon: '#1d4ed8',   // أزرق نيون
        }
      }
    },
  },
  plugins: [],
}
