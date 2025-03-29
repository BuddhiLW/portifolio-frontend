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
		<Carousel opts={{ loop: true }} className="w-full min-h-[400px]">
			<CarouselContent>
				{images.map((image, index) => (
					<CarouselItem key={index} className="relative h-96 w-full">
						<Image
							src={image}
							alt={`${title} - Image ${index + 1}`}
							fill
							className="object-cover"
							sizes="(max-width: 640px) 100vw, (min-width: 641px) 50vw" // Responsive sizes
						/>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious className="bg-white rounded-full p-2 shadow" />
			<CarouselNext className="bg-white rounded-full p-2 shadow" />
		</Carousel>
	)
}

export default SharedCarousel
