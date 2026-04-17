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
  if (loading) return <p className="text-slate-500 text-sm">Searching…</p>;
  if (!query || query.length < 2) return <p className="text-slate-500 text-sm">Type at least 2 characters to search.</p>;
  if (hits.length === 0) return <p className="text-slate-500 text-sm">No results for &quot;{query}&quot;.</p>;
  return (
    <ul className="space-y-3">
      {hits.map((hit) => (
        <li key={`${hit.surahNumber}-${hit.numberInSurah}`}>
          <Link href={`/surah/${hit.surahNumber}#ayah-${hit.numberInSurah}`}
                className="block rounded-lg border border-slate-200 bg-white p-4 hover:border-brand transition">
            <div className="flex justify-between text-xs text-slate-500 mb-2">
              <span>{hit.surahEnglishName} · {hit.surahNumber}:{hit.numberInSurah}</span>
              <span dir="rtl" className={cn('font-arabic-amiri')}>{hit.surahName}</span>
            </div>
            <p dir="rtl" className={cn('leading-loose text-slate-900', fontClass)}
               style={{ fontSize: `${settings.arabicFontSize - 4}px` }}>{hit.arabic}</p>
            <p className="mt-2 text-slate-700"
               style={{ fontSize: `${settings.translationFontSize}px` }}>{hit.translation}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}