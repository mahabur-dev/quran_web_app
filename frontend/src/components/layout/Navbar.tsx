'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { useSettings } from '@/context/SettingsContext';
import { Book, Search, Settings2 } from 'lucide-react';

export function Navbar() {
  const { toggleSidebar } = useSettings();
  return (
    <header className="sticky top-0 z-30 border-b border-[#C8A96E]/20"
      style={{ background: 'linear-gradient(90deg, #0F172A 0%, #1E293B 100%)' }}>
      
      {/* Gold shimmer line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(200,169,110,0.4), transparent)' }} />

      <div className="mx-auto max-w-5xl flex items-center justify-between px-8 h-[68px]">
        
      <Link href="/" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
        <div className="w-[34px] h-[34px] rounded-lg flex items-center justify-center"
          style={{ background: 'rgba(200,169,110,0.12)', border: '1px solid rgba(200,169,110,0.3)' }}>
          <img src="/icon.svg" alt="Quran icon" className="w-5 h-5" />
        </div>
        <span className="text-[17px] font-medium text-white tracking-wide">Al-Quran</span>
      </Link>

        <nav className="flex items-center gap-2">
          <Link href="/search">
            <Button variant="ghost" size="sm"
              className="flex items-center gap-1.5 text-[#C8A96E] font-medium text-sm"
              style={{
                border: '1px solid rgba(200,169,110,0.25)',
                background: 'rgba(200,169,110,0.07)',
                borderRadius: '8px',
                padding: '7px 14px'
              }}>
              <Search className="w-3.5 h-3.5" />
              Search
            </Button>
          </Link>

          <Button size="sm" onClick={toggleSidebar}
            className="flex items-center gap-1.5 font-semibold text-sm"
            style={{
              background: '#C8A96E',
              color: '#1B2B4B',
              borderRadius: '8px',
              padding: '7px 16px',
              border: 'none'
            }}>
            <Settings2 className="w-3.5 h-3.5" />
            Settings
          </Button>
        </nav>

      </div>
    </header>
  );
}