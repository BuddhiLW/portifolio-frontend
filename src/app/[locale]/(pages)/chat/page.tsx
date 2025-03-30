"use client"
import useChat from "@/hooks/useChat"
import { useState } from "react"
import Message from "@/model/Msg"

export default function Chat() {
	const { chatId, messages, isLoading, addMessage, clearMessages } = useChat()
	const [text, setText] = useState("")

	return (
		<div>
			<h1>Chat</h1>
			<h2>Chat ID: {chatId}</h2>
			<button onClick={clearMessages}>Clear</button>
			<ul>
				{messages.map((message: Message) => (
					<li key={message.id} className="flex gap-2">
						<span className="text-sm text-gray-500">{message.author}</span>
						<span className="text-sm text-gray-500">{message.content}</span>
					</li>
				))}
			</ul>
			{isLoading && <p>Loading...</p>}

			<input
				type="text"
				className="w-full border-2 border-gray-300 rounded-md p-2"
				value={text}
				onChange={(e) => {
					setText(e.target.value)
				}}
				onKeyDown={(e) => {
					if (e.key === "Enter" && text.trim()) {
						addMessage(text)
						setText("")
					}
				}}
			/>
		</div>
	)
}
