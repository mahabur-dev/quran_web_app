import { Hono } from 'hono';
import { getSurah, listSurahs } from '../controllers/surah.controller.js';
import { searchAyahs } from '../controllers/search.controller.js';

export const apiRoutes = new Hono();
apiRoutes.get('/health', (c) => c.json({ success: true, status: 'ok' }));
apiRoutes.get('/surahs', listSurahs);
apiRoutes.get('/surahs/:id', getSurah);
apiRoutes.get('/search', searchAyahs);