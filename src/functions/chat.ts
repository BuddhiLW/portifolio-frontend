"use server"

import Message from "@/model/Msg"

export async function chat(chatId: string, message: Message): Promise<string | null> {
	const webhook = process.env.CHAT_WEBHOOK
	if (!webhook) {
		return null
	}
	const response = await fetch(webhook, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			chatId,
			message: message.content,
		}),
	})
	const msg = await response.json()
	return msg.output
}
