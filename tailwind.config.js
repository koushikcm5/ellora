/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        mist: {
          DEFAULT: '#9AB6B8',
          light: '#D1E0E1',
          dark: '#5A7A7C',
        },
        'white-mist': '#F4F6F7',
        forest: {
          DEFAULT: '#4A7C6B',
          dark: '#2A4B40',
        },
        slate: {
          custom: '#54635F',
        },
        sand: {
          DEFAULT: '#EFE4D7',
          dark: '#D6C7B3',
          light: '#F8F4EE',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      keyframes: {
        drift: {
          '0%': { transform: 'translateX(-10%) translateY(0)' },
          '50%': { transform: 'translateX(5%) translateY(-2%)' },
          '100%': { transform: 'translateX(-10%) translateY(0)' },
        },
        driftSlow: {
          '0%': { transform: 'translateX(8%) translateY(0)' },
          '50%': { transform: 'translateX(-6%) translateY(3%)' },
          '100%': { transform: 'translateX(8%) translateY(0)' },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        scrollDot: {
          '0%': { transform: 'translateY(0)', opacity: 1 },
          '60%': { opacity: 0.4 },
          '100%': { transform: 'translateY(14px)', opacity: 0 },
        },
      },
      animation: {
        drift: 'drift 28s ease-in-out infinite',
        driftSlow: 'driftSlow 40s ease-in-out infinite',
        fadeUp: 'fadeUp 0.9s ease-out forwards',
        scrollDot: 'scrollDot 1.8s ease-in-out infinite',
      },
      letterSpacing: {
        widest2: '0.28em',
      },
    },
  },
  plugins: [],
}
