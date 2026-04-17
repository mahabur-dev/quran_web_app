'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { useSettings } from '@/context/SettingsContext';

export function Navbar() {
  const { toggleSidebar } = useSettings();
  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-5xl flex items-center justify-between px-4 h-14">
        <Link href="/" className="font-bold text-lg text-brand">Quran</Link>
        <nav className="flex items-center gap-2">
          <Link href="/search"><Button variant="ghost" size="sm">Search</Button></Link>
          <Button variant="secondary" size="sm" onClick={toggleSidebar}>Settings</Button>
        </nav>
      </div>
    </header>
  );
}