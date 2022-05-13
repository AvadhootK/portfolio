module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        Ubuntu: ["Ubuntu", "sans-serif"],
      },
      colors: {
        "base-violet": "#6e57e0",
        "base-black": "#242329",
        "base-gray": "#6d6a7c",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
