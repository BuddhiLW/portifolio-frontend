"use server"

import Message from "@/model/Msg"

export async function chat(chatId: string, message: Message): Promise<string | null> {
	const webhook = process.env.CHAT_WEBHOOK
	if (!webhook) {
		return null
	}

	// Create an AbortController to manage the timeout
	const controller = new AbortController()
	const timeoutId = setTimeout(() => {
		controller.abort() // Abort the fetch request after 60 seconds
	}, 60000) // 60 seconds timeout

	try {
		const response = await fetch(webhook, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				chatId,
				message: message.content,
			}),
			signal: controller.signal, // Attach the abort signal to the fetch request
			// Set higher timeouts for the fetch call
			cache: "no-store",
		})

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`)
		}

		const msg = await response.json()
		return msg.output
	} catch (error) {
		// Type assertion to handle the error as an Error object
		if (error instanceof Error) {
			if (error.name === "AbortError") {
				console.error("Fetch request timed out")
			} else {
				console.error("Fetch error:", error.message) // Access the message property safely
			}
		} else {
			console.error("An unknown error occurred")
		}
		return null
	} finally {
		clearTimeout(timeoutId) // Clear the timeout if the request completes
	}
}
