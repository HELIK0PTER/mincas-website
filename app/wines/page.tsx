import Background from "@/components/organisms/Background";
import {createClient} from "@/utils/supabase/client";
import Image from "next/image";
import Link from "next/link";
import {price} from "@/utils/functions";
import Section from "@/components/templates/Section";

async function getWines() {
	const supabase = createClient();
	const {data, error} = await supabase.from("wines").select("*");
	if (error) throw error;
	return (
		<div className={`my-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5`}>
			{data.map((wine) => (
				<Link key={wine.id} href={`/wines/${wine.id}`}>
					<div
						className={`flex flex-col items-center gap-5 p-5 bg-white rounded-xl shadow-lg h-96 hover:scale-[101%]`}>
						<Image
							alt={wine.name}
							src={wine.image_url}
							width={200}
							height={200}
							className={`w-[60%] h-auto rounded-md`}
						/>
						<div className={`flex flex-1 flex-col justify-start font-medium text-md`}>
							<p className={`text-center font-semibold`}>{wine.name}</p>
							<p className={`text-center`}>{wine.vintage}</p>
							{
								wine.price_reduction > 0 ? (
									<div className={`flex flex-1 flex-col justify-end text-center`}>
										<div><p className={`line-through`}>{price(wine.price)}</p> <p>{price(wine.price * (1 - wine.price_reduction / 100))}</p></div>
									</div>
								) :
									<p className={`flex flex-1 flex-col justify-end text-center`}>{price(wine.price)}</p>
							}
						</div>
					</div>
				</Link>
			))}
		</div>
	);
}

export default async function Page() {

	const wines = await getWines();

	return (
		<main>
			<Section id={`wines`}>
				<div className="w-[70%]">
					{wines}
				</div>
			</Section>
		</main>
	);
};