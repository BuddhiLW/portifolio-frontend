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
		<nav className="flex gap-2 ml-2">
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
					flex items-center text-sm px-2 py-2 
					rounded-full
					${props.selected 
						? "bg-black/10 dark:bg-white/10 font-medium border-b-2 border-red-600" 
						: "hover:bg-black/5 dark:hover:bg-white/5"
					}
					hover:opacity-100
					transition-all duration-300
				`}
			>
				{props.text}
			</span>
		</Link>
	)
}
