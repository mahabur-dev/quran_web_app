'use client';

import Link from 'next/link';
import { Search, Settings, Heart, Menu } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useSettings } from '@/context/SettingsContext';

export function Navbar() {
  const { toggleSidebar, toggleLeftSidebar } = useSettings();

  return (
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
      </div>
    </header>
  );
}