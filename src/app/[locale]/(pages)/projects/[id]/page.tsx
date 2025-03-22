import Header from "@/components/shared/Header" // E: Cannot find module '@/components/shared/Header' or it…

export default async function ProjectPage(props: { params: Promise<{ id: string }> }) {
	const { id } = await props.params
	return (
		<div>
			<Header></Header>
			<div>Project {id}</div>
		</div>
	)
}