import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: '#2BA35A', dark: '#1F7A43', light: '#3EC172' },
        qm: {
          main: '#0B0B0B',
          panel: '#151515',
          border: '#2A2A2A',
          text: '#FFFFFF',
          textSecondary: '#A3A3A3',
          activeBg: '#102A1C',
        }
      },
      fontFamily: {
        'arabic-amiri': ['var(--font-amiri)', 'serif'],
        'arabic-scheherazade': ['var(--font-scheherazade)', 'serif'],
        'arabic-naskh': ['var(--font-naskh)', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;