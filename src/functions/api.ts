const baseURL = process.env.NEXT_PUBLIC_API_URL

export async function httpGet<T>(endpoint: string, params?: Record<string, string>): Promise<T> {
	if (!baseURL) {
		throw new Error("API URL is not configured. Please check NEXT_PUBLIC_API_URL in .env")
	}

	const normalizedUrl = normalizeUrl(`${baseURL}/${endpoint}`)
	const url = new URL(normalizedUrl)

	if (params) {
		Object.entries(params).forEach(([key, value]) => {
			url.searchParams.append(key, value)
		})
	}

	const response = await fetch(url.toString())
	return await response.json()
}

function normalizeUrl(url: string): string {
	if (!url) {
		throw new Error("URL is required")
	}

	// Handle cases where baseURL might be undefined
	if (!url.includes("://")) {
		return url.replace(/\/{2,}/g, "/")
	}

	const [protocol, ...rest] = url.split("://")
	if (!rest.length) {
		throw new Error("Invalid URL format")
	}

	const path = rest.join("://") // Join back any remaining parts
	return `${protocol}://${path.replace(/\/{2,}/g, "/")}`
}
