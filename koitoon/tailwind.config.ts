import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
    './src/**/*.{html,js,jsx,ts,tsx}', // 타입스크립트와 JSX 파일 포함
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        custom: ['RubikPuddles-Regular', 'sans'], // YourFontName을 폰트 패밀리 이름으로 대체하세요.
      }, 
      screens: {
        ss: { min: "100px", max: "819px" },
      }, 
      colors: {
        'customeRed': '#ee511f',
        // 'white': '#ffffff',
      },    
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs"), require('taos/plugin'), require("daisyui")],
  darkMode: "class",
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))',
    // 다른 safelist 항목들이 있다면 여기에 추가
  ],
  daisyui: {
    themes: [ "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
    "dim",
    "nord",
    "sunset",],
  },
}
export default config
