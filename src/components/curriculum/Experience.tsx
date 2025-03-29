import { useTranslations } from "next-intl"
import TimelineItem from "./TimelineItem"

export default function Experience() {
	const t = useTranslations("sections.experience")

	const experiences = [
		{
			title: t("roles.software_engineer"),
			company: "Funerária Francana",
			location: "Remote",
			description: t("companies.funeraria.description"),
			startDate: "Feb 2024",
			endDate: t("current"),
			tags: ["Clojure", "ClojureScript", "ClojureDart"],
		},
		{
			title: t("roles.software_engineer"),
			company: "Orasis Holding",
			location: "Remote",
			description: t("companies.orasis.description"),
			startDate: "Jun 2024",
			endDate: "Mar 2025",
			tags: [
				"Go",
				"Microservices",
				"Kafka",
				"gRPC",
				"PostgreSQL",
				"Prometheus",
				"Grafana",
				"Postman",
				"Swagger",
				"REST APIs",
				"CLI",
				"Docker Compose",
				"Cadence",
				"Kubernetes",
				"RedPandas",
			],
		},
		{
			title: t("roles.developer"),
			company: "FACTI",
			location: "Hybrid, Campinas",
			description: t("companies.facti.description"),
			startDate: "Dec 2022",
			endDate: "Aug 2023",
			tags: ["ClojureScript", "JavaScript", "JQuery", "TypeScript", "Angular", "Express.js"],
		},
		{
			title: t("roles.researcher"),
			company: "University of São Paulo",
			location: "Lorena, São Paulo",
			description:
				"Modeling Traffic Flow, with Julia and Python - numerical solution to Partial Differential Equations (PDEs).",
			startDate: "Sep 2021",
			endDate: "Mar 2022",
			tags: ["Julia", "Python", "PDEs", "Research"],
		},
		{
			title: t("roles.developer"),
			company: "FlowFinance",
			location: "Remote",
			description: t("companies.flowfinance.description"),
			startDate: "Jun 2021",
			endDate: "Jul 2021",
			tags: ["Clojure", "CSV", "Data Processing"],
		},
		{
			title: t("roles.developer"),
			company: "Lupo S.A.",
			location: "Araraquara, São Paulo",
			description: t("companies.lupo.description"),
			startDate: "Jan 2021",
			endDate: "May 2021",
			tags: ["Clojure", "Bash", "Babashka", "CLI", "JVM", "Linux"],
		},
	]

	return (
		<div className="flex flex-col items-center w-full lg:w-11/12">
			<h2 className="text-2xl font-bold mb-8 text-center">{t("title")}</h2>
			<div className="w-full relative">
				{/* Timeline line - adjusted for smallest screens */}
				<div className="absolute left-4 sm:left-6 lg:left-12 w-0.5 h-[calc(100%-1.5rem)] bg-gradient-to-b from-red-500/50 to-transparent" />
				<div className="space-y-10">
					{experiences.map((exp, index) => (
						<TimelineItem key={index} {...exp} />
					))}
				</div>
			</div>
		</div>
	)
}
