"use client"
import React from "react"
import useChat from "@/hooks/useChat"
import Message from "@/model/Msg"
import MarkdownReadme from "@/components/shared/MarkdownReadme"
import EmptyContent from "@/components/chat/EmptyContent"
import { usePathname } from "next/navigation"

const ChatContent: React.FC = () => {
	const { chatId, messages, isLoading, addMessage } = useChat()
	const [text, setText] = React.useState("")

	// Get fresh data from localStorage on each render
	React.useEffect(() => {
		{
			/*console.log("ChatContent mounted/updated")
		console.log("Current localStorage:", localStorage.getItem("messages"))
		console.log("Current messages state:", messages)*/
		}
	}, [messages]) // Added messages as dependency

	const pathname = usePathname()
	console.log(pathname)

	// Check if the pathname ends with "/chat"
	const isChatPage = pathname.endsWith("/chat")

	return (
		<div
			className={`flex flex-col flex-grow h-full max-h-[60vh] overflow-hidden
            ${isChatPage ? "max-h-[100vh]" : "max-h-[72vh]"}
        `}
		>
			<ul
				className={`flex-grow overflow-y-auto max-h-[60%]
            ${isChatPage ? "max-h-[100vh]" : "max-h-[72vh]"}
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
							{message.side === "right" ? (
								<div
									className="
                                dark:text-zinc-800 font-bold bg-green-400 h-10 w-16 rounded-md
                                flex items-center justify-center self-end
                                "
								>
									{message.author}
								</div>
							) : (
								<div
									className="
                                dark:text-zinc-800 font-bold bg-red-400 h-10 w-30 rounded-md
                                flex items-center justify-center
                                "
								>
									{message.author}
								</div>
							)}

							{message.side === "right" ? (
								<li
									className="
                                    chat-bubble-right
                                    bg-white dark:bg-black text-black dark:text-zinc-950 rounded-md
                                    font-sans font-medium text-lg
                                    "
								>
									<MarkdownReadme markdown={message.content} />
								</li>
							) : (
								<li
									className="
                                    chat-bubble-left 
                                    bg-white dark:bg-black text-black dark:text-zinc-950 rounded-md p-2
                                    font-sans font-medium text-lg
                                    "
								>
									<MarkdownReadme markdown={message.content} />
								</li>
							)}
						</div>
					))
				)}
			</ul>

			{isLoading && (
				<div className="loading-dots">
					<span></span>
					<span></span>
					<span></span>
				</div>
			)}

			<div className="flex items-center justify-center pb-10">
				<input
					type="text"
					className="w-full border-2 border-gray-300 dark:border-gray-600 rounded-md p-3 my-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300"
					value={text}
					placeholder="Type your message here..."
					maxLength={200}
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
		</div>
	)
}

export default ChatContent
