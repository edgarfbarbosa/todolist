/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter_400Regular'],
        'inter-bold': ['Inter_700Bold'],
        'inter-extra-bold': ['Inter_800ExtraBold'],
        'inter-black': ['Inter_900Black'],
      },
      colors: {
        primary: '#0033FF',
        secondary: '#777777',
      },
    },
  },
  plugins: [],
}
