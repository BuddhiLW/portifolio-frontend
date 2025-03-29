"use client"

import type { Meta, StoryObj } from "@storybook/react"
import Project from "./Item"
import { NextIntlClientProvider } from "next-intl"

// Mock data
const mockProject = {
	id: "1",
	nome: "Project Name",
	descricao: "Project Description",
	imagens: ["/images/main.webp"],
	tipo: ["web"],
	destaque: true,
}

// Decorator to provide the necessary context
const IntlDecorator = (Story: React.ComponentType) => (
	<NextIntlClientProvider locale="en" messages={{}}>
		<div style={{ width: "300px", height: "300px", position: "relative" }}>
			<Story />
		</div>
	</NextIntlClientProvider>
)

const meta = {
	title: "Components/Projects/Item",
	component: Project,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	decorators: [IntlDecorator],
} satisfies Meta<typeof Project>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		project: mockProject,
	},
}

export const WithDifferentImage: Story = {
	args: {
		project: {
			...mockProject,
			imagens: ["/images/curriculum.jpg"],
		},
	},
}
