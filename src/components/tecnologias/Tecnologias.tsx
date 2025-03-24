import { Tecnologia } from "@core"
import Image from "next/image"

export interface TechsProps {
	techs: Tecnologia[]
}

export default function Techs({ techs }: TechsProps) {
	if (!techs) return null

	return (
		<div className="flex justify-center gap-4">
			{techs.map((tech) => (
				<div key={tech.id} className="flex flex-col items-center gap-1">
					<span className="relative h-11 w-11 sm:h-16 sm:w-16 rounded-xl overflow-hidden">
						<Image src={tech.imagem} alt={tech.nome} fill className="object-contain" />
					</span>
				</div>
			))}
		</div>
	)
}
