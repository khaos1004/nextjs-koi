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
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs"), require('taos/plugin'),],
  darkMode: "class",
  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))',
    // 다른 safelist 항목들이 있다면 여기에 추가
  ],
}
export default config
