"use client"
import Image from "next/image"
import Container from "./Container"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { LanguageToggle } from "@/components/LanguageToggle"
import Menu from "./Menu"
import ThemeToggle from "../ThemeToggle"

export default function Header() {
	const t = useTranslations()

	return (
		<header
			className="
			flex items-center w-full h-16 
			backdrop-blur-md transition-colors duration-300 
			bg-[var(--background)]/80
			border-b border-[var(--text-secondary)]/10
		"
		>
			<Container className="flex-1 flex justify-between items-center">
				<div className="flex items-center">
					<Link href="/" className="hidden sm:block">
						<Image src="/images/logo-mini.png" alt="logo" width={60} height={60} />
					</Link>
					<Menu />
				</div>
				<div className="flex items-center gap-4">
					<LanguageToggle />
					<ThemeToggle />
					<Link
						href="https://www.linkedin.com/in/pedro-g-branquinho/"
						target="_blank"
						className="bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 text-white rounded-full px-7 py-1 text-sm transition-colors duration-300"
					>
						{t("header.profile")}
					</Link>
				</div>
			</Container>
		</header>
	)
}
