"use client"

import React from "react"
import type { Meta, StoryObj } from "@storybook/react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./carousel"
import Container from "@/components/shared/Container"
import { WithProviders, WithDarkTheme } from "../../../.storybook/decorators"

const meta = {
	title: "UI/Carousel",
	component: Carousel,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		orientation: {
			control: "select",
			options: ["horizontal", "vertical"],
		},
	},
	decorators: [WithProviders],
} satisfies Meta<typeof Carousel>

export default meta
type Story = StoryObj<typeof meta>

// Example component for carousel items
const CarouselItemExample = ({ index, color }: { index: number; color: string }) => {
	return (
		<div className={`flex items-center justify-center h-40 w-full rounded-md ${color}`}>
			<span className="text-2xl font-semibold text-white">Slide {index}</span>
		</div>
	)
}

const colors = [
	"bg-blue-500",
	"bg-green-500",
	"bg-red-500",
	"bg-purple-500",
	"bg-yellow-500",
	"bg-pink-500",
]

export const Default: Story = {
	render: (args) => (
		<Container>
			<Carousel {...args}>
				<CarouselContent>
					{Array.from({ length: 5 }).map((_, index) => (
						<CarouselItem key={index}>
							<CarouselItemExample
								index={index + 1}
								color={colors[index % colors.length]}
							/>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</Container>
	),
}

export const Vertical: Story = {
	render: (args) => (
		<Container>
			<Carousel orientation="vertical" {...args}>
				<CarouselContent>
					{Array.from({ length: 5 }).map((_, index) => (
						<CarouselItem key={index}>
							<CarouselItemExample
								index={index + 1}
								color={colors[index % colors.length]}
							/>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</Container>
	),
	args: {
		orientation: "vertical",
	},
}

export const WithCustomControls: Story = {
	render: (args) => (
		<Container>
			<Carousel {...args}>
				<CarouselContent>
					{Array.from({ length: 5 }).map((_, index) => (
						<CarouselItem key={index}>
							<CarouselItemExample
								index={index + 1}
								color={colors[index % colors.length]}
							/>
						</CarouselItem>
					))}
				</CarouselContent>
				<div className="flex justify-center gap-2 mt-4">
					<CarouselPrevious className="static translate-y-0 translate-x-0" />
					<CarouselNext className="static translate-y-0 translate-x-0" />
				</div>
			</Carousel>
		</Container>
	),
}
