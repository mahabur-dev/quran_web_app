import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import { apiRoutes } from './routes/index.js';
import { errorHandler } from './middleware/error.middleware.js';
import { env } from './config/index.js';

export const app = new Hono();

app.use('*', logger());
app.use('*', cors({
  origin: env.CORS_ORIGIN === '*' ? '*' : env.CORS_ORIGIN.split(','),
  allowMethods: ['GET', 'OPTIONS'],
}));

app.route('/api', apiRoutes);
app.get('/', (c) => c.json({ success: true, message: 'Quran API is running' }));
app.notFound((c) => c.json({ success: false, error: 'Route not found' }, 404));
app.onError(errorHandler);