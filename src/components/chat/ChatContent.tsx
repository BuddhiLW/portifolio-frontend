"use client"
import React from "react"
import useChat from "@/hooks/useChat"
import Message from "@/model/Msg"
import MarkdownReadme from "@/components/shared/MarkdownReadme"

const ChatContent: React.FC = () => {
	const { chatId, messages, isLoading, addMessage } = useChat()
	const [text, setText] = React.useState("")

	// Get fresh data from localStorage on each render
	React.useEffect(() => {
		console.log("ChatContent mounted/updated")
		console.log("Current localStorage:", localStorage.getItem("messages"))
		console.log("Current messages state:", messages)
	}, [messages]) // Added messages as dependency

	return (
		<div>
			<h1>Chat</h1>
			<h2>Chat ID: {chatId}</h2>
			<ul>
				{messages.map((message: Message) => (
					<div key={message.id} className="flex gap-2 fade-in slide-in">
						<div className="author-box">{message.author}</div>
						<li className="chat-bubble my-2">
							<MarkdownReadme markdown={message.content} />
						</li>
					</div>
				))}
			</ul>

			{isLoading && (
				<div className="loading-dots">
					<span></span>
					<span></span>
					<span></span>
				</div>
			)}

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

export default ChatContent
