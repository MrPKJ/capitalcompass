/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        layout: "#000000",
        footer: "#FFECB3",
        footerBottom: "#FFC107",
      },
      fontFamily: {
        unbounded: ["Unbounded"],
        montserrat: ["Montserrat"],
        bebasneue: ["bebasneue"],
        chilanka: ["Chilanka"],
        anekkannada: ["Anekkannada"],
      },
      borderColor: {
        dimBlack: "#DEDEDE",
      },
      width: {
        menu: "640px",
        description: "550px",
      },
      fontSize: {
        menu: "14px",
        weather: "16px",
      },
      textColor: {
        menuBlack: "#181818",
      },
      height: {
        footer: "400px",
        navbar: "128px",
      },
    },
  },
  plugins: [],
};
