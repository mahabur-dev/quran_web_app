import type { Metadata } from 'next';
import { amiri, naskh, scheherazade } from '@/config/fonts';
import { SettingsProvider } from '@/context/SettingsContext';
import { IconSidebar } from '@/components/layout/IconSidebar';
import { Navbar } from '@/components/layout/Navbar';
import { RightSidebar } from '@/components/layout/RightSidebar';
import { LeftNavigation } from '@/components/layout/LeftNavigation';
import './globals.css';

export const metadata: Metadata = {
  title: 'Quran Mazid',
  description: 'Read, Study, and Learn The Quran',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${amiri.variable} ${scheherazade.variable} ${naskh.variable}`}>
      <body className="h-screen w-screen bg-qm-main text-white overflow-hidden flex font-sans antialiased">
        <SettingsProvider>
          {/* Far Left Icon Sidebar */}
          <IconSidebar />
          
          <div className="flex-1 flex flex-col h-full relative overflow-hidden">
            {/* Top Navbar */}
            <Navbar />
            
            <div className="flex-1 flex overflow-hidden">
              {/* Left Navigation Sidebar (Surah, Juz, Page) */}
              <LeftNavigation />
              
              {/* Main Content Area */}
              <main className="flex-1 overflow-y-auto custom-scrollbar relative">
                {children}
              </main>

              {/* Right Settings Sidebar */}
              <RightSidebar />
            </div>
          </div>
        </SettingsProvider>
      </body>
    </html>
  );
}