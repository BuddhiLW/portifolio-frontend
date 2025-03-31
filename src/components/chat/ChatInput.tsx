"use client"
import React, { useState } from "react"
import { IconReload, IconSend } from "@tabler/icons-react"
import useChat from "@/hooks/useChat"

interface ChatInputProps {
	placeholder: string
	isChatPage: boolean
	onSend: (message: string) => void
}

const ChatInput: React.FC<ChatInputProps> = ({ placeholder, isChatPage, onSend }) => {
	const [text, setText] = useState("")
	const { clearMessages } = useChat()

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter" && text.trim()) {
			// Use the onSend prop to send message to parent component
			onSend(text.trim())
			setText("")
		}
	}

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		if (text.trim()) {
			// Use the onSend prop to send message to parent component
			onSend(text.trim())
			setText("")
		}
	}

	const handleClear = () => {
		// Use the hook's clearMessages function
		clearMessages()
	}

	return (
		<div
			className="flex items-center justify-center my-5
            min-w-11/12 max-w-full mx-10 self-center
            border-2 border-gray-300 dark:border-gray-600 rounded-md
            bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 
            p-3 my-2 transition duration-300 ease-in-out focus-within:ring-2 focus-within:ring-blue-500 dark:focus-within:ring-blue-300
            "
		>
			<input
				type="text"
				className="w-full placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none mr-2 text-wrap break-words"
				value={text}
				placeholder={placeholder}
				maxLength={200}
				onChange={(e) => setText(e.target.value)}
				onKeyDown={handleKeyDown}
			/>
			<button
				className="bg-blue-500 text-white px-2 py-2 rounded-md mr-2"
				onClick={handleClick}
			>
				{isChatPage ? <IconSend size={18} /> : <IconSend size={24} />}
			</button>

			{isChatPage && (
				<button
					className="bg-red-500 text-white px-2 py-2 rounded-md"
					onClick={handleClear}
				>
					<IconReload size={18} />
				</button>
			)}
		</div>
	)
}

export default ChatInput
