"use client"

import type { Meta, StoryObj } from "@storybook/react"
import Curriculum from "./index"
import { WithProviders, WithDarkTheme } from "../../../.storybook/decorators"

// Sample technology data
const techs = [
	{
		id: 1,
		nome: "React",
		descricao: "React",
		imagem: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
		destaque: true,
	},
	{
		id: 2,
		nome: "Next.js",
		descricao: "Next.js",
		imagem: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
		destaque: true,
	},
	{
		id: 3,
		nome: "TypeScript",
		descricao: "TypeScript",
		imagem: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
		destaque: true,
	},
	{
		id: 4,
		nome: "Tailwind CSS",
		descricao: "Tailwind CSS",
		imagem: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-plain.svg",
		destaque: true,
	},
	{
		id: 5,
		nome: "Node.js",
		descricao: "Node.js",
		imagem: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
		destaque: true,
	},
]

const meta = {
	title: "Components/Curriculum",
	component: Curriculum,
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
	decorators: [WithProviders],
} satisfies Meta<typeof Curriculum>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		techs: techs,
	},
}

export const WithNoTechs: Story = {
	args: {
		techs: [],
	},
}

export const DarkMode: Story = {
	args: {
		techs: techs,
	},
	decorators: [WithDarkTheme],
}
