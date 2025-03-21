'use client';

import { Link } from '@/i18n/navigation';

export default function LanguageSwitcher() {
  return (
    <div className="mt-4 flex gap-4">
      <Link 
        href="/" 
        locale="en" 
        className="hover:underline"
      >
        English
      </Link>
      <Link 
        href="/" 
        locale="pt-BR" 
        className="hover:underline"
      >
        Português
      </Link>
    </div>
  );
} 