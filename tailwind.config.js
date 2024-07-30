/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ffffff',
        paragraph: '#ffffffcc',
        underline: '#18d26e',
        wall: 'rgba(0, 0, 0, 0.75)'
      },
      backgroundImage: {
        'hero': "url('/app/components/bg-page.png')"
      }
    },
  },
  plugins: []
};