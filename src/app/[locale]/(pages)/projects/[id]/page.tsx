import Header from "@/components/shared/Header" // E: Cannot find module '@/components/shared/Header' or it…
import { obterProjeto } from "@/functions/projetos"

export default async function ProjectPage(props: {
	params: Promise<{ id: string; locale: string }>
}) {
	const { id, locale } = await props.params
	const project = await obterProjeto(id, locale)

	if (!project) {
		return <div>Project not found</div>
	}

	return (
		<div>
			<Header />
			<div>
				<h1>{project.nome}</h1>
				<div>Project ID: {project.id}</div>
				<div>Description: {project.descricao}</div>
			</div>
		</div>
	)
}