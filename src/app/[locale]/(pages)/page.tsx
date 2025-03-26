import Curriculum from "@/components/curriculum"
import Main from "@/components/landing/Main"
import Projects from "@/components/projects/Projects"
import Container from "@/components/shared/Container"
import { getTech } from "@/functions/tecnologias"
import { getProjects } from "@/functions/projetos"
import { getTranslations } from 'next-intl/server'

export default async function Home() {
	const techs = await getTech()

	// This uses the nullish coalescing operator (??) 
	// to provide a default value with empty arrays 
	// when projects is null 
	const projects = await getProjects() ?? {
		featured: [], web: [], mobile: [], games: [],
		desktop: [], cli: [], others: [], all: []
	}

	const t = await getTranslations('sections')

	return (
		<>
			<Main techs={techs.featuring} />
			<Container className="py-16 flex flex-col gap-10 items-center">
				<Projects title={t("projects.featured")} list={projects.featured} />
				<Projects title={t("projects.web")} list={projects.web} />
				<Projects title={t("projects.mobile")} list={projects.mobile} />
				<Projects title={t("projects.games")} list={projects.games} />
				{/* TODO: Add `desktop`, `cli`, `others` in database
				<Projects title={t("sections.projects.desktop")} list={projects.desktop} />
				<Projects title={t("sections.projects.cli")} list={projects.cli} />
				<Projects title={t("sections.projects.others")} list={projects.others} />
				*/}
{/*				<Container className="w-full flex flex-col md:flex-row gap-12 items-start">
					<Experience />
				</Container> */}
					<Curriculum techs={techs.all} /> 
			</Container>
		</>
	)
}
