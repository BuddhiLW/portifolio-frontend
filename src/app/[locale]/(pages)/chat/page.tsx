"use client"
import useChat from "@/hooks/useChat"
import { useState } from "react"
import Message from "@/model/Message"

export default function Chat() {
	const { chatId, messages, addMessage } = useChat()
	const [text, setText] = useState("")

	return (
		<div>
			<h1>Chat</h1>
			<h2>{chatId}</h2>
			<ul>
				{messages.map((message: Message) => (
					<li key={message.id} className="flex gap-2">
						<span className="text-sm text-gray-500">{message.author}</span>
						<span className="text-sm text-gray-500">{message.content}</span>
					</li>
				))}
			</ul>

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
