import { useTranslations } from "next-intl"

export default function Experience() {
    const t = useTranslations('sections.experience')
    return (
        <div className="w-full max-w-4xl">
            <h2 className="text-2xl font-bold mb-8 text-center">{t('title')}</h2>
            <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 lg:left-1/4 transform h-full w-0.5 bg-gradient-to-b from-red-500/50 to-transparent" />
                
                <div className="space-y-12">
                    <Item 
                        title={t('roles.software_engineer')}
                        company="Funerária Francana"
                        location="Remote"
                        description={t('companies.funeraria.description')}
                        startDate="Feb 2024"
                        endDate={t('current')}
                        tags={["Clojure", "ClojureScript", "ClojureDart"]}
                    />
                    <Item 
                        title={t('roles.software_engineer')}
                        company="Orasis Holding"
                        location="Remote"
                        description={t('companies.orasis.description')}
                        startDate="Jun 2024"
                        endDate="Mar 2025"
                        tags={["Go", "Microservices", "Kafka", "gRPC", "PostgreSQL", "Prometheus", "Grafana", "Postman", "Swagger", "REST APIs", "CLI", "Docker Compose", "Cadence", "Kubernetes", "RedPandas"]}

                    />
                    <Item 
                        title={t('roles.developer')}
                        company="FACTI"
                        location="Hybrid, Campinas"
                        description={t('companies.facti.description')}
                        startDate="Dec 2022"
                        endDate="Aug 2023"
                        tags={["ClojureScript", "JavaScript", "JQuery", "TypeScript", "Angular", "Express.js"]}
                    />
                    <Item 
                        title={t('roles.researcher')}
                        company="University of São Paulo"
                        location="Lorena, São Paulo"
                        description="Modeling Traffic Flow, with Julia and Python - numerical solution to Partial Differential Equations (PDEs)."
                        startDate="Sep 2021"
                        endDate="Mar 2022"
                        tags={["Julia", "Python", "PDEs", "Research"]}
                    />
                    <Item 
                        title={t('roles.developer')}
                        company="FlowFinance"
                        location="Remote"
                        description={t('companies.flowfinance.description')}
                        startDate="Jun 2021"
                        endDate="Jul 2021"
                        tags={["Clojure", "CSV", "Data Processing"]}
                    />
                    <Item 
                        title={t('roles.developer')}
                        company="Lupo S.A."
                        location="Araraquara, São Paulo"
                        description={t('companies.lupo.description')}
                        startDate="Jan 2021"
                        endDate="May 2021"
                        tags={["Clojure","Bash", "Babashka", "CLI", "JVM", "Linux"]}
                    />
                </div>
            </div>
        </div>
    )
}

function Item(props: {
    title: string
    company: string
    location: string
    description: string
    startDate: string
    endDate: string
    tags: string[]
}) {
    return (
        <div className="relative">
            {/* Timeline dot */}
            <div className="absolute left-8 lg:left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-red-500 rounded-full" />
            
            {/* Card */}
            <div className="ml-16 lg:ml-[calc(25%+1rem)] w-[calc(100%-4rem)] lg:w-[70%] p-6 bg-white dark:bg-zinc-900/50 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-zinc-200 dark:border-zinc-800">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="font-bold text-lg">{props.title}</h3>
                        <p className="text-zinc-600 dark:text-zinc-400">{props.company}</p>
                    </div>
                    <div className="text-sm text-zinc-500 dark:text-zinc-500">
                        {props.startDate} - {props.endDate}
                    </div>
                </div>
                
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                    📍 {props.location}
                </p>
                
                <p className="text-sm mb-4">
                    {props.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                    {props.tags.map((tag) => (
                        <span 
                            key={tag}
                            className="px-2 py-1 text-xs rounded-full bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}