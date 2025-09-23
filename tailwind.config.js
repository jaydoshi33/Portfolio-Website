/* eslint-disable @typescript-eslint/no-require-imports */
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Coffee + Olive palette
        // background: light coffee, foreground: near-black
        border: "hsl(35, 30%, 80%)",
        input: "hsl(35, 30%, 80%)",
        ring: "hsl(82, 39%, 34%)", // olive ring
        background: "hsl(35, 56%, 90%)", // light coffee
        foreground: "hsl(0, 0%, 10%)", // near-black
        primary: {
          DEFAULT: "hsl(82, 39%, 34%)", // olive green
          foreground: "hsl(0, 0%, 98%)",
        },
        secondary: {
          DEFAULT: "hsl(35, 40%, 85%)", // softer coffee
          foreground: "hsl(0, 0%, 14%)",
        },
        destructive: {
          DEFAULT: "hsl(0, 70%, 50%)",
          foreground: "hsl(0, 0%, 98%)",
        },
        muted: {
          DEFAULT: "hsl(35, 35%, 88%)",
          foreground: "hsl(35, 20%, 35%)",
        },
        accent: {
          DEFAULT: "hsl(82, 25%, 40%)", // muted olive accent
          foreground: "hsl(0, 0%, 98%)",
        },
        popover: {
          DEFAULT: "hsl(35, 56%, 95%)",
          foreground: "hsl(0, 0%, 10%)",
        },
        card: {
          DEFAULT: "hsl(35, 56%, 95%)",
          foreground: "hsl(0, 0%, 10%)",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
