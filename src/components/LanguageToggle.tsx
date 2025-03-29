"use client"

import { useLocale } from "next-intl"
import { usePathname, useRouter } from "next/navigation"

export function LanguageToggle() {
	const locale = useLocale()
	const router = useRouter()
	const pathname = usePathname()

	const toggleLocale = () => {
		const newLocale = locale === "en" ? "pt-BR" : "en"
		const newPath = pathname.replace(`/${locale}`, `/${newLocale}`)
		router.push(newPath)
	}

	return (
		<button
			onClick={toggleLocale}
			className="text-xl hover:scale-110 transition-transform"
			title={locale === "en" ? "Mudar para Português" : "Change to English"}
		>
			{locale === "en" ? "🇺🇸 -> 🇧🇷" : "🇧🇷 -> 🇺🇸"}
		</button>
	)
}
