import Link from "next/link"

export default function Menu() {
	return (
		<nav className="flex gap-6 ml-4">
			<MenuItem href="/" text="Home" selected={true} />
			<MenuItem href="/projects/1" text="Projects" selected={false} />
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
			{props.text}
		</Link>
	)
}
