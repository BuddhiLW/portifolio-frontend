import { Montserrat } from "next/font/google"
import { Providers } from "@/components/Providers"
import { setRequestLocale } from "next-intl/server"

const font = Montserrat({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
})

export default async function LocaleLayout({
	children,
	params,
}: {
	children: React.ReactNode
	params: Promise<{ locale: string }> | undefined
}) {
	const resolvedParams = (await Promise.resolve(params)) as { locale: string }
	const { locale } = resolvedParams
	setRequestLocale(locale)

	let messages
	try {
		messages = (await import(`../../messages/${locale}.json`)).default
	} catch (error) {
		console.error("Failed to load messages:", error)
		messages = {}
	}

	return (
		<html lang={locale} suppressHydrationWarning>
			<body className={font.className}>
				<Providers locale={locale} messages={messages}>
					{children}
				</Providers>
			</body>
		</html>
	)
}
