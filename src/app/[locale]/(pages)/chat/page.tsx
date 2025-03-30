"use client"
import ChatContent from "@/components/chat/ChatContent"
import Container from "@/components/shared/Container"
import Header from "@/components/shared/Header"

export default function Chat() {
	return (
		<Container className="flex flex-col h-screen">
			<Header />
			<div className="flex flex-col flex-grow overflow-y-auto h-full max-h-full mt-5">
				<ChatContent />
			</div>
		</Container>
	)
}
