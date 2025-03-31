import Image from "next/image"
import React from "react"
import ReactMarkdown from "react-markdown"
import rehypeRaw from "rehype-raw"
import remarkGfm from "remark-gfm"

interface MarkdownReadmeProps {
	markdown: string // Markdown content to render
}

// Extend the existing props to include custom attributes
interface CustomDivProps extends React.HTMLProps<HTMLDivElement> {
	"data-badges"?: string // Add the data-badges attribute
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
				p: (props) => <p className="text-wrap break-words" {...props} />,
				div: (props: CustomDivProps) => {
					// Check for the presence of the data-badges attribute
					if (props["data-badges"] === "") {
						return (
							<div
								className="flex flex-row gap-2 items-center mb-0 pb-0"
								style={{ width: "auto", height: "auto" }}
								{...props}
							>
								{/* Apply styles to make badges the same size as the original images */}
								{React.Children.map(props.children, (child) => (
									<div
										className="flex items-center"
										style={{ width: "auto", height: "auto" }}
									>
										{child}
									</div>
								))}
							</div>
						)
					} else {
						return <div {...props} />
					}
				},
				img: ({ alt, src }) => (
					<Image
						alt={alt || ""}
						src={src || ""}
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
