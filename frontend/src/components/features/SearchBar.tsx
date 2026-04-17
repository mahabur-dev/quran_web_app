'use client';
import { Input } from '@/components/ui/Input';

interface SearchBarProps { value: string; onChange: (v: string) => void; placeholder?: string; }

export function SearchBar({ value, onChange, placeholder = 'Search translation (e.g. "mercy")' }: SearchBarProps) {
  return (
    <Input type="search" value={value} onChange={(e) => onChange(e.target.value)}
           placeholder={placeholder} aria-label="Search ayahs" />
  );
}