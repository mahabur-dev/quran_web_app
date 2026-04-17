'use client';
import { useSettings } from '@/context/SettingsContext';
import { SettingsPanel } from '@/components/features/SettingsPanel';
import { cn } from '@/lib/utils';

export function Sidebar() {
  const { settings, setSidebarOpen } = useSettings();
  const open = settings.sidebarOpen;

  return (
    <>
    <div 
      aria-hidden 
      onClick={() => setSidebarOpen(false)}
      className={cn(
        'fixed inset-0 z-40 transition-opacity duration-500',
        // CHANGE: bg-black/10 (very light) instead of bg-black/40 or bg-black/60
        // REMOVE: backdrop-blur from here so it doesn't double-blur the background
        open ? 'bg-black/10 opacity-100' : 'pointer-events-none opacity-0'
      )} 
    />

      {/* 2. THE ASIDE: 
          Added a more pronounced glass effect (saturate) to make 
          the sidebar text pop without needing a solid background.
      */}
      <aside className={cn(
        'fixed top-0 right-0 z-50 h-full w-85 max-w-[85vw] transform transition-transform duration-500 ease-in-out',
        'bg-[#0b1222]/80 backdrop-blur-2xl backdrop-saturate-150 border-l border-white/10 shadow-2xl',
        open ? 'translate-x-0' : 'translate-x-full'
      )}>
        {/* Header - Sticky so it stays while scrolling settings */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-6 bg-[#0b1222]/40 backdrop-blur-md border-b border-white/5">
          <div>
            <h2 className="text-xl font-bold text-white tracking-tight">Settings</h2>
            <p className="text-[10px] text-teal-500 uppercase tracking-widest mt-0.5 font-semibold">Customization</p>
          </div>
          <button 
            onClick={() => setSidebarOpen(false)}
            className="group flex h-9 w-9 items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-all border border-white/10"
            aria-label="Close settings"
          >
            <span className="text-xl text-slate-400 group-hover:text-white transition-colors">×</span>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto h-[calc(100%-88px)] scrollbar-hide">
          <SettingsPanel />
        </div>
      </aside>
    </>
  );
}