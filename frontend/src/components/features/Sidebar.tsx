'use client';
import { useSettings } from '@/context/SettingsContext';
import { SettingsPanel } from '@/components/features/SettingsPanel';
import { cn } from '@/lib/utils';

export function Sidebar() {
  const { settings, setSidebarOpen } = useSettings();
  const open = settings.sidebarOpen;

  return (
    <>
      {/* Invisible click-catcher: no dimming, content keeps its original
          color. Only captures outside-clicks to close the sidebar. */}
      <div
        aria-hidden
        onClick={() => setSidebarOpen(false)}
        className={cn(
          'fixed inset-0 z-40',
          open ? 'pointer-events-auto' : 'pointer-events-none'
        )}
      />

      {/* Sidebar drawer — solid enough for crisp text, with a soft teal edge
          accent for a polished, eye-catching entry. */}
      <aside
        role="dialog"
        aria-label="Settings"
        aria-hidden={!open}
        className={cn(
          'fixed top-0 right-0 z-50 h-full w-85 max-w-[85vw]',
          'bg-[#0b1222] border-l border-white/10 shadow-[-20px_0_60px_-15px_rgba(0,0,0,0.6)]',
          'transform transition-transform duration-500 ease-in-out will-change-transform',
          open ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Subtle vertical accent line on the inner edge */}
        <div
          aria-hidden
          className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-teal-500/40 to-transparent"
        />

        {/* Header - sticky so it stays while scrolling settings */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-6 bg-[#0b1222] border-b border-white/5">
          <div>
            <h2 className="text-xl font-bold text-white tracking-tight">Settings</h2>
            <p className="text-[10px] text-teal-500 uppercase tracking-widest mt-0.5 font-semibold">
              Customization
            </p>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="group flex h-9 w-9 items-center justify-center rounded-full bg-white/5 hover:bg-white/10 active:bg-white/15 transition-all border border-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/60"
            aria-label="Close settings"
          >
            <span className="text-xl leading-none text-slate-400 group-hover:text-white transition-colors">
              ×
            </span>
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
