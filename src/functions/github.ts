export async function getGithubReadme(repo: string) {
	const repoName = repo.split("github.com/")[1]

	// Clojure-like functional style
	return await fetch(`https://raw.githubusercontent.com/${repoName}/main/README.md`).then(
		(response) => response.text(),
	)
}
