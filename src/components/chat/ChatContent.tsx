"use client"
import React, { useEffect, useRef, useState } from "react"
import useChat from "@/hooks/useChat"
import Message from "@/model/Msg"
import EmptyContent from "@/components/chat/EmptyContent"
import { usePathname } from "next/navigation"
import { useTranslations } from "next-intl"
import ChatAuthor from "./ChatAuthor"
import ChatMessage from "./ChatMessage"
import Container from "@/components/shared/Container"
import ChatInput from "./ChatInput"

const ChatContent: React.FC = () => {
	const { messages, isLoading, addMessage, forceUpdate } = useChat()
	const chatEndRef = useRef<HTMLDivElement>(null)
	const t = useTranslations("ChatContent")
	const pathname = usePathname()
	
	// Create a local state to force rerenders
	const [renderKey, setRenderKey] = useState(0)
	
	// Check if the pathname ends with "/chat"
	const isChatPage = pathname.endsWith("/chat")
	
	// Get fresh data from localStorage on each render
	useEffect(() => {
		// Get the latest messages from localStorage
		const latestMessages = localStorage.getItem("messages")
		console.log("ChatContent updated, messages length:", messages.length)
		console.log("Latest localStorage:", latestMessages ? JSON.parse(latestMessages).length : 0)
		
		// Force rerender when forceUpdate changes
		setRenderKey(prev => prev + 1)
	}, [forceUpdate, messages]) // React to both messages and forceUpdate changes
	
	useEffect(() => {
		// Scroll to the bottom of the chat when messages change
		chatEndRef.current?.scrollIntoView({ behavior: "smooth" })
	}, [messages, renderKey]) // Ensure this runs whenever messages or renderKey change
	
	const handleSendMessage = (message: string) => {
		console.log("Sending message from ChatContent:", message)
		addMessage(message)
	}

	return (
		<div
			className={`flex flex-col flex-grow h-full overflow-hidden
            ${isChatPage ? "max-h-[100vh]" : "max-h-[60vh]"}
        `}
		>
			<div className="flex-grow overflow-y-auto">
				<ul
					className={`flex-grow overflow-y-auto 
            ${isChatPage ? "max-h-[70vh]" : "max-h-[50vh]"}
            `}
				>
					{messages.length === 0 ? (
						<EmptyContent />
					) : (
						messages.map((message: Message) => (
							<div
								key={message.id}
								className={`flex flex-col gap-5 mb-5 fade-in slide-in`}
							>
								<ChatAuthor author={message.author} side={message.side} />
								<ChatMessage content={message.content} side={message.side} />
							</div>
						))
					)}
					<div ref={chatEndRef} /> {/* This div is used for scrolling */}
				</ul>

				<Container>
					{isLoading && (
						<div className="loading-dots text-white bg-gray-100 dark:bg-white-500 dark:text-black rounded-full px-2 py-1">
							<span></span>
							<span></span>
							<span></span>
						</div>
					)}
				</Container>
			</div>
			
			<ChatInput
				placeholder={t("placeholder")}
				isChatPage={isChatPage}
				onSend={handleSendMessage}
			/>
		</div>
	)
}

export default ChatContent
