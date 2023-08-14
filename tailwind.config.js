/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            "--tw-prose-quote-borders": theme("colors.teal[300]"),
            "--tw-prose-hr": theme("colors.teal[300]"),
            "--tw-prose-invert-quote-borders": theme("colors.teal[300]"),
            "--tw-prose-invert-hr": theme("colors.teal[300]"),
          },
        },
      }),
      colors: {
        secondary: "#191825",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
