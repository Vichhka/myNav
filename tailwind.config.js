module.exports = {
  test: 'echo "Error: no test specified" && exit 1',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppin: ["Poppins", "serif"],
        roboto: ["Roboto", "serif"],
        preahvihear: ["Preahvihear", "serif"],
      },
      textColor: {
        mainColor: ["#00b2ca"],
      },
    },
  },
  plugins: [],
};
