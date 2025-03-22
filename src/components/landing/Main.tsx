import Header from "@/components/shared/Header"
import { useTranslations } from "next-intl"

export default function Main() {
	const t = useTranslations()

	return (
		<div className="flex flex-col h-screen">
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
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
