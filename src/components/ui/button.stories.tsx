import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "./button"
import { Mail } from "lucide-react"

const meta = {
	title: "UI/Button",
	component: Button,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: "select",
			options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
		},
		size: {
			control: "select",
			options: ["default", "sm", "lg", "icon"],
		},
		asChild: {
			control: "boolean",
		},
		disabled: {
			control: "boolean",
		},
	},
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		children: "Button",
		variant: "default",
		size: "default",
	},
}

export const WithIcon: Story = {
	args: {
		children: (
			<>
				<Mail />
				Login with Email
			</>
		),
		variant: "default",
	},
}

export const Destructive: Story = {
	args: {
		children: "Delete",
		variant: "destructive",
	},
}

export const Outline: Story = {
	args: {
		children: "Outline",
		variant: "outline",
	},
}

export const Secondary: Story = {
	args: {
		children: "Secondary",
		variant: "secondary",
	},
}

export const Ghost: Story = {
	args: {
		children: "Ghost",
		variant: "ghost",
	},
}

export const Link: Story = {
	args: {
		children: "Link Button",
		variant: "link",
	},
}

export const Small: Story = {
	args: {
		children: "Small",
		size: "sm",
	},
}

export const Large: Story = {
	args: {
		children: "Large",
		size: "lg",
	},
}

export const IconOnly: Story = {
	args: {
		children: <Mail />,
		size: "icon",
		"aria-label": "Send email",
	},
}

export const Disabled: Story = {
	args: {
		children: "Disabled",
		disabled: true,
	},
}
