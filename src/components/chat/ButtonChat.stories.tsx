"use client"

import type { Meta, StoryObj } from "@storybook/react"
import ButtonChat from "./ButtonChat"
import { ThemeProvider } from "next-themes"

// Decorator to provide the theme context
const ThemeDecorator = (Story: React.ComponentType) => (
	<ThemeProvider attribute="class" defaultTheme="light">
		<div style={{ height: "200px", position: "relative" }}>
			<Story />
		</div>
	</ThemeProvider>
)

const meta = {
	title: "Components/ButtonChat",
	component: ButtonChat,
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
	decorators: [ThemeDecorator],
} satisfies Meta<typeof ButtonChat>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const DarkMode: Story = {
	decorators: [
		(Story) => (
			<ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
				<div style={{ height: "200px", position: "relative", background: "#121212" }}>
					<Story />
				</div>
			</ThemeProvider>
		),
	],
}
