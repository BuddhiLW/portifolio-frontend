import { StorybookConfig } from "@storybook/nextjs"
import path from 'path';

const config: StorybookConfig = {
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

	addons: [
		"@storybook/addon-essentials",
		"@storybook/addon-onboarding",
		"@chromatic-com/storybook",
		"@storybook/experimental-addon-test",
		"@storybook/addon-mdx-gfm",
	],

	framework: {
		name: "@storybook/nextjs",
		options: {
			nextConfigPath: path.resolve(__dirname, '../next.config.ts'),
		},
	},

	staticDirs: ["../public"],

	docs: {
		autodocs: true,
	},

	typescript: {
		reactDocgen: "react-docgen-typescript",
		check: false,
	},

	webpackFinal: async (config) => {
		// Ensure Tailwind dark mode works
		if (config.module && config.module.rules) {
			// Add support for CSS modules in Storybook
			const rules = config.module.rules as Array<any>;
			const cssRule = rules.find(rule => rule.test && rule.test.toString().includes('.css'));
			
			if (cssRule) {
				if (cssRule.use) {
					// Add Tailwind postcss config
					const postCssLoader = cssRule.use.find((use: any) => 
						use.loader && use.loader.includes('postcss-loader')
					);
					
					if (postCssLoader && postCssLoader.options) {
						postCssLoader.options.postcssOptions = {
							config: path.resolve(__dirname, '../postcss.config.mjs'),
						};
					}
				}
			}
		}
		
		// Enable path aliases
		if (config.resolve) {
			config.resolve.alias = {
				...config.resolve.alias,
				'@core': path.resolve(__dirname, '../src/types/core.d.ts'),
			};
		}

		return config;
	},
}

export default config
