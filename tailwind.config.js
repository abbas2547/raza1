module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#fef7ee",
        card: "#ffffff",
        border: "#e5e7eb",
        accent: {
          DEFAULT: "#ff7a18",
          soft: "#ffb470",
        },
      },
      fontFamily: {
        sans: ["var(--font-cosmic)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
