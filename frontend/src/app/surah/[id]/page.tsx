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
    <article className="max-w-4xl mx-auto py-8 px-4">
      <header className="mb-10 flex items-end justify-between border-b border-white/5 pb-6">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-teal-500 mb-1">
            Surah {surah.number} • {surah.revelationType}
          </p>
          <h1 className="text-4xl font-bold text-white tracking-tight">
            {surah.englishName}
            <span className="ml-3 text-xl font-light text-slate-500">
              ({surah.englishNameTranslation})
            </span>
          </h1>
        </div>
        <Link 
          href="/" 
          className="text-sm font-medium text-slate-400 hover:text-teal-400 transition-colors flex items-center gap-2"
        >
          <span>←</span> All Surahs
        </Link>
      </header>

      <div className="space-y-6">
        {surah.ayahs.map((ayah) => (
          <div key={ayah.number} id={`ayah-${ayah.numberInSurah}`}>
            <AyahCard ayah={ayah} />
          </div>
        ))}
      </div>
    </article>
  );
}