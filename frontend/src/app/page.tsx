import { api } from '@/lib/api';
import { SurahCard } from '@/components/features/SurahCard';

export const dynamic = 'force-static';
export const revalidate = false;

export default async function HomePage() {
  const surahs = await api.getSurahs();
  return (
    <section>
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">The Holy Quran</h1>
        <p className="text-slate-600 text-sm mt-1">
          Browse all 114 surahs. Tap any surah to read its ayahs with translation.
        </p>
      </header>
      <div className="grid gap-3 sm:grid-cols-2">
        {surahs.map((s) => <SurahCard key={s.number} surah={s} />)}
      </div>
    </section>
  );
}