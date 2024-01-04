/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mudBlack: "#323338",
        primary: "#0073ea",
        primaryHover: "#0060b9",
        linkWater: "#c3c6d4",
        comet: "#676879",
        solitude: "#ecedf5",
        "disable-color": "rgba(50,51,56,.38)",
      },
      lineHeight: {
        7.5: "1.875rem",
      },
    },

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
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtil = {
        //heading1
        ".heading-1_light": {
          font: "300 var(--h1-style)",
        },

        ".heading-1_normal": {
          font: "500 var(--h1-style)",
        },

        ".heading-1_bold": {
          font: " 700 var(--h1-style)",
        },

        //heading2
        ".heading-2_light": {
          font: "300 var(--h2-style)",
        },
        ".heading-2_normal": {
          font: "500 var(--h2-style)",
        },

        ".heading-2_bold": {
          font: "700 var(--h2-style)",
        },

        //heading3
        ".heading-3_light": {
          font: "300 var(--h3-style)",
        },
        ".heading-3_normal": {
          font: "500 var(--h3-style)",
        },

        ".heading-3_bold": {
          font: "600 var(--h3-style)",
        },

        //normal-text1
        ".normal-text-1_base": {
          font: "400 var(--text1-style)",
        },
        ".normal-text-1_medium": {
          font: " 600 var(--text1-style)",
        },
        ".normal-text-1_bold": {
          font: "700 var(--text1-style)",
        },

        //normal-text2
        ".normal-text-2_base": {
          font: "400 var(--text2-style)",
        },
        ".normal-text-2_medium": {
          font: "600 var(--text2-style)",
        },
        ".normal-text-2_bold": {
          font: "700 var(--text2-style)",
        },

        //letter-spacing
        ".letter-spacing-h1": { letterSpacing: "-0.5px" },
        ".letter-spacing-h2": { letterSpacing: "-0.1px" },
        ".letter-spacing-h3": { letterSpacing: "-0.1px" },

        //
      };

      addUtilities(newUtil, ["responsive", "hover"]);
    }),
  ],
};
