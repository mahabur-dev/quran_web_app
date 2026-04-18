
import { env } from '../config/index.js';
import type { Ayah, SearchHit, SurahDetail, SurahSummary } from '../types/quran.types.js';

class QuranService {
  private surahs: SurahDetail[] | null = null;
  private loadingPromise: Promise<SurahDetail[]> | null = null;

  private async ensureLoaded(): Promise<SurahDetail[]> {
    if (this.surahs) return this.surahs;
    if (!this.loadingPromise) this.loadingPromise = this.loadAll();
    this.surahs = await this.loadingPromise;
    return this.surahs;
  }

  private async loadAll(): Promise<SurahDetail[]> {
    const url = `${env.QURAN_API_BASE}/quran/${env.QURAN_TRANSLATION_EDITION}`;
    const arabicUrl = `${env.QURAN_API_BASE}/quran/quran-uthmani`;
    const [translationRes, arabicRes] = await Promise.all([fetch(url), fetch(arabicUrl)]);
    if (!translationRes.ok || !arabicRes.ok) throw new Error('Failed to fetch Quran data');

    const translationJson = (await translationRes.json()) as UpstreamResponse;
    const arabicJson = (await arabicRes.json()) as UpstreamResponse;

    return translationJson.data.surahs.map((tSurah, sIdx) => {
      const aSurah = arabicJson.data.surahs[sIdx];
      const ayahs: Ayah[] = tSurah.ayahs.map((tAyah, aIdx) => ({
        number: tAyah.number,
        numberInSurah: tAyah.numberInSurah,
        arabic: aSurah.ayahs[aIdx].text,
        translation: tAyah.text,
      }));
      return {
        number: tSurah.number,
        name: tSurah.name,
        englishName: tSurah.englishName,
        englishNameTranslation: tSurah.englishNameTranslation,
        numberOfAyahs: tSurah.numberOfAyahs ?? ayahs.length,
        revelationType: tSurah.revelationType,
        ayahs,
      };
    });
  }

  async getSurahList(): Promise<SurahSummary[]> {
    const all = await this.ensureLoaded();
    return all.map(({ ayahs: _a, ...summary }) => summary);
  }

  async getSurah(id: number): Promise<SurahDetail | null> {
    const all = await this.ensureLoaded();
    return all.find((s) => s.number === id) ?? null;
  }

  async searchByTranslation(query: string, limit = 50): Promise<SearchHit[]> {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    const all = await this.ensureLoaded();
    const hits: SearchHit[] = [];
    for (const surah of all) {
      for (const ayah of surah.ayahs) {
        if (ayah.translation.toLowerCase().includes(q)) {
          hits.push({
            surahNumber: surah.number,
            surahName: surah.name,
            surahEnglishName: surah.englishName,
            numberInSurah: ayah.numberInSurah,
            arabic: ayah.arabic,
            translation: ayah.translation,
          });
          if (hits.length >= limit) return hits;
        }
      }
    }
    return hits;
  }
}

export const quranService = new QuranService();

interface UpstreamAyah { number: number; numberInSurah: number; text: string; }
interface UpstreamSurah {
  number: number; name: string; englishName: string; englishNameTranslation: string;
  numberOfAyahs: number; revelationType: 'Meccan' | 'Medinan'; ayahs: UpstreamAyah[];
}
interface UpstreamResponse { data: { surahs: UpstreamSurah[] }; }