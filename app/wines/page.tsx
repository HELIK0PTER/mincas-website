"use client"

import React, {useCallback, useEffect, useState} from 'react';
import Background from "@/components/organisms/Background";
import {createClient} from "@/utils/supabase/client";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
	const supabase = createClient();

	const [loading, setLoading] = useState(true)
	const [wines, setWines] = useState([]) as any[];

	const getWines = useCallback(async () => {
		try {
			setLoading(true)
			// select max 10 wines ordered by rating from highest to lowest
			let { data: wines, error, status } = await supabase
				.from('wines')
				.select('id, name, image_url')
				.order('rating', { ascending: false , nullsFirst: false})
				.limit(10)

			if (wines) {
				setWines(wines)
			}
		} catch (error) {
			alert("Error loading wines data ...")
			console.log('error: ', error)
		} finally {
			setLoading(false)
		}
	}, [supabase])

	useEffect(() => {
		getWines().then()
	}, []);

	return (
		<Background>
			<div className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5`}>
				{
					wines.map((wine: any) => {
						return (
							<Link
								key={wine.id}
								className={`bg-white rounded-xl p-4 shadow-md`}
								href={`/wines/${wine.id}`}
							>
								<Image alt={wine.name} src={wine.image_url} width={200} height={200} className={`w-[60%] h-auto`}/>
								<p className={`text-lg font-bold text-primary mt-2`}>{wine.name}</p>
							</Link>
						)
					})
				}
			</div>
		</Background>
	);
};

export default Page;