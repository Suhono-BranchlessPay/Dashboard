/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bp: {
          bg: '#08080F',
          surface: '#0F0F1A',
          surface2: '#131320',
          border: '#1F2937',
          text: '#FFFFFF',
          muted: '#9CA3AF',
          primary: '#836EF9',
          accent: '#00D4FF',
          green: '#10B981',
          yellow: '#F59E0B',
          red: '#EF4444',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 24px rgba(0, 212, 255, 0.15)',
        card: '0 4px 24px rgba(0, 0, 0, 0.35)',
      },
    },
  },
  plugins: [],
}
