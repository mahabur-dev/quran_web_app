import Link from 'next/link';
import { notFound } from 'next/navigation';
import { api } from '@/lib/api';
import { AyahCard } from '@/components/features/AyahCard';

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
    <article>
      <header className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-xs text-slate-500">Surah {surah.number} · {surah.revelationType}</p>
          <h1 className="text-2xl font-bold text-slate-900">
            {surah.englishName}{' '}
            <span className="text-slate-500 font-normal text-base">({surah.englishNameTranslation})</span>
          </h1>
        </div>
        <Link href="/" className="text-sm text-brand hover:underline" aria-label="Back to surah list">← All Surahs</Link>
      </header>
      <div className="space-y-4">
        {surah.ayahs.map((ayah) => (
          <div key={ayah.number} id={`ayah-${ayah.numberInSurah}`}>
            <AyahCard ayah={ayah} />
          </div>
        ))}
      </div>
    </article>
  );
}