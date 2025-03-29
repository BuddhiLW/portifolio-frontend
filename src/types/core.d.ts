declare module "@core" {
	export enum Tipo {
		WEB = "WEB",
		MOBILE = "MOBILE",
		DESKTOP = "DESKTOP",
		CLI = "CLI",
		JOGO = "JOGO",
		OUTRO = "OUTRO",
	}

	export interface Projeto {
		id: string
		nome: string
		descricao: string
		resumo: string
		dataInicio: string
		dataFim: string
		destaque: boolean
		site: string
		repositorio: string
		tipo: string[]
		tecnologias: Tecnologia[]
		imagens: string[]
	}

	export interface Tecnologia {
		id: number
		nome: string
		descricao: string
		imagem: string
		destaque: boolean
	}
}
