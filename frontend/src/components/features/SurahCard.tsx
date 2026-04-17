import Link from 'next/link';
import type { SurahSummary } from '@/types/quran.types';

export function SurahCard({ surah }: { surah: SurahSummary }) {
  return (
    <Link href={`/surah/${surah.number}`}
      className="flex items-center justify-between rounded-lg border border-slate-200 bg-white p-4 hover:border-brand hover:shadow-sm transition">
      <div className="flex items-center gap-4">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-brand font-semibold">{surah.number}</span>
        <div>
          <h3 className="font-semibold text-slate-900">{surah.englishName}</h3>
          <p className="text-xs text-slate-500">
            {surah.englishNameTranslation} · {surah.numberOfAyahs} ayahs · {surah.revelationType}
          </p>
        </div>
      </div>
      <span dir="rtl" className="text-xl font-arabic-amiri text-brand-dark">{surah.name}</span>
    </Link>
  );
}