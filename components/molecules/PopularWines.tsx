"use client"

import
	React,
{
	useCallback,
	useState,
	useEffect
}
	from 'react';

import {createClient} from "@/utils/supabase/client";

import Image from 'next/image'
 import Loading from "@/components/atoms/Loading";
import Link from "next/link";

const PopularWines = () => {

	const supabase = createClient();

	const [loading, setLoading] = useState(true)
	const [popularWines, setPopularWines] = useState([]) as any[];

	const getPopularWines = useCallback(async () => {
		try {
			setLoading(true)
			// select max 3 wines ordered by rating from highest to lowest
			let { data: wines, error, status } = await supabase
				.from('wines')
				.select('id, name, image_url, price, spare_normal')
				.order('rating', { ascending: false , nullsFirst: false})
				.limit(4)

			if (wines) {
				setPopularWines(wines)
			}
		} catch (error) {
			alert("Error loading wines data ...")
			console.log('error: ', error)
		} finally {
			setLoading(false)
		}
	}, [supabase])

	useEffect(() => {
		getPopularWines().then()
	}, [getPopularWines])

	return (
		<div
			className={`
        grid gris-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5
      `}
		>
			{
				popularWines.map((wine: any) => {
					return (
						<>
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
									{
										loading ? <Loading/> :
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
									}
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
						</>
					);
				})
			}
		</div>
	);
};

export default PopularWines;