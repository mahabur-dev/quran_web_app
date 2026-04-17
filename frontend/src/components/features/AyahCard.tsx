'use client';
import { useSettings } from '@/context/SettingsContext';
import { ARABIC_FONT_OPTIONS } from '@/config/fonts';
import { cn } from '@/lib/utils';
import type { Ayah } from '@/types/quran.types';

export function AyahCard({ ayah }: { ayah: Ayah }) {
  const { settings } = useSettings();
  const fontClass = ARABIC_FONT_OPTIONS.find((f) => f.key === settings.arabicFont)?.className ?? 'font-arabic-amiri';

  return (
    <article className={cn(
      "group relative overflow-hidden transition-all duration-300",
      "rounded-xl border border-white/5 bg-[#0d1526]/50 backdrop-blur-sm p-6",
      "hover:border-teal-500/30 hover:bg-[#111c33]"
    )}>
      {/* Header: Ayah Number & Actions */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-500/10 text-xs font-bold text-teal-400 border border-teal-500/20 shadow-inner">
            {ayah.numberInSurah}
          </span>
          <div className="h-px w-8 bg-gradient-to-r from-teal-500/20 to-transparent" />
        </div>
      </div>

      {/* Arabic Text Section */}
      <div className="mb-8 text-right">
        <p 
          dir="rtl" 
          lang="ar" 
          className={cn(
            'text-slate-100 leading-[2.5] transition-all duration-300 antialiased',
            fontClass
          )}
          style={{ fontSize: `${settings.arabicFontSize}px` }}
        >
          {ayah.arabic}
        </p>
      </div>

      {/* Translation Section */}
      <div className="relative pt-6 border-t border-white/5">
        <p 
          className="text-slate-400 leading-relaxed transition-all duration-300 font-light italic"
          style={{ fontSize: `${settings.translationFontSize}px` }}
        >
          {ayah.translation}
        </p>
      </div>
    </article>
  );
}