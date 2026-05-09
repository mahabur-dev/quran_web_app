'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSettings } from '@/context/SettingsContext';
import type { SurahSummary } from '@/types/quran.types';

export function LeftNavigationClient({ surahs }: { surahs: SurahSummary[] }) {
  const [search, setSearch] = useState('');
  const pathname = usePathname();
  const { settings, setLeftSidebarOpen } = useSettings();

  const filteredSurahs = surahs.filter(s => 
    s.englishName.toLowerCase().includes(search.toLowerCase()) || 
    s.englishNameTranslation.toLowerCase().includes(search.toLowerCase()) ||
    s.name.includes(search)
  );

  return (
    <>
      {/* Mobile Backdrop */}
      {settings.leftSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setLeftSidebarOpen(false)}
        />
      )}
      <aside className={`
        ${settings.leftSidebarOpen ? 'fixed inset-y-0 left-0 z-50 flex' : 'hidden'}
        md:relative md:flex w-80 flex-col bg-qm-panel border-r border-qm-border h-full shrink-0 transition-transform duration-300
      `}>
        <div className="p-4 border-b border-qm-border">
        <div className="flex bg-[#0B0B0B] rounded-full p-1 mb-4">
          <button className="flex-1 py-1.5 px-3 rounded-full bg-qm-border text-white text-sm font-medium">Surah</button>
          <button className="flex-1 py-1.5 px-3 rounded-full text-qm-textSecondary hover:text-white text-sm font-medium transition-colors">Juz</button>
          <button className="flex-1 py-1.5 px-3 rounded-full text-qm-textSecondary hover:text-white text-sm font-medium transition-colors">Page</button>
        </div>
        
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-qm-textSecondary" />
          <input 
            type="text" 
            placeholder="Search Surah" 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#0B0B0B] border border-qm-border rounded-full py-2 pl-9 pr-4 text-sm text-white placeholder-qm-textSecondary focus:outline-none focus:border-brand transition-colors"
          />
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto custom-scrollbar p-2 space-y-1">
        {filteredSurahs.map((surah) => {
          const isActive = pathname === `/surah/${surah.number}`;
          return (
              <Link 
              key={surah.number} 
              href={`/surah/${surah.number}`}
              onClick={() => setLeftSidebarOpen(false)}
              className={`flex items-center gap-3 p-3 rounded-xl transition-all border group cursor-pointer ${
                isActive 
                ? 'bg-qm-activeBg border-brand' 
                : 'bg-transparent border-transparent hover:bg-white/5'
              }`}
            >
              <div className={`w-10 h-10 flex items-center justify-center transition-colors ${
                isActive 
                ? 'bg-brand rounded-md relative rotate-45' 
                : 'bg-qm-border/50 rounded-lg group-hover:bg-qm-border'
              }`}>
                <span className={`text-xs font-semibold text-white ${isActive ? '-rotate-45' : ''}`}>{surah.number}</span>
              </div>
              <div className="flex-1">
                <h3 className={`font-medium text-sm ${isActive ? 'text-white' : 'text-qm-textSecondary group-hover:text-white transition-colors'}`}>{surah.englishName}</h3>
                <p className={`text-xs ${isActive ? 'text-white/70' : 'text-qm-textSecondary/70'}`}>{surah.englishNameTranslation}</p>
              </div>
              <div className="text-right">
                <span className={`font-arabic-amiri text-lg ${isActive ? 'text-white' : 'text-white/80'}`}>{surah.name}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </aside>
    </>
  );
}
