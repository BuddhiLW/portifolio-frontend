"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Menu() {
	const path = usePathname()
	
	// Remove language prefix from path for comparison
	const normalizedPath = path.replace(/^\/(en|pt-BR)/, '')

	// Consider both "/" and empty string as home route
	const isHome = normalizedPath === "/" || normalizedPath === ""

	return (
		<nav className="flex gap-6 ml-4">
			<MenuItem href="/" text="Home" selected={isHome} />
			<MenuItem href="/projects/1" text="Projects" selected={normalizedPath.startsWith("/projects")} />
			<MenuItem
				href="https://api.whatsapp.com/send/?phone=5516993401215&text&type=phone_number&app_absent=0"
				text="Contact"
				selected={false}
				newTab={true}
			/>
		</nav>
	)
}

function MenuItem(props: { href: string; text: string; selected: boolean; newTab?: boolean }) {
	return (
		<Link href={props.href} target={props.newTab ? "_blank" : "_self"}>
			<span
				className={`
					flex items-center gap-2 text-sm
					${props.selected 
						? "border-b-4 border-red-600 dark:text-zinc-200 font-medium" 
						: "text-neutral-600 dark:text-zinc-400"
					}
					hover:text-neutral-900 dark:hover:text-zinc-200
					hover:bg-neutral-100 dark:hover:bg-neutral-800
					transition-colors
				`}
			>
				{props.text}
			</span>
		</Link>
	)
}
