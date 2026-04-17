'use client';
import { useSettings } from '@/context/SettingsContext';
import { SettingsPanel } from '@/components/features/SettingsPanel';
import { cn } from '@/lib/utils';

export function Sidebar() {
  const { settings, setSidebarOpen } = useSettings();
  const open = settings.sidebarOpen;
  return (
    <>
      <div aria-hidden onClick={() => setSidebarOpen(false)}
        className={cn('fixed inset-0 z-40 bg-black/40 transition-opacity md:hidden',
          open ? 'opacity-100' : 'pointer-events-none opacity-0')} />
      <aside className={cn(
        'fixed top-0 right-0 z-50 h-full w-80 max-w-[85vw] bg-white shadow-xl border-l border-slate-200 transform transition-transform',
        open ? 'translate-x-0' : 'translate-x-full')}>
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="font-semibold">Settings</h2>
          <button onClick={() => setSidebarOpen(false)}
            className="text-slate-500 hover:text-slate-900 text-xl leading-none" aria-label="Close settings">×</button>
        </div>
        <div className="p-4 overflow-y-auto h-[calc(100%-56px)]"><SettingsPanel /></div>
      </aside>
    </>
  );
}