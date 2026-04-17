'use client';
import { createContext, useContext, useMemo, type ReactNode } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import type { ArabicFontKey } from '@/config/fonts';

export interface Settings {
  arabicFont: ArabicFontKey;
  arabicFontSize: number;
  translationFontSize: number;
  sidebarOpen: boolean;
}

interface SettingsContextValue {
  settings: Settings;
  setArabicFont: (font: ArabicFontKey) => void;
  setArabicFontSize: (size: number) => void;
  setTranslationFontSize: (size: number) => void;
  setSidebarOpen: (open: boolean) => void;
  toggleSidebar: () => void;
}

const DEFAULT_SETTINGS: Settings = {
  arabicFont: 'amiri',
  arabicFontSize: 32,
  translationFontSize: 16,
  sidebarOpen: false,
};

const SettingsContext = createContext<SettingsContextValue | null>(null);

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useLocalStorage<Settings>('quran-settings', DEFAULT_SETTINGS);

  const value = useMemo<SettingsContextValue>(() => ({
    settings,
    setArabicFont: (arabicFont) => setSettings((s) => ({ ...s, arabicFont })),
    setArabicFontSize: (arabicFontSize) => setSettings((s) => ({ ...s, arabicFontSize })),
    setTranslationFontSize: (translationFontSize) => setSettings((s) => ({ ...s, translationFontSize })),
    setSidebarOpen: (sidebarOpen) => setSettings((s) => ({ ...s, sidebarOpen })),
    toggleSidebar: () => setSettings((s) => ({ ...s, sidebarOpen: !s.sidebarOpen })),
  }), [settings, setSettings]);

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
}

export function useSettings(): SettingsContextValue {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error('useSettings must be used inside <SettingsProvider>');
  return ctx;
}