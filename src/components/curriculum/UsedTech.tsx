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
		<div className="flex flex-wrap justify-center items-center gap-2 p-6 w-full lg:w-72 bg-black/80 rounded-2xl border border-zinc-800">
			{techs.map((tech) => (
				<div key={tech.id} className="tech-item">
					<span className="text-red-500 font-bold">#</span>
					<span className="text-white">{tech.nome}</span>
				</div>
			))}
		</div>
	)
}
