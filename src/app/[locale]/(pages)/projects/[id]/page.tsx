export const revalidate = 3600 * 24

import Container from "@/components/shared/Container"
import Header from "@/components/shared/Header"
import { obterProjeto } from "@/functions/projetos"
import SharedCarousel from "@/components/shared/Carousel"
import { Projeto } from "@core"
import { Suspense } from "react"
import Techs from "@/components/tecnologias/Tecnologias"
import TranslucentContainer from "@/components/shared/TranslucentContainer"
import { getGithubReadme } from "@/functions/github"
import Readme from "@/components/projects/Readme"

// Create a separate component for loading project data
async function ProjectDetails({ id, locale }: { id: string; locale: string }) {
	const project: Projeto | null = await obterProjeto(id, locale)

	if (!project) {
		throw new Error("Project not found")
	}

	const images = project.imagens || []
	const techsList = project.tecnologias
	const readme = await getGithubReadme(project.repositorio)

	return (
		<Container className="flex flex-col gap-4 mt-10">
			<h1 className="text-3xl font-bold mb-4">{project.nome}</h1>
			<Container className="w-full">
				<SharedCarousel images={images.slice(1)} title={project.nome} />
			</Container>
			<TranslucentContainer className="my-5 lg:my-7 xl:my-12">
				<Techs techs={techsList} />
			</TranslucentContainer>
			<div className="mb-2">ID: {project.id}</div>
			<div className="mb-4">{project.descricao}</div>
			<Readme markdown={readme} />
		</Container>
	)
}

// Create a loading fallback component
function Loading() {
	return <div className="spinner">Loading...</div> // Replace with your spinner or skeleton component
}

export default async function ProjectPage(props: {
	params: Promise<{ id: string; locale: string }>
}) {
	const { id, locale } = await props.params

	return (
		<div>
			<Header />
			<Container>
				<Suspense fallback={<Loading />}>
					<ProjectDetails id={id} locale={locale} />
				</Suspense>
			</Container>
		</div>
	)
}
