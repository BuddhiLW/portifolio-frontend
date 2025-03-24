import Header from "@/components/shared/Header"
import { Tecnologia } from "@core"
import { useTranslations } from "next-intl"
import Techs from "../tecnologias/Tecnologias"

export interface MainProps {
	techs: Tecnologia[]
}

export default function Main({ techs }: MainProps) {
	const t = useTranslations()

	return (
		<div className="flex flex-col">
			<div className="flex flex-col items-center justify-center h-[500px] bg-[url('/images/main2.webp')] bg-cover bg-center">
				<Header />
				<div className="flex-1 flex items-center justify-center">
					{/* Rounded overlay box with content */}
					<div className="relative bg-black/30 backdrop-blur-[2px] rounded-2xl p-8">
						<div className="flex flex-col gap-4 text-center">
							<h1 className="flex gap-3 items-center">
								<span className="w-2 h-2 rounded-full bg-red-500"></span>
								<span className="text-3xl sm:text-5xl text-center font-bold text-white">
									Pedro Gomes Branquinho
								</span>
								<span className="w-2 h-2 rounded-full bg-red-500"></span>
							</h1>
							<h2 className="text-2xl font-bold text-white/90">
								({t("home.pre-title")}) {t("home.title")} ({t("home.pos-title")})
							</h2>
							<Techs techs={techs} />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
