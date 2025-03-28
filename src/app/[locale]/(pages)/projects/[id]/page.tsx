import Header from "@/components/shared/Header"
import { obterProjeto } from "@/functions/projetos"
import { getTranslations } from 'next-intl/server'

export default async function ProjectPage(props: {
	params: Promise<{ id: string; locale: string }>
}) {
	const { id, locale } = await props.params
	const project = await obterProjeto(id, locale)
	const t = await getTranslations('Projects')

	if (!project) {
		return <div>{t('notFound')}</div>
	}

	return (
		<div>
			<Header />
			<div className="container mx-auto py-8">
				<h1 className="text-3xl font-bold mb-4">{project.nome}</h1>
				<div className="mb-2">ID: {project.id}</div>
				<div className="mb-4">{project.descricao}</div>
			</div>
		</div>
	)
}