/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      boxShadow: ["hover", "focus", "active", "group-hover"],
      boxShadow: [
        "responsive",
        "hover",
        "focus",
        "active",
        "group-hover",
        "bottom",
      ],
      colors: {
        primary: {
          50: "#ecf9ff",
          100: "#d4f0ff",
          200: "#b2e7ff",
          300: "#7ddaff",
          400: "#40c3ff",
          500: "#14a1ff",
          600: "#007fff",
          700: "#0067ff",
          800: "#0053cd",
          900: "#0849a0",
          950: "#0a2d61",
        },
      },
    },
  },
  plugins: [],
};
