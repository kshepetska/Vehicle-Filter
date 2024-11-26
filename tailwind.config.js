/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F7931A",
      },
      boxShadow: {
        primary: "0 4px 14px rgba(247, 147, 26, 0.5)",
      },
    },
  },
  plugins: [],
};
