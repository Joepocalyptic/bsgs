module.exports = {
  important: true,
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      // '2xl': '1536px',
    },
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
