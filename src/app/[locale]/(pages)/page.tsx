import Curriculum from "@/components/curriculum"
import Main from "@/components/landing/Main"
import Container from "@/components/shared/Container"
import { getTech } from "@/functions/tecnologias"

export default async function Home() {
	const techs = await getTech()

	return (
		<>
			<Main techs={techs.featuring} />
			<Container className="py-4">
				<Curriculum techs={techs.all} />
			</Container>
		</>
	)
}