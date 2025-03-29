"use client"

import type { Meta, StoryObj } from "@storybook/react"
import MarkdownReadme from "./MarkdownReadme"

const meta = {
	title: "Shared/MarkdownReadme",
	component: MarkdownReadme,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof MarkdownReadme>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		markdown: `
# Project Title

This is a sample README content with **bold text** and [a link](https://example.com).

## Features

- Feature 1
- Feature 2
- Feature 3

\`\`\`javascript
console.log("Hello, World!");
\`\`\`
        `,
	},
}
