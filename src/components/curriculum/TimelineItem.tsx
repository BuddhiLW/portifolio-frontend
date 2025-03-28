interface TimelineItemProps {
    title: string
    company: string
    location: string
    description: string
    startDate: string
    endDate: string
    tags: string[]
}

export default function TimelineItem(props: TimelineItemProps) {
    return (
        <div className="grid grid-cols-[32px_1fr] sm:grid-cols-[48px_1fr] lg:grid-cols-[96px_1fr] gap-2 sm:gap-4">
            {/* Timeline dot container - perfectly centered */}
            <div className="flex justify-center items-start pl-2 sm:pl-3 lg:pl-5">
                <div className="w-4 h-4 rounded-full bg-red-500" />
            </div>
            
            {/* Card */}
            <div className="p-4 sm:p-6 bg-white dark:bg-zinc-900/50 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-zinc-200 dark:border-zinc-800">
                <TimelineItemHeader title={props.title} company={props.company} startDate={props.startDate} endDate={props.endDate} />
                <TimelineItemBody location={props.location} description={props.description} />
                <TimelineItemTags tags={props.tags} />
            </div>
        </div>
    )
}

function TimelineItemHeader({ title, company, startDate, endDate }: Pick<TimelineItemProps, 'title' | 'company' | 'startDate' | 'endDate'>) {
    return (
        <div className="flex justify-between items-start mb-4">
            <div>
                <h3 className="font-bold text-lg">{title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400">{company}</p>
            </div>
            <div className="text-sm text-zinc-500 dark:text-zinc-500">
                {startDate} - {endDate}
            </div>
        </div>
    )
}

function TimelineItemBody({ location, description }: Pick<TimelineItemProps, 'location' | 'description'>) {
    return (
        <>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                📍 {location}
            </p>
            <p className="text-sm mb-4">
                {description}
            </p>
        </>
    )
}

function TimelineItemTags({ tags }: Pick<TimelineItemProps, 'tags'>) {
    return (
        <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
                <span 
                    key={tag}
                    className="px-2 py-1 text-xs rounded-full bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200"
                >
                    {tag}
                </span>
            ))}
        </div>
    )
} 