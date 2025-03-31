"use client"
import { Id } from "@buddhilw/core"
import Message from "@/model/Msg"
import { chat } from "@/functions/chat"
import { useState, useCallback, useEffect } from "react"
import useLocalStorage from "./useLocalStorage"
import { useTranslations } from "next-intl"

// Create a custom event for chat updates
const CHAT_UPDATED_EVENT = "chatUpdated"

export default function useChat() {
	// Use our custom hook to handle chatId storage
	const chatIdStorage = useLocalStorage<string>("chatId", Id.generate())
	const messagesStorage = useLocalStorage<Message[]>("messages", [])
	const [isLoading, setIsLoading] = useState(false)
	const t = useTranslations("useChat")

	// Force component to re-read from localStorage
	const [forceUpdate, setForceUpdate] = useState(0)

	// Function to dispatch custom event when chat updates
	const dispatchChatUpdate = useCallback(() => {
		if (typeof window !== "undefined") {
			window.dispatchEvent(new CustomEvent(CHAT_UPDATED_EVENT))
		}
	}, [])

	// Listen for chat updates from other components
	useEffect(() => {
		const handleChatUpdate = () => {
			// Force re-read from localStorage
			setForceUpdate((prev) => prev + 1)
		}

		if (typeof window !== "undefined") {
			window.addEventListener(CHAT_UPDATED_EVENT, handleChatUpdate)
			return () => window.removeEventListener(CHAT_UPDATED_EVENT, handleChatUpdate)
		}
	}, [])

	// Get latest messages directly from localStorage
	const getLatestMessages = useCallback(() => {
		if (typeof window === "undefined") return []
		try {
			const storedMessages = localStorage.getItem("messages")
			return storedMessages ? JSON.parse(storedMessages) : []
		} catch (error) {
			console.error("Error reading messages from localStorage:", error)
			return []
		}
	}, [])

	const addMessage = async (content: string) => {
		try {
			setIsLoading(true)
			const newMessage: Message = {
				id: Id.generate(),
				author: t("user"),
				content,
				side: "right",
				icon: "👤",
				projectId: chatIdStorage.value,
				createdAt: new Date(),
				updatedAt: new Date(),
			}

			// Get latest messages directly from localStorage
			const latestMessages = getLatestMessages()

			// Update messages with new user message
			const currentMessages = [...latestMessages, newMessage]
			messagesStorage.setValue(currentMessages)

			// Notify all components about the update
			dispatchChatUpdate()

			const response = await chat(chatIdStorage.value, newMessage)
			if (!response) return

			const botMessage: Message = {
				id: Id.generate(),
				author: t("assistant"),
				content: response,
				side: "left",
				icon: "👤",
				projectId: chatIdStorage.value,
				createdAt: new Date(),
				updatedAt: new Date(),
			}

			// Get latest messages again to ensure we have the most up-to-date state
			const updatedMessages = getLatestMessages()

			// Update messages with both user and bot messages
			messagesStorage.setValue([...updatedMessages, botMessage])

			// Notify all components about the update
			dispatchChatUpdate()
		} catch (error) {
			console.error("Error adding message:", error)
		} finally {
			setIsLoading(false)
		}
	}

	const clearMessages = useCallback(() => {
		messagesStorage.removeItem()
		// Notify all components about the update
		dispatchChatUpdate()
	}, [messagesStorage, dispatchChatUpdate])

	return {
		chatId: chatIdStorage.value,
		messages: messagesStorage.value,
		isLoading,
		addMessage,
		clearMessages,
		forceUpdate, // Include for components to react to updates
	}
}
