
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        'royal-green': '#0b4a32',
        'royal-green-dark': '#073221',
        'royal-green-light': '#126b49',
        'soft-gold': '#d4af37',
        'soft-gold-light': '#e3c668',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(212, 175, 55, 0.3)',
        'glow-green': '0 0 30px rgba(18, 107, 73, 0.4)',
      }
    },
  },
  plugins: [],
}
