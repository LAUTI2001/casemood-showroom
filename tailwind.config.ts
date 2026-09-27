import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#191F29',
          'bg-deep': '#12161E',
          card: '#222B38',
          'card-hover': '#2A3647',
          border: '#334155',
          'border-light': '#475569',
          yellow: '#F5C518',
          'yellow-hover': '#E6B800',
          'yellow-light': '#FEF08A',
          red: '#EF4444',
          sky: '#38BDF8',
          text: '#F8FAFC',
          muted: '#94A3B8',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(2deg)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-8px) rotate(-2deg)' },
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
      },
      animation: {
        'float-slow': 'float-slow 5s ease-in-out infinite',
        'float-reverse': 'float-reverse 4.5s ease-in-out infinite',
        'bounce-subtle': 'bounce-subtle 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
