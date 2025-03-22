"use client"

import { useTranslations } from "next-intl"
import Header from "@/components/shared/Header"

export default function Home() {
	const t = useTranslations()

	return (
		<>
			<Header />

			<div className="flex flex-col items-center gap-4 text-foreground dark:text-white">
				<div>{t("home.title")}</div>
				<div>{t("home.welcome")}</div>
			</div>
		</>
	)
}