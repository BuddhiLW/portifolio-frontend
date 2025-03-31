import { FetchOptions } from "./api"

export async function getGithubReadme(repo: string, options: FetchOptions = { revalidate: 86400 }) {
	const repoName = repo.split("github.com/")[1]

	// Fetch with caching and revalidation
	return await fetch(`https://raw.githubusercontent.com/${repoName}/main/README.md`, {
		next: {
			revalidate: options.revalidate,
			tags: options.tags
		},
		cache: options.cache || (options.revalidate === false ? 'no-store' : 'force-cache')
	}).then(
		(response) => response.text(),
	)
}
