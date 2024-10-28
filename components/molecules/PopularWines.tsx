import {createClient} from "@/utils/supabase/server";

import Image from 'next/image'
import Link from "next/link";


async function fetchPopularWines() {
	const client = createClient()
	const {data} = await client
		.from('wines')
		.select('id, name, image_url, price, spare_normal')
		.limit(4) as {data: any[], error: any}
	
		if (data)
		return (
		<div 
			className={`
				grid gris-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5
			`}
		>
			{
				data.map((wine: any) => {
					return (
						<Link
							key={wine.name}
							href={`/wines/${wine.id}`}
							className={`
										flex flex-col justify-between items-center
										h-full
										hover:underline hover:underline-offset-2 hover:cursor-pointer
										hover:scale-[1.01]
										`}
						>
							<div
								className={`
												flex justify-center
												h-72
												w-full
											`}
							>
								<Image
									alt={wine.name}
									src={wine.image_url}
									className={`
									rounded-xl
									h-full
									w-auto
									shadow-gray-900 shadow-md
									`}
									width={500}
									height={500}
								/>
							</div>
							<div
								className={`
											flex flex-col items-center gap-0 
											mt-5
											font-medium text-sm
											text-center
										`}
							>
								<p>
									{wine.name}
								</p>
								<p>
									{wine.price} R$
								</p>
								<p className={`mt-3`}>
									Stock : {wine.spare_normal}
								</p>
							</div>
						</Link>
					);
				})
			}
		</div>
	)
	
	else
	return (
		<div className="lds-dual-ring relative"/>
	)
}


export default async  function PopularWines(){

	const popularWines = await fetchPopularWines()

	return (
		<div>
			{popularWines}
		</div>
	);
};