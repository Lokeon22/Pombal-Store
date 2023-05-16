/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        modifyScale: "modifyScale 0.3s ease-in-out",
        changeOpacity: "changeOpacity 0.3s ease-in",
        changeOpDire: "changeOpDire 0.7s ease",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-blue":
          "linear-gradient(90deg, rgba(9,6,56,1) 18%, rgba(77,104,147,1) 44%, rgba(47,68,130,1) 66%, rgba(7,15,56,1) 86%);",
      },
      keyframes: {
        modifyScale: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        changeOpacity: {
          "100%": { opacity: "1" },
          "0%": { opacity: "0" },
        },
        changeOpDire: {
          "100%": { opacity: "1", transform: "translateX(0px)" },
          "0%": { opacity: "0", transform: "translateX(-50px)" },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
