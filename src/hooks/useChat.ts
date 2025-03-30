import { Id } from "@core"
import Message from "@/model/Msg"
import { chat } from "@/functions/chat"
import { useState, useEffect } from "react"

// Don't use the useLocalStorage hook - handle localStorage directly
export default function useChat() {
	// Generate a chatId or get from localStorage
	const [chatId, setChatId] = useState<string>(() => {
		if (typeof window === 'undefined') return Id.generate()
		const storedChatId = localStorage.getItem("chatId")
		return storedChatId ? JSON.parse(storedChatId) : Id.generate()
	})
	
	// Get messages from localStorage or use empty array
	const [messages, setMessagesState] = useState<Message[]>(() => {
		if (typeof window === 'undefined') return []
		const storedMessages = localStorage.getItem("messages")
		return storedMessages ? JSON.parse(storedMessages) : []
	})
	
	const [isLoading, setIsLoading] = useState(false)
	
	// Save chatId to localStorage whenever it changes
	useEffect(() => {
		if (typeof window !== 'undefined') {
			localStorage.setItem("chatId", JSON.stringify(chatId))
		}
	}, [chatId])
	
	// Custom function to update messages state AND localStorage
	const setMessages = (messagesOrFn: Message[] | ((prev: Message[]) => Message[])) => {
		// Update state
		setMessagesState(prev => {
			const newMessages = messagesOrFn instanceof Function 
				? messagesOrFn(prev) 
				: messagesOrFn
				
			// Update localStorage
			if (typeof window !== 'undefined') {
				if (newMessages.length === 0) {
					localStorage.removeItem("messages")
				} else {
					localStorage.setItem("messages", JSON.stringify(newMessages))
				}
			}
			
			return newMessages
		})
	}

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
			setMessages([...messages, newMessage])

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

			setMessages([...messages, newMessage, botMessage])
		} catch (error) {
			console.error("Error adding message:", error)
		} finally {
			setIsLoading(false)
		}
	}

	const clearMessages = () => {
		// Directly remove from localStorage
		if (typeof window !== 'undefined') {
			localStorage.removeItem("messages")
		}
		// Update state
		setMessagesState([])
		
		console.log("Messages cleared from hook")
	}

	return { chatId, messages, isLoading, addMessage, clearMessages }
}
