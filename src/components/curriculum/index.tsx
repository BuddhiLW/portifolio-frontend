'use client'

import { Tecnologia } from "@core"
import UsedTechs from "./UsedTech"
import { useTranslations } from 'next-intl'
import Experience from "./Experience"

export interface CurriculumProps {
	techs: Tecnologia[]
}

export default function Curriculum({ techs }: CurriculumProps) {
	const t = useTranslations('sections')

	return (
		<div id="technologies" className="w-full min-h-[200px] py-8 scroll-mt-20">
			<div className="flex flex-col lg:flex-row gap-6">
				<div className="lg:w-1/3">
					<h2 className="text-2xl font-bold mb-6 text-center lg:text-left">{t('technologies')}</h2>
					<UsedTechs techs={techs} />
				</div>
				<div className="lg:w-2/3">
					<Experience />
				</div>
			</div>
		</div>
	)
}
