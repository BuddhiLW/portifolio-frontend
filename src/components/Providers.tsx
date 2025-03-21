'use client'

import React, { PropsWithChildren } from 'react'
import { NextIntlClientProvider } from 'next-intl'
import { AbstractIntlMessages } from 'next-intl'

type ProvidersProps = {
  locale: string
  messages: AbstractIntlMessages
}

export function Providers({ children, locale, messages }: PropsWithChildren<ProvidersProps>) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  )
} 