/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        md: '640px', // Medium devices
        lg: '1024px', // Large devices
      },
      colors: {
        'bg-theme-black': '#0D0D0D',
        'theme-white': '#c2d6ed',
        'theme-off-white': '#a6b5c6',
        'theme-gray': '#c2d6ed',
        'theme-black-gray': '#64748b',
        'theme-orange': '#4ABABF',
      },
    },
  },
  plugins: [],
};
