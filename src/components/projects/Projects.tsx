import { Projeto } from "@core"
import Project from "./Item"

export interface ProjectsProps {
	title: string
	list: Projeto[]
}

export default function Projects(props: ProjectsProps) {
	return (
		<div>
			<h3 className="text-2xl font-bold text-white/70">{props.title}</h3>
			<div className="flex gap-4 flex-wrap">
				{props.list.map((projeto) => (
					<Project key={projeto.id} project={projeto} />
				))}
			</div>
		</div>
	)
}
