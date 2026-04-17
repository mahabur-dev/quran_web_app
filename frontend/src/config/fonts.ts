import { Amiri, Scheherazade_New, Noto_Naskh_Arabic } from 'next/font/google';

export const amiri = Amiri({ weight: ['400','700'], subsets: ['arabic'], variable: '--font-amiri', display: 'swap' });
export const scheherazade = Scheherazade_New({ weight: ['400','700'], subsets: ['arabic'], variable: '--font-scheherazade', display: 'swap' });
export const naskh = Noto_Naskh_Arabic({ weight: ['400','700'], subsets: ['arabic'], variable: '--font-naskh', display: 'swap' });

export type ArabicFontKey = 'amiri' | 'scheherazade' | 'naskh';

export const ARABIC_FONT_OPTIONS: { key: ArabicFontKey; label: string; className: string }[] = [
  { key: 'amiri', label: 'Amiri', className: 'font-arabic-amiri' },
  { key: 'scheherazade', label: 'Scheherazade', className: 'font-arabic-scheherazade' },
  { key: 'naskh', label: 'Noto Naskh', className: 'font-arabic-naskh' },
];