import { Tecnologia } from "@core"
import { httpGet } from "./api"

export async function getTech() {
	const techs: Tecnologia[] = await httpGet("/tecnologias")
	return {
		all: techs,
		get featuring() {
			return techs.filter((tech) => tech.destaque)
		},
	}
}
