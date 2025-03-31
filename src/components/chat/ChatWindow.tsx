"use client"
import { IconArrowAutofitHeightFilled, IconReload } from "@tabler/icons-react"
import Container from "../shared/Container"
import useChat from "@/hooks/useChat"
import ChatContent from "./ChatContent"
import { useState, useEffect } from "react"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { usePathname } from "next/navigation"

export default function ChatWindow() {
	const { clearMessages, forceUpdate } = useChat()
	const [chatKey, setChatKey] = useState(0)
	const t = useTranslations("ChatWindow")
	const pathname = usePathname()
	const isChatPage = pathname.endsWith("/chat") // Determine if on chat page

	// Update chatKey when forceUpdate changes to force re-render
	useEffect(() => {
		setChatKey(prev => prev + 1)
	}, [forceUpdate])

	const handleClearMessages = () => {
		console.log("Clear messages clicked")
		// Clear the messages first
		clearMessages()
		// ChatContent will rerender automatically because of the custom event system
		
		console.log("After clear - localStorage:", localStorage.getItem("messages"))
	}

	return (
		<Container
			className="
        flex flex-col bg-zinc-300 rounded-2xl text-back overflow-hidden
        min-h-[80vh] min-w-[40vw] max-w-[100vw]
        "
		>
			<div className="flex justify-between items-center p-4">
				<h2 className="text-3xl font-bold dark:text-zinc-950">{t("title")}</h2>
				<div className="flex gap-7">
					<Link href="/chat">
						<IconArrowAutofitHeightFilled
							size={24}
							className="text-black cursor-pointer"
						/>
					</Link>

					<IconReload
						size={24}
						className="text-black cursor-pointer"
						onClick={handleClearMessages}
					/>
				</div>
			</div>
			<div className="flex flex-col flex-1 overflow-y-auto">
				{/* Key forces a complete re-render when changed */}
				<ChatContent key={chatKey} />
			</div>
		</Container>
	)
}
