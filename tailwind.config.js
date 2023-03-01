/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        91: "91px",
      },
      width: {
        288: "288px",
      },
      colors: {
        dark: "#0C203C",
        light: "#667085",
        btnBlue: "#1C9FDA",
      },
      screens: {
        sm: "240px",
        md: "768px",
        lg: "991px",
        xl: "1336px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
