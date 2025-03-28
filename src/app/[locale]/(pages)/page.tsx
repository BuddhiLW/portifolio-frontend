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
		featured: [], web: [], mobile: [], games: [],
		desktop: [], cli: [], others: [], all: []
	}

	return (
		<>
			<Main techs={techs.featuring} />
			<Container className="py-16 flex flex-col gap-10 items-center">
				<Projects title="Featured" translationKey="featured" list={projects.featured} />
				<Projects title="Web" translationKey="web" list={projects.web} />
				<Projects title="Mobile" translationKey="mobile" list={projects.mobile} />
				<Projects title="Games" translationKey="games" list={projects.games} />
				{/* TODO: Add `desktop`, `cli`, `others` in database
				<Projects title="Desktop" translationKey="desktop" list={projects.desktop} />
				<Projects title="CLI" translationKey="cli" list={projects.cli} />
				<Projects title="Others" translationKey="others" list={projects.others} />
				*/}
				<Curriculum techs={techs.all} /> 
			</Container>
		</>
	)
}
