export interface SurahSummary {
  number: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
  numberOfAyahs: number;
  revelationType: 'Meccan' | 'Medinan';
}
export interface Ayah {
  number: number;
  numberInSurah: number;
  arabic: string;
  translation: string;
}
export interface SurahDetail extends SurahSummary { ayahs: Ayah[]; }
export interface SearchHit {
  surahNumber: number;
  surahName: string;
  surahEnglishName: string;
  numberInSurah: number;
  arabic: string;
  translation: string;
}
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  error?: string;
  message?: string;
}