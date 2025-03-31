"use client"
import { Id } from "@core"
import Message from "@/model/Msg"
import { chat } from "@/functions/chat"
import { useState } from "react"
import useLocalStorage from "./useLocalStorage"

export default function useChat() {
	// Use our custom hook to handle chatId storage
	const chatIdStorage = useLocalStorage<string>("chatId", Id.generate())
	const messagesStorage = useLocalStorage<Message[]>("messages", [])

	const [isLoading, setIsLoading] = useState(false)

	const addMessage = async (content: string) => {
		try {
			setIsLoading(true)
			const newMessage: Message = {
				id: Id.generate(),
				author: "User",
				content,
				side: "right",
				icon: "👤",
				projectId: chatIdStorage.value,
				createdAt: new Date(),
				updatedAt: new Date(),
			}

			// Update messages with new user message
			const currentMessages = [...messagesStorage.value, newMessage]
			messagesStorage.setValue(currentMessages)

			const response = await chat(chatIdStorage.value, newMessage)
			if (!response) return

			const botMessage: Message = {
				id: Id.generate(),
				author: "Assistant",
				content: response,
				side: "left",
				icon: "👤",
				projectId: chatIdStorage.value,
				createdAt: new Date(),
				updatedAt: new Date(),
			}

			// Update messages with both user and bot messages
			messagesStorage.setValue([...currentMessages, botMessage])
		} catch (error) {
			console.error("Error adding message:", error)
		} finally {
			setIsLoading(false)
		}
	}

	return {
		chatId: chatIdStorage.value,
		messages: messagesStorage.value,
		isLoading,
		addMessage,
		clearMessages: messagesStorage.removeItem,
	}
}
