import Image from "next/image"
import React from "react"
import ReactMarkdown from "react-markdown"
import rehypeRaw from "rehype-raw"
import remarkGfm from "remark-gfm"

interface MarkdownReadmeProps {
	markdown: string // Markdown content to render
}

const MarkdownReadme: React.FC<MarkdownReadmeProps> = ({ markdown }) => {
	return (
		<ReactMarkdown
			rehypePlugins={[rehypeRaw]}
			remarkPlugins={[remarkGfm]}
			components={{
				// Customizing the default components to add Tailwind CSS classes
				h1: (props) => <h1 className="text-2xl font-bold" {...props} />,
				h2: (props) => <h2 className="text-xl font-semibold" {...props} />,
				p: (props) => <p className="mb-4" {...props} />,
				img: ({ alt, src }) => (
					<Image
						alt={alt || ""}
						src={src}
						layout="responsive"
						width={500}
						height={300}
						style={{ objectFit: "contain" }}
					/>
				),
				// Add more custom components as needed
			}}
		>
			{markdown}
		</ReactMarkdown>
	)
}

export default MarkdownReadme
