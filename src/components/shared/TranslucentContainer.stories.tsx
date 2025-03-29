"use client"

import type { Meta, StoryObj } from "@storybook/react"
import TranslucentContainer from "./TranslucentContainer"
import { WithProviders, WithDarkTheme } from "../../../.storybook/decorators"

const meta = {
	title: "Shared/TranslucentContainer",
	component: TranslucentContainer,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	decorators: [WithProviders],
} satisfies Meta<typeof TranslucentContainer>

export default meta
type Story = StoryObj<typeof meta>

// Create a background for the container to show translucency
const BackgroundDecorator = (Story: React.ComponentType) => (
  <div style={{ 
    backgroundImage: "url('/images/main.webp')", 
    backgroundSize: "cover",
    padding: "2rem",
    borderRadius: "8px",
    minHeight: "300px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  }}>
    <Story />
  </div>
);

export const Default: Story = {
	args: {
		children: (
			<div className="flex flex-col items-center">
				<h2 className="text-lg font-bold text-white">Translucent Container</h2>
				<p className="text-white">This is a translucent rounded container.</p>
			</div>
		),
	},
  decorators: [BackgroundDecorator],
}

export const WithCustomClass: Story = {
	args: {
		children: (
			<div className="flex flex-col items-center">
				<h2 className="text-lg font-bold text-white">Translucent Container</h2>
				<p className="text-white">With custom class</p>
			</div>
		),
    className: "max-w-md border-2 border-white/20",
	},
  decorators: [BackgroundDecorator],
}

export const DarkMode: Story = {
	args: {
		children: (
			<div className="flex flex-col items-center">
				<h2 className="text-lg font-bold text-white">Translucent Container</h2>
				<p className="text-white">This is a translucent rounded container.</p>
			</div>
		),
	},
	decorators: [WithDarkTheme, BackgroundDecorator],
}
