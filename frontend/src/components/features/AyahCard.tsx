'use client';
import { useSettings } from '@/context/SettingsContext';
import { ARABIC_FONT_OPTIONS } from '@/config/fonts';
import { cn } from '@/lib/utils';
import { audioManager } from '@/lib/audioManager';
import type { Ayah } from '@/types/quran.types';
import { Play, Pause, BookOpen, Bookmark, MoreHorizontal } from 'lucide-react';
import { useState, useEffect } from 'react';

interface AyahCardProps {
  ayah: Ayah;
  surahNumber: number;
}

export function AyahCard({ ayah, surahNumber }: AyahCardProps) {
  const { settings } = useSettings();
  const fontClass =
    ARABIC_FONT_OPTIONS.find((f) => f.key === settings.arabicFont)?.className ??
    'font-arabic-amiri';

  // Each ayah has a globally unique number (1–6236) — perfect audio key
  const audioKey = `ayah-${ayah.number}`;
  const audioUrl = `https://cdn.islamic.network/quran/audio/128/ar.alafasy/${ayah.number}.mp3`;

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Subscribe to global audio manager — auto-syncs play/pause state
    const unsub = audioManager.subscribe((playingKey) => {
      setIsPlaying(playingKey === audioKey);
    });
    // Sync on mount (e.g. navigating between surahs while audio plays)
    setIsPlaying(audioManager.getPlayingKey() === audioKey);
    return unsub;
  }, [audioKey]);

  const handleTogglePlay = () => {
    audioManager.toggle(audioKey, audioUrl);
  };

  return (
    <div className="flex border-b border-qm-border py-6 px-4 hover:bg-white/[0.02] transition-colors group">
      {/* Left Actions */}
      <div className="w-16 flex flex-col items-center gap-5 shrink-0 text-qm-textSecondary">
        <span className="text-sm font-medium text-brand mb-2">
          {surahNumber}:{ayah.numberInSurah}
        </span>

        <button
          onClick={handleTogglePlay}
          className={cn(
            'transition-colors',
            isPlaying ? 'text-brand' : 'hover:text-white'
          )}
          aria-label={isPlaying ? 'Pause recitation' : 'Play recitation'}
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </button>

        <button className="hover:text-white transition-colors" aria-label="Read">
          <BookOpen className="w-4 h-4" />
        </button>

        <button className="hover:text-white transition-colors" aria-label="Bookmark">
          <Bookmark className="w-4 h-4" />
        </button>

        <button className="hover:text-white transition-colors" aria-label="More options">
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 pl-4 flex flex-col">
        {/* Arabic */}
        <div className="mb-10 text-right">
          <p
            dir="rtl"
            lang="ar"
            className={cn('text-white leading-[2.5] antialiased', fontClass)}
            style={{ fontSize: `${settings.arabicFontSize}px` }}
          >
            {ayah.arabic}
            <span className="inline-flex items-center justify-center w-[30px] h-[30px] rounded-full border border-qm-border text-xs mr-3 relative top-[-4px] text-qm-textSecondary">
              {ayah.numberInSurah}
            </span>
          </p>
        </div>

        {/* Translation */}
        <div className="text-left mt-auto">
          <p className="text-[10px] text-[#7A7A7A] uppercase tracking-widest mb-3 font-medium">
            SAHEEH INTERNATIONAL
          </p>
          <p
            className="text-white leading-relaxed"
            style={{ fontSize: `${settings.translationFontSize}px` }}
          >
            {ayah.translation}
          </p>
        </div>
      </div>
    </div>
  );
}
