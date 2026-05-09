'use client';
import { useSettings } from '@/context/SettingsContext';
import { ARABIC_FONT_OPTIONS } from '@/config/fonts';
import { cn } from '@/lib/utils';
import type { Ayah } from '@/types/quran.types';
import { Play, Pause, BookOpen, Bookmark, MoreHorizontal } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export function AyahCard({ ayah, surahNumber }: { ayah: Ayah; surahNumber: number }) {
  const { settings } = useSettings();
  const fontClass = ARABIC_FONT_OPTIONS.find((f) => f.key === settings.arabicFont)?.className ?? 'font-arabic-amiri';
  
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(`https://cdn.islamic.network/quran/audio/128/ar.alafasy/${ayah.number}.mp3`);
    audioRef.current.onended = () => setIsPlaying(false);
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [ayah.number]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      audioRef.current?.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="flex border-b border-qm-border py-6 px-4 hover:bg-white/[0.02] transition-colors group">
      {/* Left Actions */}
      <div className="w-16 flex flex-col items-center gap-5 shrink-0 text-qm-textSecondary">
        <span className="text-sm font-medium text-brand mb-2">{surahNumber}:{ayah.numberInSurah}</span>
        <button onClick={togglePlay} className={`${isPlaying ? 'text-brand' : 'hover:text-white'} transition-colors`} aria-label="Play">
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </button>
        <button className="hover:text-white transition-colors" aria-label="Read">
          <BookOpen className="w-4 h-4" />
        </button>
        <button className="hover:text-white transition-colors" aria-label="Bookmark">
          <Bookmark className="w-4 h-4" />
        </button>
        <button className="hover:text-white transition-colors" aria-label="More">
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
            className={cn(
              'text-white leading-[2.5] antialiased',
              fontClass
            )}
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
          <p className="text-[10px] text-[#7A7A7A] uppercase tracking-widest mb-3 font-medium">SAHEEH INTERNATIONAL</p>
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