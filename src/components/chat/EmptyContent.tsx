"use client"

import React from "react"
import { IconMessages } from "@tabler/icons-react"
import { useTranslations } from "next-intl"

const EmptyContent: React.FC = () => {
	const t = useTranslations("EmptyContent")

	return (
		<div className="flex flex-col items-center justify-center h-full text-gray-500">
			<IconMessages size={48} className="mb-4" />
			<h2 className="text-lg font-semibold">{t("startConversation")}</h2>
			<p className="text-center">{t("typeMessage")}</p>
		</div>
	)
}

export default EmptyContent
