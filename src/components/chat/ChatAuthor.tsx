"use client"
import React from "react"

interface ChatAuthorProps {
	author: string
	side: "left" | "right"
}

const ChatAuthor: React.FC<ChatAuthorProps> = ({ author, side }) => {
	return (
		<div
			className={`dark:text-zinc-800 font-bold ${
				side === "right" ? "bg-green-400" : "bg-red-400"
			} px-5 py-2 rounded-md flex items-center justify-center ${
				side === "right" ? "self-end" : "self-start"
			}`}
		>
			{author}
		</div>
	)
}

export default ChatAuthor
