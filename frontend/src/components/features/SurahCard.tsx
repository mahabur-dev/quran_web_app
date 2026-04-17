import Link from 'next/link';
import type { SurahSummary } from '@/types/quran.types';

export function SurahCard({ surah }: { surah: SurahSummary }) {
  return (
    <Link
      href={`/surah/${surah.number}`}
      className="group flex items-center gap-4 rounded-lg border border-slate-700 bg-slate-800/50 p-5 transition-all duration-300 hover:border-teal-500 hover:bg-slate-800/80"
    >
      {/* Diamond Number Badge */}
      <div className="flex-shrink-0 relative w-12 h-12 flex items-center justify-center">
        <div className="absolute inset-0 bg-slate-700 group-hover:bg-teal-500 transition-colors transform rotate-45 rounded-sm"></div>
        <span className="relative text-white font-bold text-lg group-hover:text-white transition-colors">
          {surah.number}
        </span>
      </div>

      {/* Card Content */}
      <div className="flex-1">
        <h3 className="font-semibold text-white text-base leading-tight">{surah.englishName}</h3>
        <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
          {surah.englishNameTranslation}
        </p>
      </div>

      {/* Arabic Name and Ayahs */}
      <div className="flex-shrink-0 text-right">
        <p className="text-sm font-medium text-teal-400 group-hover:text-teal-300 transition-colors">
          {surah.numberOfAyahs} Ayahs
        </p>
        <span dir="rtl" className="text-lg font-bold text-white block">
          {surah.name}
        </span>
      </div>
    </Link>
  );
}
