/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        plank: {
          orange: "#f47a12",
          amber: "#ff9a30",
          ink: "#211b18",
          smoke: "#eeeeeb",
          fog: "#f7f6f3",
          line: "#ddd9d2",
          wood: "#9a5c2d",
          leaf: "#31766a"
        }
      },
      fontFamily: {
        display: ["Georgia", "Times New Roman", "serif"],
        body: ["Arial", "Helvetica", "sans-serif"]
      },
      boxShadow: {
        soft: "0 20px 60px rgba(39, 32, 26, 0.12)"
      }
    }
  },
  plugins: []
};
