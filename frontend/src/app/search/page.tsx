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
    <section className="space-y-5">
      <header>
        <h1 className="text-2xl font-bold text-slate-900">Search</h1>
        <p className="text-slate-600 text-sm mt-1">Search across the entire Quran by translation text.</p>
      </header>
      <SearchBar value={query} onChange={setQuery} />
      <SearchResults hits={hits} query={debounced} loading={loading} />
    </section>
  );
}