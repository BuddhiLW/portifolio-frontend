"use client"

import { usePathname } from "next/navigation"
import ButtonChat from "@/components/chat/ButtonChat"
import Container from "@/components/shared/Container"

export default function PagesLayout({ children }: { children: React.ReactNode }) {
	const pathname = usePathname()
	console.log(pathname)

	// Check if the pathname ends with "/chat"
	const isChatPage = pathname.endsWith("/chat")

	return (
		<main className="min-h-screen">
			{children}
			{!isChatPage && (
				<Container className="flex justify-end">
					<ButtonChat />
				</Container>
			)}
		</main>
	)
}
