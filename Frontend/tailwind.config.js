/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
      extend: {
        keyframes: {
          fill: {
            '0%': { height: '0%' },
            '100%': { height: '100%' },
          },
        },
        animation: {
          fill: 'fill 3s ease-out forwards', // Custom fill animation
        },
      },
    },
    plugins: [require("daisyui")],
  };
  