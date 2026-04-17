'use client';
import { Slider } from '@/components/ui/Slider';
import { useSettings } from '@/context/SettingsContext';
import { ARABIC_FONT_OPTIONS, type ArabicFontKey } from '@/config/fonts';
import { cn } from '@/lib/utils';

export function SettingsPanel() {
  const { settings, setArabicFont, setArabicFontSize, setTranslationFontSize } = useSettings();

  return (
    <div className="space-y-10">
      {/* Font Selection Section */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <div className="h-1 w-1 rounded-full bg-teal-500" />
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">Arabic Font</h3>
        </div>
        <div className="grid grid-cols-1 gap-3">
          {ARABIC_FONT_OPTIONS.map((opt) => (
            <FontOption 
              key={opt.key} 
              fontKey={opt.key} 
              label={opt.label}
              className={opt.className} 
              active={settings.arabicFont === opt.key} 
              onSelect={setArabicFont} 
            />
          ))}
        </div>
      </section>

      {/* Font Sizes Section */}
      <section>
        <div className="flex items-center gap-2 mb-6">
          <div className="h-1 w-1 rounded-full bg-teal-500" />
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">Typography Size</h3>
        </div>
        <div className="space-y-8 px-2">
          <Slider 
            label="Arabic Text" 
            min={20} max={56} 
            value={settings.arabicFontSize} 
            onChange={setArabicFontSize} 
            suffix="px"
          />
          <Slider 
            label="Translation" 
            min={12} max={28} 
            value={settings.translationFontSize} 
            onChange={setTranslationFontSize} 
            suffix="px"
          />
        </div>
      </section>
      
      {/* Small footer inside sidebar for extra polish */}
      <footer className="pt-6 border-t border-white/5 text-center">
        <p className="text-[10px] text-slate-600 italic">Settings are saved automatically</p>
      </footer>
    </div>
  );
}
// export function SettingsPanel() {
//   const { settings, setArabicFont, setArabicFontSize, setTranslationFontSize } = useSettings();
//   return (
//     <div className="space-y-6">
//       <section>
//         <h3 className="text-sm font-semibold text-slate-500 uppercase mb-3">Arabic Font</h3>
//         <div className="grid grid-cols-1 gap-2">
//           {ARABIC_FONT_OPTIONS.map((opt) => (
//             <FontOption key={opt.key} fontKey={opt.key} label={opt.label}
//               className={opt.className} active={settings.arabicFont === opt.key} onSelect={setArabicFont} />
//           ))}
//         </div>
//       </section>
//       <section>
//         <h3 className="text-sm font-semibold text-slate-500 uppercase mb-3">Font Sizes</h3>
//         <div className="space-y-5">
//           <Slider label="Arabic size" min={20} max={56} value={settings.arabicFontSize} onChange={setArabicFontSize} />
//           <Slider label="Translation size" min={12} max={28} value={settings.translationFontSize} onChange={setTranslationFontSize} />
//         </div>
//       </section>
//     </div>
//   );
// }

interface FontOptionProps {
  fontKey: ArabicFontKey; label: string; className: string;
  active: boolean; onSelect: (key: ArabicFontKey) => void;
}
function FontOption({ fontKey, label, className, active, onSelect }: FontOptionProps) {
  return (
    <button 
      type="button" 
      onClick={() => onSelect(fontKey)}
      className={cn(
        'flex items-center justify-between rounded-lg border px-4 py-3 text-left transition-all duration-200',
        active 
          ? 'border-teal-500 bg-teal-500/10 text-white shadow-[0_0_15px_rgba(20,184,166,0.1)]' 
          : 'border-white/5 bg-white/5 text-slate-400 hover:border-white/20 hover:bg-white/10'
      )}
    >
      <span className="text-sm font-medium tracking-wide">{label}</span>
      <span dir="rtl" className={cn('text-2xl', className)}>بِسْمِ ٱللَّٰهِ</span>
    </button>
  );
}