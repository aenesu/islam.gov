import Image from 'next/image'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export default function BannerCarousel({ items }) {
    return (
        <Carousel className="w-full max-w-xs">
            <CarouselContent>
                    <CarouselItem >
                        <div className="flex flex-col justify-center w-full relative h-[312px]">
                            <h2>Bir Ayet</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta doloremque aliquam voluptates voluptatum architecto molestiae?</p>
                            <h2>Bir Hadis</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima et facere dolorum nobis ut suscipit eligendi in blanditiis facilis saepe doloremque aliquid architecto, necessitatibus eaque pariatur praesentium sint animi nisi.</p>
                        </div>
                    </CarouselItem>
            </CarouselContent>
            <CarouselPrevious  className="-left-5" />
            <CarouselNext className="-right-5" />
        </Carousel>
    )
}