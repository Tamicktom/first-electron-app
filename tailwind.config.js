import plugin from 'tailwindcss/plugin'
import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/renderer/src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      },
      colors: {
        rotion: {
          50: '#ebeaed',
          100: '#c1bfc7',
          200: '#a3a0ac',
          300: '#797486',
          400: '#5f596e',
          500: '#37304a',
          600: '#322c43',
          700: '#272235',
          800: '#1e1a29',
          900: '#17141f'
        }
      },
      keyframes: {
        'slide-in': {
          from: {
            width: 0
          },
          to: {
            width: 'var(--radix-collapsible-content-width)'
          }
        },
        'slide-out': {
          from: {
            width: 'var(--radix-collapsible-content-width)'
          },
          to: {
            width: 0
          }
        }
      },
      animation: {
        slideIn: 'slide-in 0.2s ease-out',
        slideOut: 'slide-out 0.2s ease-out'
      }
    }
  },
  plugins: [
    typography,
    plugin(({ addUtilities }) => {
      addUtilities({
        '.region-drag': {
          '-webkit-app-region': 'drag'
        },
        '.region-no-drag': {
          '-webkit-app-region': 'no-drag'
        }
      })
    })
  ]
}
