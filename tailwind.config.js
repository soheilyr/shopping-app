module.exports = {
  content: ["./src/*.{js,jsx}", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%": { opacity: 0, transform: "translateY(-10%)" },
          "70%": { transform: "translateY(0)" },
          "100%": {
            opacity: 1,
          },
        },
      },
      animation: {
        wiggle: "wiggle 0.3s linear",
      },
    },
  },
  plugins: [],
};
