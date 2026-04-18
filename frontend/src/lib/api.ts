import type { ApiResponse, SearchHit, SurahDetail, SurahSummary } from '@/types/quran.types';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// async function request<T>(path: string, init?: RequestInit): Promise<T> {
//   const res = await fetch(`${API_URL}${path}`, {
//     ...init,
//     headers: { 'Content-Type': 'application/json', ...init?.headers },
//   });
//   const json = (await res.json()) as ApiResponse<T>;
//   if (!res.ok || !json.success) throw new Error(json.error ?? `Request failed: ${path}`);
//   return json.data;
// }
async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, init);
  const json = (await res.json()) as ApiResponse<T>;
  if (!res.ok || !json.success) {
    throw new Error(json.error ?? `Request failed: ${path}`);
  }
  return json.data;
}

export const api = {
  getSurahs: () => request<SurahSummary[]>('/surahs'),
  getSurah: (id: number) => request<SurahDetail>(`/surahs/${id}`),
  search: (q: string) => request<SearchHit[]>(`/search?q=${encodeURIComponent(q)}`),
};