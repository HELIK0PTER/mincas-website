"use client"

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'

import {createClient} from "@/utils/supabase/client";

import {
	Carousel, CarouselApi,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel"

type wine = {
	name: string,
	image_url: string,
}

function MainPageCarousel(
	{
		...props
	}:
		{

		}
) {

	const [api, setApi] = useState<CarouselApi | null>(null)

	const [loading, setLoading] = useState(true)
	const [wines, setWines] = useState([]) as any[]

	const supabase = createClient();

	const getWines = useCallback(async () => {
			try {
				setLoading(true)

				let { data: wines, error, status } = await supabase
					.from('wines')
					.select("name, image_url")

				if (error && status !== 406) {
					throw error
				}

				if (wines) {
					setWines(wines)
				}
			} catch (error) {
				alert("Error loading wines data ...")
			} finally {
				setLoading(false)
			}
		}, [supabase])

	useEffect(() => {
		getWines()
	}, [supabase])


	return (
		<div className={`w-full bg-primary rounded-xl shadow-inner shadow-black`}>
			<Carousel
				className={`flex justify-center items-center relative h-[400px]`}
				setApi={setApi}
			>
				<CarouselContent className={`h-[380px]`}>
					{loading ? (
						<div className={`flex justify-center items-center gap-3 h-[380px] min-w-44 w-full`}>
							<div>Loading </div>
							<div className="lds-dual-ring inline-block relative" />
						</div>
					) : (
						<>
							{wines.map((wine: wine, index: number) => (
								<CarouselItem key={index} className={`flex justify-center items-center h-[380px]`}>
									<Image priority={true} alt={wine.name} src={wine.image_url} width={500} height={500}
									       className={`h-full w-auto rounded-xl select-none`}/>
								</CarouselItem>
							))}
						</>
					)
					}

				</CarouselContent>
				<CarouselPrevious className={`absolute top-1/2 left-5 bg-secondary`} />
				<CarouselNext className={`absolute top-1/2 right-5 bg-secondary`} />
			</Carousel>
		</div>
	);
}

export default MainPageCarousel;
