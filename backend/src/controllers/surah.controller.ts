import type { Context } from 'hono';
import { quranService } from '../services/quran.service.js';

export async function listSurahs(c: Context) {
  const data = await quranService.getSurahList();
  return c.json({ success: true, data });
}

export async function getSurah(c: Context) {
  const id = Number(c.req.param('id'));
  if (!Number.isInteger(id) || id < 1 || id > 114) {
    return c.json({ success: false, error: 'Invalid surah id (must be 1-114)' }, 400);
  }
  const surah = await quranService.getSurah(id);
  if (!surah) return c.json({ success: false, error: 'Surah not found' }, 404);
  return c.json({ success: true, data: surah });
}