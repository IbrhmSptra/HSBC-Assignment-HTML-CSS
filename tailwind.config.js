/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        popins: ["Poppins"],
        roboto: ["Roboto"],
        arial: ["Arial"],
      },
      colors: {
        Primary: "#8053FF",
        Body: "#23155B",
        hero: "#FBFAFF",
        Heading: "#1A1A1A",
        Paragraph: "#666666",
        Black300: "#333333",
        Black500: "#808080",
        input: "#F2F2F2",
        stroke: "#F2F2F2",
        Blue: "#007AFF",
      },
    },
  },
  plugins: [],
};
