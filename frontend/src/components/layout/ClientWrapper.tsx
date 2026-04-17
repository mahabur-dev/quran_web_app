'use client';

import { useSettings } from '@/context/SettingsContext';
import { cn } from '@/lib/utils';

// Inside ClientWrapper.tsx
export function ClientWrapper({ children }: { children: React.ReactNode }) {
  const { settings } = useSettings();
  const open = settings.sidebarOpen;

  return (
    <main
      className={cn(
        "mx-auto max-w-5xl px-4 py-6 transition-all duration-500 ease-in-out",
        open 
          ? "brightness-[0.8] scale-[0.98] blur-[1px] pointer-events-none" 
          : "brightness-100 scale-100 blur-0"
      )}
    >
      {children}
    </main>
  );
}