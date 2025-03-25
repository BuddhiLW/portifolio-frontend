import { Projeto } from "@core"
import Image from "next/image"
import Link from "next/link"

export interface ItemProjectProps {
	key: number
	project: Projeto
}

export default function Project({ project }: ItemProjectProps) {
	return (
		<Link href={`/projects/${project.id}`}>
			<div className="
			relative rounded-2xl overflow-hidden 
			border-zinc-800 min-w-65 min-h-64
			">
				<Image
					src={project.imagens[0]}
					alt={project.nome}
					fill
					className="object-cover"
				/>
				<h3>{project.nome}</h3>
				<p>{project.descricao}</p>
			</div>
		</Link>
	)
}
