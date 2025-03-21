'use client'

import ButtonChat from "@/components/chat/ButtonChat"

export default function PagesLayout({ children }: { children: React.ReactNode }) {
	return (
		<main className="min-h-screen p-4">
			{children}
			<ButtonChat />
		</main>
	)
}
