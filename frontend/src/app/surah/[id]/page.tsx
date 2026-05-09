import { notFound } from 'next/navigation';
import { api } from '@/lib/api';
import { AyahCard } from '@/components/features/AyahCard';
import { SurahPageClient } from '@/components/features/SurahPageClient';

export const dynamic = 'force-static';
export const revalidate = false;

export async function generateStaticParams() {
  return Array.from({ length: 114 }, (_, i) => ({ id: String(i + 1) }));
}

export default async function SurahPage({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  if (!Number.isInteger(id) || id < 1 || id > 114) notFound();
  const surah = await api.getSurah(id).catch(() => null);
  if (!surah) notFound();

  return (
    <article className="h-full flex flex-col">
      {/* Stop audio when navigating between surahs */}
      <SurahPageClient surahNumber={surah.number} />

      <header className="relative flex-shrink-0 border-b border-qm-border py-12 flex flex-col items-center justify-center overflow-hidden min-h-[200px]">
        <div className="absolute inset-0 opacity-10 flex items-center justify-start ml-20 pointer-events-none">
          <div className="w-64 h-64 bg-white rounded-full blur-3xl opacity-5 absolute left-0" />
        </div>

        <h1 className="text-3xl font-semibold text-white tracking-wide mb-2 relative z-10">
          Surah {surah.englishName}
        </h1>
        <p className="text-sm text-qm-textSecondary relative z-10">
          {surah.numberOfAyahs} Ayahs &nbsp;·&nbsp;{' '}
          {surah.revelationType === 'Meccan' ? 'Makkah' : 'Madinah'}
        </p>
      </header>

      <div className="flex-1 pb-20">
        {surah.number !== 1 && surah.number !== 9 && (
          <div className="flex justify-center py-12 border-b border-qm-border">
            <span className="text-white font-arabic-amiri text-4xl opacity-90">
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </span>
          </div>
        )}
        {surah.ayahs.map((ayah) => (
          <div key={ayah.number} id={`ayah-${ayah.numberInSurah}`}>
            <AyahCard ayah={ayah} surahNumber={surah.number} />
          </div>
        ))}
      </div>
    </article>
  );
}
