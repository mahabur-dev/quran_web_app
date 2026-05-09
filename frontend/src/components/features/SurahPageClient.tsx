'use client';
import { useEffect } from 'react';
import { audioManager } from '@/lib/audioManager';

export function SurahPageClient({ surahNumber }: { surahNumber: number }) {
  useEffect(() => {
   
    audioManager.stop();
  }, [surahNumber]);

  return null;
}
