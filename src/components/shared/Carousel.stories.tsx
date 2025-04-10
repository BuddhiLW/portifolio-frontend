import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import SharedCarousel from "./Carousel"
import Container from "./Container"

const meta = {
	title: "Shared/Carousel",
	component: SharedCarousel,
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof SharedCarousel>

export default meta
type Story = StoryObj<typeof meta>

// Example component for carousel items
const images = [
	"https://via.placeholder.com/600x400?text=Image+1",
	"https://via.placeholder.com/600x400?text=Image+2",
	"https://via.placeholder.com/600x400?text=Image+3",
]

export const Default: Story = {
	render: (args) => (
		<Container className="h-full w-full p-10 mx-10 flex flex-col items-center  w-7/10 md:w-11/12 xl:w-full gap-5">
			<div className="w-8/10 md:w-11/12 xl:w-full gap-5">
				<SharedCarousel {...args} />
			</div>
		</Container>
	),
	args: {
		images: images,
		title: "Project Title", // Pass the title prop
	},
}

export const WithDifferentTitle: Story = {
	render: (args) => (
		<Container className="h-full w-full p-10 mx-10 flex flex-col items-center  w-7/10 md:w-11/12 xl:w-full gap-5">
			<div className="w-8/10 md:w-11/12 xl:w-full gap-5">
				<SharedCarousel {...args} />
			</div>
		</Container>
	),
	args: {
		images: images,
		title: "Another Project Title", // Pass a different title prop
	},
}

export const MobileView: Story = {
	render: (args) => (
		<div className="w-full max-w-xs mx-auto">
			<SharedCarousel {...args} />
		</div>
	),
	args: {
		images: images,
		title: "Project Title",
	},
}
