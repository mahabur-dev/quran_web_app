// import { forwardRef, type InputHTMLAttributes } from 'react';
// import { cn } from '@/lib/utils';

// export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
//   function Input({ className, ...props }, ref) {
//     return (
//       <input
//         ref={ref}
//         className={cn(
//           'w-full h-10 rounded-md border border-slate-300 bg-white px-3 text-sm placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand',
//           className,
//         )}
//         {...props}
//       />
//     );
//   },
// );

import { forwardRef, type InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  function Input({ className, ...props }, ref) {
    return (
      <input
        ref={ref}
        className={cn(
          // Layout & Sizing
          'flex h-12 w-full rounded-lg px-4 py-2 text-base transition-all duration-200',
          
          // Background & Border
          // Using a subtle white opacity (white/10) allows the dark background to bleed through
          'bg-white/5 border border-white/10 text-slate-100',
          
          // Placeholder Styling
          'placeholder:text-slate-500',
          
          // Interaction States
          'focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 focus:bg-white/10',
          
          // Disabled State
          'disabled:cursor-not-allowed disabled:opacity-50',
          
          className,
        )}
        {...props}
      />
    );
  },
);