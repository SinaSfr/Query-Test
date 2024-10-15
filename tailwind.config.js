/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "deep-sky-blue": "#071952",
        "deep-aqua": "#088395",
        "bright-aqua": "#37B7C3",
        "soft-sky": "#EBF4F6",
      },
    },
  },
  plugins: [],
};

