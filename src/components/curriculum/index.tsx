"use client"

import { Tecnologia } from "@buddhilw/core"
import UsedTechs from "./UsedTech"
import Experience from "./Experience"
import MiniCurriculum from "./MiniCurriculum"

export interface CurriculumProps {
	techs: Tecnologia[]
}

export default function Curriculum({ techs }: CurriculumProps) {
	return (
		<div
			id="curriculum"
			className="flex flex-col align-left lg:flex-row gap-4 min-h-72 w-full py-8"
		>
			<div className="flex flex-col gap-4 w-full lg:w-11/12">
				<MiniCurriculum />
				<UsedTechs techs={techs} />
			</div>
			<Experience />
		</div>
	)
}
