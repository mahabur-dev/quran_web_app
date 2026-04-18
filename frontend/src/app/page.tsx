// import { api } from '@/lib/api';
// import { SurahCard } from '@/components/features/SurahCard';

import { SurahCard } from "@/components/features/SurahCard";
import { api } from "@/lib/api";

// export const dynamic = 'force-static';
// export const revalidate = false;

// export default async function HomePage() {
//   const surahs = await api.getSurahs();
//   return (
//     <section>
//       <header className="mb-6">
//         <h1 className="text-2xl font-bold text-slate-900">The Holy Quran</h1>
//         <p className="text-slate-600 text-sm mt-1">
//           Browse all 114 surahs. Tap any surah to read its ayahs with translation.
//         </p>
//       </header>
//       <div className="grid gap-3 sm:grid-cols-2">
//         {surahs.map((s) => <SurahCard key={s.number} surah={s} />)}
//       </div>
//     </section>
//   );
// }


// import { SurahCard } from '@/components/surah-card';
// import { SURAHS } from '@/lib/quran-data';

export default async function Home() {
  const surahs = await api.getSurahs();
  return (
    <main className="min-h-screen bg-slate-900 p-6">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-white mb-3">The Noble Quran</h1>
          <p className="text-lg text-slate-400">
            Explore all 114 chapters of the Quran
          </p>
        </div>

        {/* Surahs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4">
          {surahs.map((surah) => (
            <SurahCard key={surah.number} surah={surah} />
          ))}
        </div>
      </div>
    </main>
  );
}
