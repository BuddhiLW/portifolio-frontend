import Curriculum from "@/components/curriculum"
import Main from "@/components/landing/Main"
import Projects from "@/components/projects/Projects"
import Container from "@/components/shared/Container"
import { getTech } from "@/functions/tecnologias"
import { getProjects } from "@/functions/projetos"

export default async function Home() {
	const techs = await getTech()

	// This uses the nullish coalescing operator (??) 
	// to provide a default value with empty arrays 
	// when projects is null 
	const projects = await getProjects() ?? {
		featuring: [], web: [], mobile: [], games: [],
		desktop: [], cli: [], others: [], all: []
	}

	return (
		<>
			<Main techs={techs.featuring} />
			<Container className="py-16 flex flex-col gap-7">
				<Projects title="Featured" list={projects.featured} />
				<Projects title="Web" list={projects.web} />
				<Projects title="Mobile" list={projects.mobile} />
				<Projects title="Games" list={projects.games} />
				<Projects title="Desktop" list={projects.desktop} />
				<Projects title="CLI" list={projects.cli} />
				<Projects title="Others" list={projects.others} />
				<Curriculum techs={techs.all} />
			</Container>
		</>
	)
}
