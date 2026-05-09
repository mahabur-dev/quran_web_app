'use client';
import { useEffect, useState } from 'react';
import { SearchBar } from '@/components/features/SearchBar';
import { SearchResults } from '@/components/features/SearchResults';
import { useDebounce } from '@/hooks/useDebounce';
import { api } from '@/lib/api';
import type { SearchHit } from '@/types/quran.types';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [hits, setHits] = useState<SearchHit[]>([]);
  const [loading, setLoading] = useState(false);
  const debounced = useDebounce(query, 350);

  useEffect(() => {
    let cancelled = false;
    if (debounced.trim().length < 2) { setHits([]); setLoading(false); return; }
    setLoading(true);
    api.search(debounced)
      .then((res) => { if (!cancelled) setHits(res); })
      .catch(() => { if (!cancelled) setHits([]); })
      .finally(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
  }, [debounced]);

  return (
    <div className="h-full flex flex-col items-center pt-12 px-6 pb-20">
      <header className="mb-8 text-center max-w-2xl w-full">
        <h1 className="text-3xl font-semibold text-white mb-2">Search The Quran</h1>
        <p className="text-sm text-qm-textSecondary">Find ayahs by Arabic or English translation text.</p>
      </header>
      <div className="w-full max-w-2xl space-y-8">
        <SearchBar value={query} onChange={setQuery} />
        <SearchResults hits={hits} query={debounced} loading={loading} />
      </div>
    </div>
  );
}