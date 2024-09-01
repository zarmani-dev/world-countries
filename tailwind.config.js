/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      padding: "2rem",
      center: true,
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      screens: {
        ssm: "630px",
      },
      colors: {
        darkBlue: "hsl(209, 23%, 22%)", // (Dark Mode Elements)
        darkBlueBg: "hsl(207, 26%, 17%)", //(Dark Mode Background)
        darkBlueText: "hsl(200, 15%, 8%)", // (Light Mode Text)
        darkGrayInput: "hsl(0, 0%, 52%)", // (Light Mode Input)
        lightGrayBg: "hsl(0, 0%, 98%)", //  (Light Mode Background):
        white: "hsl(0, 0%, 100%)", //  (Dark Mode Text & Light Mode Elements)
      },
      fontFamily: {
        sans: ["Nunito Sans", "sans-serif"],
      },
      fontSize: {
        homePage: "14px",
        detail: "16px",
      },
    },
  },
};
