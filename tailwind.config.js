/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-pattern": "url('./public/assets/banner.png')",
        "aboutbg-pattern": "url('./public/assets/about-bg.png')",
        "about-pattern": "url('./public/assets/group-38.svg')",
        "footer-pattern": "url('./public/assets/footer.png')",
      },
    },
  },
  plugins: [],
};
