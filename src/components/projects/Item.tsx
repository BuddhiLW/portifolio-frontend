import { Projeto } from "@core"
import Image from "next/image"
import Link from "next/link"

export interface ItemProjectProps {
	project: Projeto
}

export default function Project({ project }: ItemProjectProps) {
	return (
		<Link href={`/projects/${project.id}`}>
			<div className="relative rounded-2xl overflow-hidden border 
			border-zinc-800 min-w-64 min-h-64">
				<Image
					src={project.imagens[0]}
					alt={project.nome}
					objectFit="object-cover"
					fill
				/>
			</div>
		</Link>
	)
}
