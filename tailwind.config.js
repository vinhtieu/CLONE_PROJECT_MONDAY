/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      title: [
        "Poppins",
        "Roboto",
        "Noto Sans Hebrew",
        "Noto Kufi Arabic",
        "Noto Sans JP",
        "sans-serif",
      ],
      normal: [
        "Figtree",
        "Roboto",
        "Noto Sans Hebrew",
        "Noto Kufi Arabic",
        "Noto Sans JP",
        "sans-serif",
      ],
      // Add other font families if needed, e.g., 'serif', 'mono', etc.
    },
  },
  plugins: [],
};
