import Link from 'next/link';
import type { SurahSummary } from '@/types/quran.types';

export function SurahCard({ surah }: { surah: SurahSummary }) {
  return (
    <Link
      href={`/surah/${surah.number}`}
      className="group flex items-center gap-3 sm:gap-4 rounded-lg border border-slate-700 bg-slate-800/50 p-4 sm:p-5 transition-all duration-300 hover:border-teal-500 hover:bg-slate-800/80"
    >
      {/* Diamond Number Badge */}
      <div className="flex-shrink-0 relative w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center">
        <div className="absolute inset-0 bg-slate-700 group-hover:bg-teal-500 transition-colors transform rotate-45 rounded-sm" />
        <span className="relative text-white font-bold text-base sm:text-lg">
          {surah.number}
        </span>
      </div>

      {/* Card Content */}
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-white text-sm sm:text-base leading-tight truncate">
          {surah.englishName}
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 group-hover:text-slate-300 transition-colors truncate">
          {surah.englishNameTranslation}
        </p>
      </div>

      {/* Arabic Name and Ayahs */}
      <div className="flex-shrink-0 flex flex-col items-end gap-1.5">
        <span className="inline-flex items-center gap-1 rounded-full border border-teal-500/25 bg-teal-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-teal-300 group-hover:bg-teal-500/15 group-hover:border-teal-500/40 transition-colors whitespace-nowrap">
          <span className="font-bold tabular-nums">{surah.numberOfAyahs}</span>
          <span className="text-teal-400/80">Ayahs</span>
        </span>
        <span dir="rtl" className="text-base sm:text-lg font-bold text-white whitespace-nowrap leading-tight">
          {surah.name}
        </span>
      </div>
    </Link>
  );
}
