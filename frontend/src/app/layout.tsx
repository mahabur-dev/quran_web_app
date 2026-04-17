import type { Metadata } from 'next';
import { amiri, naskh, scheherazade } from '@/config/fonts';
import { SettingsProvider } from '@/context/SettingsContext';
import { Navbar } from '@/components/layout/Navbar';
import './globals.css';
import { Sidebar } from '@/components/features/Sidebar';

export const metadata: Metadata = {
  title: 'Al-Quran',
  description: 'Browse all 114 surahs with translation, search ayahs, and customize fonts.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${amiri.variable} ${scheherazade.variable} ${naskh.variable}`}>
      <body className="min-h-screen">
        <SettingsProvider>
          <Navbar />
          <main className="mx-auto max-w-5xl px-4 py-6">{children}</main>
          <Sidebar />
        </SettingsProvider>
      </body>
    </html>
  );
}