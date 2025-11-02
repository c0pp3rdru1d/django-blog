module.exports = {
  content: ["./templates/**/*.html", "./blog/**/*.py"],
  theme: {
    extend: {
      colors: {
        forest: {
          900: "#0a1c17",
          800: "#0f2a22",
          700: "#14382d",
          600: "#184538",
          500: "#1d5343",
        },
        copper: {
          300: "#c98c5a",
          400: "#bf7e48",
          500: "#b87333", // classic copper
          600: "#9f5e26",
        },
      },
      boxShadow: {
        window: "0 10px 30px rgba(0,0,0,0.35)",
        glow: "0 0 0 1px rgba(184,115,51,0.35), 0 8px 24px rgba(184,115,51,0.08)",
      },
      borderRadius: {
        '2xl': '1rem',
      }
    },
  },
  plugins: [], // keep empty since we're avoiding npm plugins
}

