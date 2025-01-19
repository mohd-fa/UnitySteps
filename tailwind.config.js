/ @type {import('tailwindcss').Config} */;
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#87E64C",
        secondary: "#1D606B",
        background: "#F7F8FA",
        "font-heading": "#323142",
        "font-para": "#7F7F7F",
        "font-highlight": "#ACADB9",
        'primary-light': "#EDFBE4"
      },
    },
    fontFamily: {
      pthin: ["Poppins-Thin", "sans-serif"],
      pextralight: ["Poppins-ExtraLight", "sans-serif"],
      plight: ["Poppins-Light", "sans-serif"],
      pregular: ["Poppins-Regular", "sans-serif"],
      pmedium: ["Poppins-Medium", "sans-serif"],
      psemibold: ["Poppins-SemiBold", "sans-serif"],
      pbold: ["Poppins-Bold", "sans-serif"],
      pextrabold: ["Poppins-ExtraBold", "sans-serif"],
      pblack: ["Poppins-Black", "sans-serif"],
    },
  },
  plugins: [],
};
