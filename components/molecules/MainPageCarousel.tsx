import Image from 'next/image'

import {createClient} from "@/utils/supabase/client";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel"

type wine = {
	name: string,
	image_url: string,
}

async function fetchWines() {
	const client = createClient()
	const {data, error} = await client
		.from('wines')
		.select('name, image_url')
		.limit(5) as {data: wine[], error: any}
	return (

		<Carousel
			className={`flex justify-center items-center relative h-full w-full rounded-xl`}
			opts={{
				align: 'center',
				loop: true,
			}}
		>
			<CarouselContent className={`relative z-30 rounded-xl h-[350px] md:h-[380px]`}>
				{data.map((wine: wine, index: number) =>
					(
						<CarouselItem
							key={index}
							className={`basis-00 px-3 z-50 flex justify-center items-center h-full rounded-xl`}

						>
							{
                  <Image priority={true}
                         alt={wine.name}
                         src={wine.image_url}
                         width={500} height={500}
                         className={`h-[320px] md:h-[350px] w-auto rounded-xl select-none`}
                  />
								??
                  <div className="lds-dual-ring relative"/>
							}

						</CarouselItem>
					)
				)}
			</CarouselContent>
			<CarouselPrevious className={`z-50 text-secondary absolute scale-125 top-1/2 left-5 bg-primary`}/>
			<CarouselNext className={`z-50 text-secondary absolute scale-125 top-1/2 right-5 bg-primary`}/>
		</Carousel>
	)
}

async function MainPageCarousel () {

	const wines = await fetchWines()

	return (
		<div
			// box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
			className={`
				bg-primary rounded-xl
				w-full
				relative
			`}
		>
			<div
				// this will be the shadow as an absolute attribute
				className={`
					absolute
					top-0 bottom-0 left-0 right-0
					shadow-[inset_0_2px_5px_1px_rgba(0,0,0,5)]
					z-40
					rounded-xl
					select-none
					pointer-events-none
					`}
			/>
			{wines}
		</div>
	);
}

export default MainPageCarousel;