import type { Context } from 'hono';
import { quranService } from '../services/quran.service.js';

export async function searchAyahs(c: Context) {
  const q = c.req.query('q')?.trim() ?? '';
  const limit = Math.min(Number(c.req.query('limit') ?? 50) || 50, 200);
  if (q.length < 2) {
    return c.json({ success: true, data: [], message: 'Query must be at least 2 characters' });
  }
  const hits = await quranService.searchByTranslation(q, limit);
  return c.json({ success: true, data: hits });
}