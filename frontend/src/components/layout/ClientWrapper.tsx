'use client';

import { useSettings } from '@/context/SettingsContext';
import { cn } from '@/lib/utils';

export function ClientWrapper({ children }: { children: React.ReactNode }) {
  const { settings } = useSettings();
  const open = settings.sidebarOpen;

  return (
    <main
      aria-hidden={open}
      className={cn(
        'mx-auto max-w-5xl px-4 py-6 transition-opacity duration-300 ease-in-out',
        open && 'pointer-events-none select-none'
      )}
    >
      {children}
    </main>
  );
}
