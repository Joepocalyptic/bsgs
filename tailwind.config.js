module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue": {
          "light": "#0C387D",
          "normal": "#061435",
          "dark": "#00061F"
        },

        "yellow": "#FFF32B",

        "black": "#000000",
        "white": "#FFFFFF"

      }
    },
    fontFamily: {
      "heading": ["loos-compressed", "sans-serif"],
      "content": ["proxima-nova", "sans-serif"]
    }
  },
  plugins: [],
}
