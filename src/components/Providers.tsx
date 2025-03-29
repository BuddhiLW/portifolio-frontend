"use client"

import { ThemeProvider } from "next-themes"
import { NextIntlClientProvider } from "next-intl"
import { AbstractIntlMessages } from "next-intl"
import { ReactNode, useEffect, useState } from "react"

interface ProvidersProps {
	locale: string
	messages: AbstractIntlMessages
	children: ReactNode
}

export function Providers({ children, locale, messages }: ProvidersProps) {
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return null
	}

	return (
		<NextIntlClientProvider locale={locale} messages={messages}>
			<ThemeProvider
				attribute="class"
				defaultTheme="system"
				enableSystem
				themes={["light", "dark"]}
			>
				{children}
			</ThemeProvider>
		</NextIntlClientProvider>
	)
}
