import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export const env = {
  PORT: Number(process.env.PORT ?? 3001),
  CORS_ORIGIN: process.env.CORS_ORIGIN ?? '*',
  QURAN_API_BASE: process.env.QURAN_API_BASE ?? 'https://api.alquran.cloud/v1',
  QURAN_TRANSLATION_EDITION: process.env.QURAN_TRANSLATION_EDITION ?? 'en.sahih',
} as const;