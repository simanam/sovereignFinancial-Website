/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "league-gothic": ['"League Gothic"', "sans-serif"],
        "pt-serif": ['"PT Serif"', "serif"],
        poppins: ['"Poppins"', "sans-serif"],
      },
      colors: {
        green: {
          50: "#30AF5B",
          90: "#292C27",
        },
        gray: {
          10: "#EEEEEE",
          20: "#A2A2A2",
          30: "#7B7B7B",
          40: "#F0F0F0",
          50: "#585858",
          90: "#141414",
          100: "#36454F",
        },
        orange: {
          50: "#FF814C",
        },
        blue: {
          10: "7FB3D5",
          20: "#D5E9FD",
          60: "#7Fb3D5",
          70: "#021639",
          80: "#0050EF",
        },
        yellow: {
          50: "#FEC601",
          60: "#FFD700",
        },
        navyblue: {
          100: "#003366",
          90: "#103B7D",
          80: "#204394",
        },
      },
      backgroundImage: {
        "bg-img-1": "url('/img-1.png')",
        "bg-img-2": "url('/img-2.png')",
        "feature-bg": "url('/feature-bg.png')",
        pattern: "url('/pattern.png')",
        "pattern-2": "url('/pattern-bg.png')",
      },
      screens: {
        xs: "400px",
        "3xl": "1680px",
        "4xl": "2200px",
      },
      maxWidth: {
        "10xl": "1512px",
      },
      borderRadius: {
        "5xl": "40px",
      },
    },
  },
  plugins: [],
};
