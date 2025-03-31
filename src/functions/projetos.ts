import { Projeto, Tipo } from "@buddhilw/core"
import { FetchOptions, httpGet } from "./api"

interface ProjetosResult {
	all: Projeto[]
	mobile: Projeto[]
	web: Projeto[]
	desktop: Projeto[]
	cli: Projeto[]
	games: Projeto[]
	featured: Projeto[]
	others: Projeto[]
}

export async function getProjects(options?: FetchOptions): Promise<ProjetosResult | null> {
	const projects: Projeto[] = await httpGet("/projetos", undefined, options)

	return {
		all: projects,
		get mobile() {
			return projects.filter((p) => p.tipo.includes(Tipo.MOBILE))
		},
		get web() {
			return projects.filter((p) => p.tipo.includes(Tipo.WEB))
		},
		get desktop() {
			return projects.filter((p) => p.tipo.includes(Tipo.DESKTOP))
		},
		get cli() {
			return projects.filter((p) => p.tipo.includes(Tipo.CLI))
		},
		get games() {
			return projects.filter((p) => p.tipo.includes(Tipo.JOGO))
		},
		get featured() {
			return projects.filter((p) => p.destaque)
		},
		get others() {
			return projects.filter((p) => p.tipo.includes(Tipo.OUTRO))
		},
	}
}

export async function obterProjeto(id: string, locale?: string, options?: FetchOptions): Promise<Projeto | null> {
	return await httpGet(`/projetos/${id}`, locale ? { locale } : undefined, options)
}
