// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx,vue}",
  "./node_modules/flowbite/**/*.js"
];
export const theme = {
  extend: {
    colors: {
      'zinc-925': '#101014',
    },
  },
};
export const plugins = [
  require('flowbite/plugin')
];
