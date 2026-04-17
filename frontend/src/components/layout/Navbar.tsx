'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { useSettings } from '@/context/SettingsContext';
import { Book } from 'lucide-react';

export function Navbar() {
  const { toggleSidebar } = useSettings();
  return (
    // <header className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-slate-200">
    //   <div className="mx-auto max-w-5xl flex items-center justify-between px-6 h-20">
    //     {/* <Book className="w-6 h-6 text-primary" />
    //     <Link href="/" className="font-bold text-lg text-brand">
    //     Al-Quran</Link> */}
    //      <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
    //       <Book className="w-6 h-6 text-primary" />
    //       <h1 className="text-xl font-bold text-foreground">Al-Quran</h1>
    //     </Link>
    //     <nav className="flex items-center gap-2">
    //       <Link href="/search"><Button variant="ghost" className="text-foreground font-bold" size="sm">Search</Button></Link>
    //       <Button variant="secondary"  className="text-foreground font-bold"size="sm" onClick={toggleSidebar}>Settings</Button>
    //     </nav>
    //   </div>
    // </header>
//     <header className="sticky top-0 z-30" style={{ background: "#1A4436" }}>
//   <div className="mx-auto max-w-5xl flex items-center justify-between px-8 h-[72px]">
//     <Link href="/" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
//       <Book className="w-5 h-5" style={{ color: "#A8D5B5" }} />
//       <h1 className="text-lg font-medium text-white tracking-wide">Al-Quran</h1>
//     </Link>
//     <nav className="flex items-center gap-2">
//       <Link href="/search">
//         <Button variant="ghost" size="sm"
//           className="font-medium hover:bg-white/10"
//           style={{ color: "rgba(255,255,255,0.70)" }}>
//           Search
//         </Button>
//       </Link>
//       <Button size="sm" onClick={toggleSidebar}
//         style={{ background: "#A8D5B5", color: "#1A4436" }}
//         className="font-medium hover:opacity-90 border-0">
//         Settings
//       </Button>
//     </nav>
//   </div>
// </header>
<header className="sticky top-0 z-30 bg-slate-900">
  <div className="mx-auto max-w-5xl flex items-center justify-between px-8 h-[72px]">
    <Link href="/" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
      <Book className="w-5 h-5" style={{ color: "#C8A96E" }} />
      <h1 className="text-lg font-medium text-white tracking-wide">Al-Quran</h1>
    </Link>
    <nav className="flex items-center gap-2">
      <Link href="/search">
        <Button variant="ghost" size="sm"
          className="text-white/70 hover:text-white hover:bg-white/10 font-medium">
          Search
        </Button>
      </Link>
      <Button size="sm" onClick={toggleSidebar}
        style={{ background: "#C8A96E", color: "#1B2B4B" }}
        className="font-medium hover:opacity-90">
        Settings
      </Button>
    </nav>
  </div>
</header>
  );
}