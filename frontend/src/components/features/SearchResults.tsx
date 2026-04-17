'use client';
import Link from 'next/link';
import { useSettings } from '@/context/SettingsContext';
import { ARABIC_FONT_OPTIONS } from '@/config/fonts';
import { cn } from '@/lib/utils';
import type { SearchHit } from '@/types/quran.types';

interface SearchResultsProps { hits: SearchHit[]; query: string; loading: boolean; }

export function SearchResults({ hits, query, loading }: SearchResultsProps) {
  const { settings } = useSettings();
  const fontClass = ARABIC_FONT_OPTIONS.find((f) => f.key === settings.arabicFont)?.className ?? 'font-arabic-amiri';

  if (loading) return (
    <div className="flex items-center gap-2 text-teal-500/80 animate-pulse py-4">
      <div className="h-4 w-4 rounded-full border-2 border-t-transparent border-teal-500 animate-spin" />
      <p className="text-sm font-medium">Searching for wisdom...</p>
    </div>
  );

  if (!query || query.length < 2) return (
    <div className="py-10 text-center border-2 border-dashed border-white/5 rounded-xl">
      <p className="text-slate-500 text-sm">Type at least 2 characters to search across the Quran.</p>
    </div>
  );

  if (hits.length === 0) return (
    <div className="py-10 text-center">
      <p className="text-slate-400">No results found for <span className="text-teal-400">"{query}"</span></p>
    </div>
  );

  return (
    <ul className="space-y-4">
      {hits.map((hit) => (
        <li key={`${hit.surahNumber}-${hit.numberInSurah}`}>
          <Link 
            href={`/surah/${hit.surahNumber}#ayah-${hit.numberInSurah}`}
            className="group block rounded-xl border border-white/5 bg-white/[0.02] p-5 transition-all duration-300 hover:bg-white/[0.05] hover:border-teal-500/30 hover:translate-x-1"
          >
            {/* Metadata Header */}
            <div className="flex justify-between items-center mb-4 border-b border-white/5 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-teal-500 bg-teal-500/10 px-2 py-1 rounded">
                  {hit.surahEnglishName} {hit.surahNumber}:{hit.numberInSurah}
                </span>
              </div>
              <span dir="rtl" className="text-lg text-slate-300 font-arabic-amiri opacity-80 group-hover:opacity-100 transition-opacity">
                {hit.surahName}
              </span>
            </div>

            {/* Arabic Text Highlight */}
            <p 
              dir="rtl" 
              className={cn('leading-relaxed text-slate-100 mb-3 transition-colors group-hover:text-white', fontClass)}
              style={{ fontSize: `${settings.arabicFontSize - 4}px` }}
            >
              {hit.arabic}
            </p>

            {/* Translation text with query highlighting concept */}
            <p 
              className="text-slate-400 leading-relaxed font-light"
              style={{ fontSize: `${settings.translationFontSize}px` }}
            >
              {hit.translation}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
}