import { Tecnologia } from "@core"
import { FetchOptions, httpGet } from "./api"

export async function getTech(options?: FetchOptions): Promise<{ all: Tecnologia[]; featuring: Tecnologia[] }> {
	const techs: Tecnologia[] = await httpGet("/tecnologias", undefined, options)
	return {
		all: techs,
		get featuring() {
			return techs.filter((tech) => tech.destaque)
		},
	}
}
