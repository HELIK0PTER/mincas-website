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
				.select('name')
				.order('rating', { ascending: false , nullsFirst: false})
				.limit(3)

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
        grid gris-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5
      `}
		>
			{
				popularWines.map((wine: any) => {
					return (
						<>
							<div
								key={wine.name}
								className={`
									flex flex-col justify-between items-center
									h-full
								`}
							>
								<Image
									alt={wine.name}
									src={
										`https://yuubtmxvlqkzydwjxuhf.supabase.co/storage/v1/object/public/photos/wine-photos/${wine.name.toLowerCase().replaceAll(" ", "_")}.jpg`
									}
									className={`
										object-cover
										rounded-xl
									`}
								/>
								<div
									className={`
										flex flex-col items-center gap-5 
										font-medium text-lg
									`}
								>
									<p className={`text-center`}>
										{wine.name}
									</p>
								</div>
							</div>
						</>
					);
				})
			}
		</div>
	);
};

export default PopularWines;