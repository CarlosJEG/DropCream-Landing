/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondText: "rgba(255, 255, 255, 0.75)",
        buttonBg: "rgba(255, 255, 255, 0.15)",
        buttonBorder: "rgba(255, 255, 255, 0.50)",
        cardBg: "rgba(0, 0, 0, 0.20)",
      },
    },
  },
  plugins: [],
};
