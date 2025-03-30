"use client"
import { IconReload } from "@tabler/icons-react"
import Container from "../shared/Container"
import useChat from "@/hooks/useChat"
import ChatContent from "./ChatContent"
import { useState } from "react"

export default function ChatWindow() {
	const { clearMessages, messages } = useChat()
	// Add a key to force re-render of ChatContent
	const [chatKey, setChatKey] = useState(0)

	const handleClearMessages = () => {
		console.log("Clear messages clicked")
		// Clear the messages first
		clearMessages()
		// Force a re-render of ChatContent by changing the key
		setChatKey(prevKey => prevKey + 1)
		
		// Force refresh localStorage to verify it's clear
		console.log("After clear - localStorage:", localStorage.getItem("messages"))
	}

	return (
		<Container className="flex flex-col bg-zinc-300 rounded-2xl text-back overflow-hidden">
			<div className="flex justify-between items-center p-4">
				<h2 className="text-xl font-bold">Chat</h2>
				<IconReload
					size={24}
					className="text-black cursor-pointer"
					onClick={handleClearMessages}
				/>
			</div>
			<div className="flex flex-col flex-1 overflow-y-auto">
				{/* Key forces a complete re-render when changed */}
				<ChatContent key={chatKey} />
			</div>
		</Container>
	)
}
