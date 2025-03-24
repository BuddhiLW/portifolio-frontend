const baseURL = process.env.NEXT_PUBLIC_BASE_URL

export async function httpGet(url: string) {
  const response = await fetch(normalizeUrl(`${baseURL}${url}`))
  return await response.json()
}

function normalizeUrl(url: string) {
  const protocol = url.split("://")[0]
  const rest = url.split("://")[1]

  return `${protocol}://${rest.replaceAll(/\/{2,}/g, "/")}`
}
