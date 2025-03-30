"use client"

import Image from "next/image"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import ChatWindow from "./ChatWindow"

export default function ButtonChat() {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<button
					className="bg-blue-500 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-700 fixed bottom-5 right-20 cursor-pointer p-3 rounded-full 
			transition-all duration-300 ease-in-out shadow-lg
			hover:shadow-2xl hover:scale-105 hover:animate-shake"
				>
					<Image
						src="/images/chat1.svg"
						alt="Chat"
						width={60}
						height={60}
						className="[filter:invert(21%)_sepia(100%)_saturate(7414%)_hue-rotate(359deg)_brightness(119%)_contrast(117%)]"
					/>
				</button>
			</PopoverTrigger>
			<PopoverContent
				side="top"
				align="end"
				sideOffset={2}
				className="w-10/12 sm:w-[500px] bg-transparent border-none p-0 my-2"
			>
				<ChatWindow />
			</PopoverContent>
		</Popover>
	)
}
