/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#2671D9',
          soft: '#E9F1FB',
          light: '#BAD1F3',
          mid: '#5197F9',
          muted: '#93B8EC',
        },
        ink: {
          DEFAULT: '#333333',
          secondary: '#4D5E80',
          muted: '#7F7F80',
          faint: '#9C9C9C',
          soft: '#667085',
          dark: '#21252B',
        },
        surface: {
          page: '#F1F5F9',
          line: '#E5E7E9',
        },
        status: {
          purple: '#8C62FF',
          orange: '#FFA229',
          red: '#FF5656',
          green: '#0EA976',
        },
      },
      maxWidth: {
        content: '1217px',
        inner: '1170px',
      },
      width: {
        sidebar: '248px',
      },
      height: {
        navbar: '58px',
        topbar: '54px',
      },
      fontFamily: {
        sans: ['Segoe UI', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
