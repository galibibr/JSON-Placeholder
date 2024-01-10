/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'blue': '#1976d2',
      'blueDark': '#90caf9',
      'blueBg': '#1976d21f',
      'blueBgDark': '#90caf93d',
      'blueBorder': '#1976d280',
      'blueBorderDark': '#90caf980',
    },
    extend: {},
  },
  plugins: [],
}

