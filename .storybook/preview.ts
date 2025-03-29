import type { Preview } from "@storybook/react"
import "../src/app/globals.css"
import { WithProviders } from "./decorators"

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		layout: "centered",
		backgrounds: {
			default: 'light',
			values: [
				{ name: 'light', value: '#ffffff' },
				{ name: 'dark', value: '#1a0505' },
			],
		},
		docs: {
			story: {
				inline: true,
			},
		},
	},
	decorators: [WithProviders],
	tags: ["autodocs"],
}

export default preview
