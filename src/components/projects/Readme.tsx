import Container from "../shared/Container"
import MarkdownReadme from "../shared/MarkdownReadme"

export interface ReadmeProps {
	markdown: string
}

export default function Readme({ markdown }: ReadmeProps) {
	return (
		<Container className="flex flex-col items-stretch p-6 bg-black border border-zinc-800">
			<div className="prose prose-zinc prose-invert w-full max-w-none">
				<MarkdownReadme markdown={markdown} />
			</div>
		</Container>
	)
}
