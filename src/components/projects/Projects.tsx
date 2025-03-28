import { Projeto } from "@core"
import Project from "./Item"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"

export interface ProjectsProps {
	title: string
	list: Projeto[]
}

export default function Projects(props: ProjectsProps) {
	return (
		<div className="flex flex-col items-center sm:items-start w-7/10 md:w-11/12 xl:w-full gap-5">
			<h3 className="text-2xl font-bold text-zinc-800 dark:text-white/70">{props.title}</h3>
			<Carousel
			opts={{align: "center", loop:true}}
			className="w-full"
			>
				<CarouselContent className="flex items-center">
						{props.list.map((projeto) => (
						<CarouselItem key={projeto.id} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
							<Project project={projeto} />
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious></CarouselPrevious>
				<CarouselNext></CarouselNext>
			</Carousel>
		</div>
	)
}
