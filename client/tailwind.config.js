/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
       
        
      
        
        ferris: {
          'prim': '#ed3624',
          'prim-hov': '#AD362B',
          'sec': '#f6f6f6',
          'ter': '#1a1a1a',
          'nav': '#f4f4e7',
          'footer': '#161616',

        }
      },
      fontFamily: {
        cormorant: ["Cormorant Garamond", "serif"],
        jost: ["Jost", "sans-serif"]
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};


