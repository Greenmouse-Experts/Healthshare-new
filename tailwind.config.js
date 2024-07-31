/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "480px", // Custom small breakpoint
        md: "768px", // Custom medium breakpoint
        lg: "1024px", // Custom large breakpoint
        xl: "1440px", // Custom extra large breakpoint
        "2xl": "1600px", // Custom 2xl breakpoint

        tablet: "640px",
        // => @media (min-width: 640px) { ... }

        laptop: "1228px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1500px",
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
};
