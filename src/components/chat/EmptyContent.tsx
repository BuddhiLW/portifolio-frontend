"use client"

import React from "react"
import { IconMessages } from "@tabler/icons-react"

const EmptyContent: React.FC = () => {
	return (
		<div className="flex flex-col items-center justify-center h-full text-gray-500">
			<IconMessages size={48} className="mb-4" />
			<h2 className="text-lg font-semibold">Start a conversation!</h2>
			<p className="text-center">Type your message below to begin chatting.</p>
		</div>
	)
}

export default EmptyContent
