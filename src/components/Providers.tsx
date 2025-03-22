'use client'

import React, { PropsWithChildren } from 'react'
import { NextIntlClientProvider } from 'next-intl'
import { AbstractIntlMessages } from 'next-intl'
import { ThemeProvider } from 'next-themes'

type ProvidersProps = {
  locale: string
  messages: AbstractIntlMessages
}

export function Providers({ children, locale, messages }: PropsWithChildren<ProvidersProps>) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ThemeProvider 
        attribute="class"
        defaultTheme="light"
        enableSystem={false}
        forcedTheme={undefined}
        storageKey="theme-mode"
        themes={['light', 'dark']}
        value={{
          light: 'light',
          dark: 'dark'
        }}
      >
        {children}
      </ThemeProvider>
    </NextIntlClientProvider>
  )
} 