import Image from "next/image";
import Background from "@/components/organisms/Background";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Home() {
  return (
    <Background>
      <div className={`w-full grid grid-cols-2`}>
        <div className={`flex justify-center items-center bg-red-500`}>
          <Carousel className={`w-[70%]`}>
            <CarouselContent className={` flex items-center`}>
              <CarouselItem>
                <Image alt={`image`} src="/Image6.jpg" width={500} height={500} />
              </CarouselItem>
              <CarouselItem>
                <Image alt={`image`} src="/Image5.jpg" width={500} height={500} />
              </CarouselItem>
              <CarouselItem>
                <Image alt={`image`} src="/Image7.jpg" width={500} height={500} />
              </CarouselItem>
              <CarouselItem>
                <Image alt={`image`} src="/Image8.jpg" width={500} height={500} />
              </CarouselItem>
              <CarouselItem>
                <Image alt={`image`} src="/Image9.jpg" width={500} height={500} />
              </CarouselItem>
              <CarouselItem>
                <Image alt={`image`} src="/Image10.jpg" width={500} height={500} />
              </CarouselItem>
              <CarouselItem>
                <Image alt={`image`} src="/Image12.jpg" width={500} height={500} />
              </CarouselItem>
              <CarouselItem>
                <Image alt={`image`} src="/Image13.jpg" width={500} height={500} />
              </CarouselItem>
              <CarouselItem>
                <Image alt={`image`} src="/Image14.jpg" width={500} height={500} />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div className={`bg-blue-500`}>
          2
        </div>
      </div>
    </Background>
  );
}
