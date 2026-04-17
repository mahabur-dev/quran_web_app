'use client';
import { useSettings } from '@/context/SettingsContext';
import { ARABIC_FONT_OPTIONS } from '@/config/fonts';
import { cn } from '@/lib/utils';
import type { Ayah } from '@/types/quran.types';

export function AyahCard({ ayah }: { ayah: Ayah }) {
  const { settings } = useSettings();
  const fontClass = ARABIC_FONT_OPTIONS.find((f) => f.key === settings.arabicFont)?.className ?? 'font-arabic-amiri';
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5">
      <div className="mb-3 flex items-center justify-between">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand/10 text-xs font-semibold text-brand">{ayah.numberInSurah}</span>
      </div>
      <p dir="rtl" lang="ar" className={cn('leading-loose text-slate-900', fontClass)}
         style={{ fontSize: `${settings.arabicFontSize}px` }}>{ayah.arabic}</p>
      <p className="mt-4 text-slate-700 leading-relaxed"
         style={{ fontSize: `${settings.translationFontSize}px` }}>{ayah.translation}</p>
    </article>
  );
}