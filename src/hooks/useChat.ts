import useLocalStorage from "./useLocalStorage"
import { Id } from "@core"
import Message from "@/model/Msg"

export default function useChat() {
	const [chatId] = useLocalStorage<string>("chatId", Id.generate())
	const [messages, setMessages] = useLocalStorage<Message[]>("messages", [])

	const addMessage = (content: string) => {
		const newMessage: Message = {
			id: Id.generate(), // Generate a new ID for the message
			author: "User", // You can replace this with the actual user
			content,
			side: "right",
			icon: "👤",
			projectId: chatId,
			createdAt: new Date(),
			updatedAt: new Date(),
		}
		setMessages([...messages, newMessage]) // Update the messages array
	}

	return { chatId, messages, addMessage }
}
