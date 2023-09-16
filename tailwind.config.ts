import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'reviews': '1190px',
        'ipad': '1244px',
        'big': '1374px',
        'chang': '782px'
      },
    },
  },
  plugins: [],
}
export default config
