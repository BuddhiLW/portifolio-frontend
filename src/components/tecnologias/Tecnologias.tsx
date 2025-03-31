import { Tecnologia } from "@buddhilw/core"
import Image from "next/image"

export interface TechsProps {
	techs: Tecnologia[]
}

export default function Techs({ techs }: TechsProps) {
	if (!techs) return null

	return (
		<div className="flex flex-wrap justify-center gap-4">
			{techs.map((tech) => (
				<div key={tech.id} className="flex flex-col items-center gap-1">
					<span className="relative h-8 w-8 md:h-12 md:w-12 lg:h-16 lg:w-16 rounded-xl overflow-hidden">
						<Image src={tech.imagem} alt={tech.nome} fill className="object-contain" />
					</span>
				</div>
			))}
		</div>
	)
}
