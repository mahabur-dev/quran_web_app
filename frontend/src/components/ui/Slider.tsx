'use client';
import type { ChangeEvent } from 'react';
import { cn } from '@/lib/utils';

interface SliderProps {
  label: string; min: number; max: number; step?: number;
  value: number; onChange: (v: number) => void; suffix?: string; className?: string;
}

export function Slider({ label, min, max, step = 1, value, onChange, suffix = 'px', className }: SliderProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => onChange(Number(e.target.value));
  return (
    <div className={cn('space-y-2', className)}>
      <div className="flex justify-between text-sm text-slate-700">
        <span>{label}</span>
        <span className="font-medium">{value}{suffix}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value}
             onChange={handleChange} className="w-full accent-brand" />
    </div>
  );
}