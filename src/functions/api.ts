const baseURL = process.env.NEXT_PUBLIC_BASE_URL

export async function httpGet(url: string) {
  const response = await fetch(url)
  return await response.json()
}
