'use client';
import { Slider } from '@/components/ui/Slider';
import { useSettings } from '@/context/SettingsContext';
import { ARABIC_FONT_OPTIONS, type ArabicFontKey } from '@/config/fonts';
import { cn } from '@/lib/utils';

export function SettingsPanel() {
  const { settings, setArabicFont, setArabicFontSize, setTranslationFontSize } = useSettings();
  return (
    <div className="space-y-6">
      <section>
        <h3 className="text-sm font-semibold text-slate-500 uppercase mb-3">Arabic Font</h3>
        <div className="grid grid-cols-1 gap-2">
          {ARABIC_FONT_OPTIONS.map((opt) => (
            <FontOption key={opt.key} fontKey={opt.key} label={opt.label}
              className={opt.className} active={settings.arabicFont === opt.key} onSelect={setArabicFont} />
          ))}
        </div>
      </section>
      <section>
        <h3 className="text-sm font-semibold text-slate-500 uppercase mb-3">Font Sizes</h3>
        <div className="space-y-5">
          <Slider label="Arabic size" min={20} max={56} value={settings.arabicFontSize} onChange={setArabicFontSize} />
          <Slider label="Translation size" min={12} max={28} value={settings.translationFontSize} onChange={setTranslationFontSize} />
        </div>
      </section>
    </div>
  );
}

interface FontOptionProps {
  fontKey: ArabicFontKey; label: string; className: string;
  active: boolean; onSelect: (key: ArabicFontKey) => void;
}

function FontOption({ fontKey, label, className, active, onSelect }: FontOptionProps) {
  return (
    <button type="button" onClick={() => onSelect(fontKey)}
      className={cn('flex items-center justify-between rounded-md border px-3 py-2 text-left transition-colors',
        active ? 'border-brand bg-brand/5' : 'border-slate-200 hover:border-slate-300')}>
      <span className="text-sm font-medium">{label}</span>
      <span dir="rtl" className={cn('text-xl', className)}>بِسْمِ ٱللَّٰهِ</span>
    </button>
  );
}