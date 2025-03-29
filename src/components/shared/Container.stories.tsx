"use client"

import type { Meta, StoryObj } from "@storybook/react"
import Container from "./Container"
import { WithProviders, WithDarkTheme } from "../../../.storybook/decorators"

const meta = {
	title: "Shared/Container",
	component: Container,
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
	argTypes: {
		className: { control: "text" },
	},
	decorators: [WithProviders],
} satisfies Meta<typeof Container>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		children: (
			<div className="h-40 w-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center rounded-md border border-blue-300 dark:border-blue-700">
				<p className="text-lg font-medium">Container Content</p>
			</div>
		),
	},
}

export const WithCustomClass: Story = {
	args: {
		children: (
			<div className="h-40 w-full bg-green-100 dark:bg-green-900 flex items-center justify-center rounded-md border border-green-300 dark:border-green-700">
				<p className="text-lg font-medium">Container with Custom Class</p>
			</div>
		),
		className: "mt-8 bg-gray-50 dark:bg-gray-900 py-6 rounded-lg",
	},
}

export const NarrowContainer: Story = {
	args: {
		children: (
			<div className="h-40 w-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center rounded-md border border-purple-300 dark:border-purple-700">
				<p className="text-lg font-medium">Narrow Container</p>
			</div>
		),
		className: "max-w-3xl",
	},
}

export const DarkMode: Story = {
	args: {
		children: (
			<div className="h-40 w-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center rounded-md border border-blue-300 dark:border-blue-700">
				<p className="text-lg font-medium">Container Content</p>
			</div>
		),
	},
	decorators: [WithDarkTheme],
}
