import Background from "@/components/organisms/Background";
import {createClient} from "@/utils/supabase/client";
import {price} from "@/utils/functions";
import Image from "next/image";

async function getWine(id: string) {
	const supabase = createClient();

	const {data, error} = await supabase.from("wines").select("*").eq('id', id);
	if (error) throw error;
	return (
		<div className={`my-2`}>
			{data.map((wine) => (
				<div
					key={wine.id}
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
			))}
		</div>
	);
}

export default async function Page({ params }: { params: { id: string } }) {
	const wine = await getWine(params.id);
	return (
		<Background>
			{wine}
		</Background>
	)
}