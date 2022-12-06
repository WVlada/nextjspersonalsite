const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      oswald: ["Oswald", ...defaultTheme.fontFamily.sans],
      haas: ["Haas", ...defaultTheme.fontFamily.sans],
      roboto: ["Roboto Sans Serif", ...defaultTheme.fontFamily.sans],
      rubik: ["Rubik", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
      backgroundImage: {
        "bga": "url('/images/bg1.jpg')",
        "home-cover0": "url('/images/home_cover00.jpg')",
        "home-cover1": "url('/images/home_cover11.jpg')",
        "home-cover2": "url('/images/home_cover22.jpg')",
        "my-gradient":
          "bg-blue-50 bg-gradient-to-r from-[#c850c0] to-[#ffcc70] bg-gradient-to-b from-[#ffcc70] to-[#4158d0]",
        "a-gradient":
          "linear-gradient(to right, rgba(41,100,149,0.8) 0%,rgba(0,9,45,0.8) 100%);",
      },
    },
  },
  plugins: [],
};
