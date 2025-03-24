import Curriculum from "@/components/curriculum"
import Main from "@/components/landing/Main"
import Container from "@/components/shared/Container"
import { getTech } from "@/functions/tecnologias"

export default async function Home() {
	const techs = await getTech()

	return (
		<>
			<Main />
			<Container className="py-4">
				<Curriculum techs={techs.all} />
			</Container>
		</>
	)
}