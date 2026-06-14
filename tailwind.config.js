/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bp: {
          bg: '#080B10',
          surface: '#0D1117',
          surface2: '#131920',
          border: '#1E2835',
          text: '#E8EDF3',
          muted: '#6B7A90',
          accent: '#00D4FF',
          accent2: '#7B61FF',
          green: '#00FF87',
          yellow: '#FFB800',
          red: '#FF3B5C',
          navy: '#1A237E',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 24px rgba(0, 212, 255, 0.15)',
        card: '0 4px 24px rgba(0, 0, 0, 0.35)',
      },
    },
  },
  plugins: [],
}
