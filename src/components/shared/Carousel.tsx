import React from "react"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel" // Import the ui Carousel
import Image from "next/image"

interface SharedCarouselProps {
	images: string[] // Array of image URLs
	title: string // Project title for alt text
}

const SharedCarousel: React.FC<SharedCarouselProps> = ({ images, title }) => {
	return (
		<Carousel opts={{ loop: true }}>
			<CarouselContent>
				{images.map((image, index) => (
					<CarouselItem key={index} className="relative h-96 w-full">
						<Image
							src={image}
							alt={`${title} - Image ${index + 1}`}
							fill
							className="object-cover"
						/>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	)
}

export default SharedCarousel
