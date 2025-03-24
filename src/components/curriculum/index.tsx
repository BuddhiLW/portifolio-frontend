'use client'

import { Tecnologia } from "@core"
import UsedTechs from "./UsedTech"
import { useTranslations } from 'next-intl'

export interface CurriculumProps {
	techs: Tecnologia[]
}

export default function Curriculum({ techs }: CurriculumProps) {
	const t = useTranslations('sections')

	return (
		<div id="technologies" className="min-h-[200px] py-8 scroll-mt-20 flex flex-col items-center">
			<h2 className="text-2xl font-bold mb-6">{t('technologies')}</h2>
			<UsedTechs techs={techs} />
		</div>
	)
}
