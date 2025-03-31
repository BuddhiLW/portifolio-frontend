import createNextIntlPlugin from "next-intl/plugin"
import type { NextConfig } from "next"

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts")

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		dangerouslyAllowSVG: true,
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**",
			},
		],
		domains: ["github.com"],
	},
	experimental: {
		serverComponentsExternalPackages: ["next"],
	},
	// Increase API timeout limit for all routes
	api: {
		bodyParser: {
			sizeLimit: '1mb',
		},
		responseLimit: false,
	},
	// Increase serverside timeout for requests
	serverRuntimeConfig: {
		// Will only be available on the server side
		timeoutMs: 60000, // 60 seconds
	},
}

export default withNextIntl(nextConfig)
