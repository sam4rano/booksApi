/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    spacing: {
      sm: '8px',
      md: '12px',
      lg: '16px',
      xl: '24px',
    },
    screens: {
      'sm': {'min': '360px', 'max': '543px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '544px', 'max': '900px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '901px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      // 'xl': {'min': '1025px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      // '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
}
