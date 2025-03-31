"use client"

import { Projeto } from "@buddhilw/core"
import Project from "./Item"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "../ui/carousel"
import { useTranslations } from "next-intl"

export interface ProjectsProps {
	title: string
	list: Projeto[]
	translationKey?: string
}

export default function Projects(props: ProjectsProps) {
	const t = useTranslations("sections.projects")

	// Use the translation if translationKey is provided, otherwise use the title prop
	const displayTitle = props.translationKey ? t(props.translationKey) : props.title

	return (
		<div className="flex flex-col items-center sm:items-start w-7/10 md:w-11/12 xl:w-full gap-5">
			<h3 className="text-2xl font-bold text-zinc-800 dark:text-white/70">{displayTitle}</h3>
			<Carousel opts={{ align: "center", loop: true }} className="w-full">
				<CarouselContent className="flex items-center">
					{props.list.map((projeto) => (
						<CarouselItem
							key={projeto.id}
							className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
						>
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
