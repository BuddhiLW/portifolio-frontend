"use client"
import React from "react"
import MarkdownReadme from "@/components/shared/MarkdownReadme"

interface ChatMessageProps {
	content: string
	side: "left" | "right"
}

const ChatMessage: React.FC<ChatMessageProps> = ({ content, side }) => {
	return (
		<li
			className={`${
				side === "right" ? "chat-bubble-right" : "chat-bubble-left"
			} bg-white dark:bg-black text-black dark:text-zinc-950 rounded-md font-sans font-medium text-lg px-5 py-2`}
		>
			<MarkdownReadme markdown={content} />
		</li>
	)
}

export default ChatMessage
