import useLocalStorage from "./useLocalStorage"
import { Id } from "@core"
import Message from "@/model/Msg"
import { chat } from "@/functions/chat"
import { useState } from "react"

export default function useChat() {
	const [chatId] = useLocalStorage<string>("chatId", Id.generate())
	const [messages, setMessages] = useLocalStorage<Message[]>("messages", [])
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
				projectId: chatId,
				createdAt: new Date(),
				updatedAt: new Date(),
			}
			setMessages((prevMessages) => [...prevMessages, newMessage])

			const response = await chat(chatId, newMessage)
			if (!response) return

			const botMessage: Message = {
				id: Id.generate(),
				author: "Assistent",
				content: response,
				side: "left",
				icon: "👤",
				projectId: chatId,
				createdAt: new Date(),
				updatedAt: new Date(),
			}

			setMessages((prevMessages) => [...prevMessages, botMessage])
		} catch (error) {
			console.error("Error adding message:", error)
		} finally {
			setIsLoading(false)
		}
	}

	const clearMessages = () => {
		setMessages([])
	}

	return { chatId, messages, isLoading, addMessage, clearMessages }
}
