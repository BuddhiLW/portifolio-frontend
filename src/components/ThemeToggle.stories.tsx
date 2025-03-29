"use client"

import type { Meta, StoryObj } from "@storybook/react"
import ThemeToggle from "./ThemeToggle"
import { WithProviders, WithDarkTheme } from "../../.storybook/decorators"

const meta = {
	title: "Components/ThemeToggle",
	component: ThemeToggle,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	decorators: [WithProviders],
} satisfies Meta<typeof ThemeToggle>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const DarkMode: Story = {
	decorators: [WithDarkTheme],
}
