import type { Context, ErrorHandler } from 'hono';

export const errorHandler: ErrorHandler = (err, c: Context) => {
  console.error('[error]', err);
  return c.json(
    { success: false, error: err instanceof Error ? err.message : 'Internal Server Error' },
    500,
  );
};