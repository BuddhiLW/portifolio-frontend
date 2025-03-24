"use client"

import { Tecnologia } from "@core"

export interface UsedTechProps {
	techs: Tecnologia[]
}

export default function UsedTechs({ techs }: UsedTechProps) {
	if (!techs || !Array.isArray(techs) || techs.length === 0) {
		return null
	}

	return (
		// TODO: create a routing for a technologies page, where we list all
		// projects that used a specific technology.
		<div className="tech-container w-full lg:w-72">
			{techs.map((tech) => (
				<div key={tech.id} className="tech-item">
					<span className="text-red-500 font-bold">#</span>
					<span>{tech.nome}</span>
				</div>
			))}
		</div>
	)
}
