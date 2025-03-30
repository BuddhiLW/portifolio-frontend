export default interface Message {
	id: string
	content: string
	author: string
	side: "left" | "right"
	icon: string
	projectId: string
	createdAt: Date
	updatedAt: Date
}
