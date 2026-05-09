'use client';

import { useState } from 'react';
import { useSettings } from '@/context/SettingsContext';
import { ChevronDown, ChevronUp, BookOpen, Type } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ARABIC_FONT_OPTIONS } from '@/config/fonts';

export function RightSidebar() {
  const { settings, setArabicFontSize, setTranslationFontSize, setSidebarOpen, setArabicFont } = useSettings();
  const [fontSettingsOpen, setFontSettingsOpen] = useState(true);

  return (
    <>
      {/* Mobile Backdrop */}
      {settings.sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 xl:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      <aside className={`
        ${settings.sidebarOpen ? 'fixed inset-y-0 right-0 z-50 flex' : 'hidden'} 
        xl:relative xl:flex w-[320px] bg-qm-panel border-l border-qm-border h-full flex-col shrink-0 transition-transform duration-300
      `}>
        <div className="p-4 border-b border-qm-border">
        <div className="flex bg-[#0B0B0B] rounded-full p-1">
          <button className="flex-1 py-1.5 px-3 rounded-full bg-qm-border text-white text-sm font-medium">Translation</button>
          <button className="flex-1 py-1.5 px-3 rounded-full text-qm-textSecondary hover:text-white text-sm font-medium transition-colors">Reading</button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-6">
        <div className="flex items-center justify-between text-qm-textSecondary hover:text-white cursor-pointer group">
          <div className="flex items-center gap-3">
            <BookOpen className="w-5 h-5" />
            <span className="text-sm font-medium">Reading Settings</span>
          </div>
          <ChevronDown className="w-4 h-4" />
        </div>

        <div className="space-y-4">
          <div 
            className="flex items-center justify-between cursor-pointer group"
            onClick={() => setFontSettingsOpen(!fontSettingsOpen)}
          >
            <div className="flex items-center gap-3">
              <Type className="w-5 h-5 text-brand" />
              <span className="text-sm font-medium text-brand">Font Settings</span>
            </div>
            {fontSettingsOpen ? (
              <ChevronUp className="w-4 h-4 text-brand" />
            ) : (
              <ChevronDown className="w-4 h-4 text-brand" />
            )}
          </div>

          {fontSettingsOpen && (
            <div className="space-y-6 pl-8">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-white">Arabic Font Size</span>
                  <span className="text-sm text-brand">{settings.arabicFontSize}</span>
                </div>
                <input 
                  type="range" 
                  min="20" 
                  max="56" 
                  value={settings.arabicFontSize}
                  onChange={(e) => setArabicFontSize(Number(e.target.value))}
                  className="w-full accent-brand"
                />
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-white">Translation Font Size</span>
                  <span className="text-sm text-brand">{settings.translationFontSize}</span>
                </div>
                <input 
                  type="range" 
                  min="12" 
                  max="28" 
                  value={settings.translationFontSize}
                  onChange={(e) => setTranslationFontSize(Number(e.target.value))}
                  className="w-full accent-brand"
                />
              </div>

              <div className="space-y-3">
                <span className="text-sm text-white block">Arabic Font Face</span>
                <button 
                  onClick={() => {
                    const currentIndex = ARABIC_FONT_OPTIONS.findIndex(f => f.key === settings.arabicFont);
                    const nextIndex = (currentIndex + 1) % ARABIC_FONT_OPTIONS.length;
                    setArabicFont(ARABIC_FONT_OPTIONS[nextIndex].key);
                  }}
                  className="w-full bg-[#0B0B0B] border border-qm-border rounded-md py-2.5 px-4 flex justify-between items-center text-sm text-white hover:border-qm-textSecondary transition-colors"
                >
                  <span>{ARABIC_FONT_OPTIONS.find(f => f.key === settings.arabicFont)?.label || 'Amiri'}</span>
                  <ChevronDown className="w-4 h-4 text-qm-textSecondary" />
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="mt-8 bg-[#0B0B0B] border border-qm-border rounded-xl p-5">
          <h4 className="text-white font-medium mb-2 leading-tight">Help spread the knowledge of Islam</h4>
          <p className="text-qm-textSecondary text-xs leading-relaxed mb-4">
            Your regular support helps us reach our religious brothers and sisters with the message of Islam. Join our mission and be part of the big change.
          </p>
          <Button className="w-full bg-brand hover:bg-brand-dark text-white border-0 py-2 rounded-lg text-sm font-medium">
            Support Us
          </Button>
        </div>
      </div>
    </aside>
    </>
  );
}
