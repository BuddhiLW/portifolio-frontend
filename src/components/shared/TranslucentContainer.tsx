"use client"

import React from "react"

interface TranslucentContainerProps {
	children: React.ReactNode
	className?: string
}

const TranslucentContainer: React.FC<TranslucentContainerProps> = ({ children, className }) => {
	return (
		<div
			className={`relative bg-black/30 backdrop-blur-[2px] rounded-2xl p-4 w-full mx-auto 
				${className} 
				dark:bg-white/30`}
		>
			{children}
		</div>
	)
}

export default TranslucentContainer
