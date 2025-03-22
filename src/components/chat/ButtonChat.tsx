'use client';

import Image from "next/image"

export default function ButtonChat() {
	return (
		<button className="bg-white dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 fixed bottom-5 right-5 cursor-pointer p-3 rounded-full 
			transition-all duration-300 ease-in-out shadow-lg
			hover:shadow-2xl hover:scale-105 hover:animate-shake">
			<Image 
				src="/images/chat1.svg" 
				alt="Chat" 
				width={40} 
				height={40}
				className="text-white"
			/>
		</button>
	)
}
