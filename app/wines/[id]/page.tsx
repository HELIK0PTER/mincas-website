"use client"

import Background from "@/components/organisms/Background";
import {createClient} from "@/utils/supabase/client";
import {useCallback, useEffect, useState} from "react";
import Image from "next/image";

export default function Page({ params }: { params: { id: string } }) {
	const supabase = createClient();

	const [loading, setLoading] = useState(true)
	const [wine, setWine] = useState({}) as any;

	const getWine = useCallback(async () => {
		try {
			setLoading(true)
			// select wine by id
			let { data: wine, error, status } = await supabase
				.from('wines')
				.select('name, image_url')
				.eq('id', params.id)
				.single()

			if (wine) {
				setWine(wine)
			}
		} catch (error) {
			alert("Error loading wine data ...")
			console.log('error: ', error)
		} finally {
			setLoading(false)
		}
	}, [supabase, params.id])

	useEffect(() => {
		getWine().then()
	}, []);

	return (
		<Background>
			<div>
				<h1>{wine.name}</h1>
				<Image alt={wine.name} src={wine.image_url} width={200} height={200} className={`w-[60%] h-auto`}/>
			</div>
		</Background>
	)
}