'use client';

import { useTranslations } from 'next-intl';
import LanguageSwitcher from './components/LanguageSwitcher';

export default function Home() {
  const t = useTranslations('home');
  
  return (
    <main className="p-4">
      <LanguageSwitcher />
      <h1>{t('title')}</h1>
      <p>{t('welcome')}</p>
    </main>
  );
} 