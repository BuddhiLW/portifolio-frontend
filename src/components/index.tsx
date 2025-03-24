import { Tecnologia } from "@core"

export interface CurriculumProps {
	techs: Tecnologia[]
}

export default function Curriculum({ techs }: CurriculumProps) {
	return <div>{techs[0].id}</div>
}
