import { Montserrat } from "next/font/google";
import { Providers } from '@/components/Providers';
import { setRequestLocale } from 'next-intl/server';

const font = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = await Promise.resolve(params).then(p => p.locale);
  setRequestLocale(locale);

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch {
    messages = {};
  }

  return (
    <html lang={locale}>
      <body className={`${font.className} antialiased`}>
        <Providers locale={locale} messages={messages}>
          {children}
        </Providers>
      </body>
    </html>
  );
} 