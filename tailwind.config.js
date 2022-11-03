/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // screens : {
    //   'md':'800px',
    //  'xmd' : '1000px'
    // },
    extend: {
      colors : {
        base_highlight : "#0E60E2",
        base_highlight_bg : "#0E60E2",
        base_about_color : "#6A6A6A",
        base_bg : "#C1E8FD",
        about_heading : '#011B44',
        about_dark_text : '#6A6A6A'
      }
    },
  },
  plugins: [],
}