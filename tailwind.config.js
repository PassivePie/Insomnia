const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        
      padding: {
        'p-r': '40vh',
        'plr' : '18vw',
        'ptt': '8vh'
      },
      backgroundImage: {      
      },
      height: {
        '1080': '1080px',
        'hs': '20vh',
        'hm': '50vh',        
        'hl': '80vh'
      },
      colors: {
        custom: {
          DEFAULT: '#10B981',
          light: '#D1FAE5'
      },
        neutral: colors.neutral,
        'neon-blue': "#2dfcfc",
         cyan: colors.cyan,
      },
      animation: {
      fadeIn: "fadeIn 2s ease-in forwards"
    },
    keyframes: {
      fadeIn: {
        "50%": { opacity: 0 },
        "100%": { opacity: 1 },
      }
    }
   },
  },
  variants: {},
  plugins: [
    require('tailwind-scrollbar')
  ],
}
