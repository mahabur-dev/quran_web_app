'use client';

import Link from 'next/link';
import { Search, Settings, Heart, Menu } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useSettings } from '@/context/SettingsContext';
<<<<<<< HEAD
=======
import { Book, Search, Settings2 } from 'lucide-react';
>>>>>>> b1f8d80386eb3c195666561130d9144b6030344e

export function Navbar() {
  const { toggleSidebar, toggleLeftSidebar } = useSettings();

  return (
<<<<<<< HEAD
    <header className="flex items-center justify-between px-4 sm:px-6 h-[72px] bg-qm-panel border-b border-qm-border shrink-0">
      <div className="flex items-center gap-4">
        <button onClick={toggleLeftSidebar} className="md:hidden text-qm-textSecondary hover:text-white transition-colors">
          <Menu className="w-6 h-6" />
        </button>
        <div className="flex flex-col justify-center">
          <h1 className="text-xl font-bold text-white tracking-wide">Quran Mazid</h1>
          <p className="text-[10px] text-qm-textSecondary uppercase tracking-widest hidden sm:block">Read, Study, and Learn The Quran</p>
        </div>
      </div>
      
      <div className="flex items-center gap-5">
        <Link href="/search" className="text-qm-textSecondary hover:text-white transition-colors">
          <Search className="w-5 h-5" />
        </Link>
        <button className="text-qm-textSecondary hover:text-white transition-colors xl:hidden" onClick={toggleSidebar}>
          <Settings className="w-5 h-5" />
        </button>
        <Button className="bg-brand hover:bg-brand-dark text-white rounded-full px-5 py-2 flex items-center gap-2 h-auto text-sm font-medium border-0">
          Support Us <Heart className="w-4 h-4 fill-white" />
        </Button>
=======
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

>>>>>>> b1f8d80386eb3c195666561130d9144b6030344e
      </div>
    </header>
  );
}