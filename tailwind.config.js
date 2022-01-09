module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        32: "32px",
      },
      colors: {
        db: "#483d8b",
        ab: "#f0f8ff",
      },
    },
  },
  variants: {},
  plugins: [],
};
