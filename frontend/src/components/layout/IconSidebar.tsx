import Link from 'next/link';
import { BookOpen, Home, LayoutGrid, Send, Bookmark, Settings } from 'lucide-react';

export function IconSidebar() {
  return (
    <aside className="hidden xl:flex w-[80px] bg-qm-panel border-r border-qm-border h-full flex-col items-center py-6 shrink-0">
      <Link href="/" className="mb-10 w-10 h-10 bg-brand rounded-lg flex items-center justify-center shadow-lg shadow-brand/20">
        <BookOpen className="w-6 h-6 text-white" />
      </Link>

      <nav className="flex flex-col gap-6 w-full">
        {[
          { icon: Home, label: 'Home', active: true },
          { icon: LayoutGrid, label: 'Categories' },
          { icon: Send, label: 'Messages' },
          { icon: Bookmark, label: 'Bookmarks' },
          { icon: Settings, label: 'Settings' }
        ].map((item) => (
          <Link 
            key={item.label} 
            href="#" 
            className={`w-full flex justify-center py-3 relative ${item.active ? 'text-brand' : 'text-qm-textSecondary hover:text-white transition-colors'}`}
            title={item.label}
          >
            {item.active && <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand rounded-r-md" />}
            <item.icon className="w-5 h-5" />
          </Link>
        ))}
      </nav>
    </aside>
  );
}
