"use client"
import Image from "next/image"
import Container from "./Container"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { LanguageToggle } from "@/components/LanguageToggle"
import Menu from "./Menu"

export default function Header() {
	const t = useTranslations()

	return (
		<header className="flex items-center h-16">
			<Container className="flex-1 flex justify-between items-center">
				<div className="flex items-center">
					<Link href="/" className="higgen sm:block">
						<Image src="/images/logo.png" alt="logo" width={60} height={60} />
					</Link>
					<Menu />
				</div>
				<div className="flex items-center gap-4">
					<LanguageToggle />
					<Link
						href="https://www.linkedin.com/in/pedro-g-branquinho/"
						target="_blank"
						className="bg-red-500 rounded-full px-7 py-1 text-sm"
					>
						{t("header.profile")}
					</Link>
				</div>
			</Container>
		</header>
	)
}
