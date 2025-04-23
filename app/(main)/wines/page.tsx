import React from "react";

import {createClient} from "@/utils/supabase/client";
import Section from "@/components/templates/Section";
import CatalogItem from "@/components/molecules/CatalogItem";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList, BreadcrumbPage,
	BreadcrumbSeparator
} from "@/components/ui/breadcrumb";

async function getWines() {
	const supabase = createClient();
	const {data, error} = await supabase.from("wines").select("*");
	if (error) throw error;
	return (
		<div className={`my-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5`}>
			{data.map((wine) => (
				<CatalogItem
					key={wine.id}
					id={wine.id}
					name={wine.name}
					price={wine.price}
					image_url={wine.image_url}
				/>
			))}
		</div>
	);
}

export default async function Page() {

	const wines = await getWines();

	return (
		<main>
			<Section id={`wines`}>
				<div className={`absolute top-4 left-0`}>
					<Breadcrumb>
						<BreadcrumbList>
							<BreadcrumbItem>
								<BreadcrumbLink href="/">Home</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator/>
							<BreadcrumbItem>
								<BreadcrumbPage>Catálogo</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>

				</div>
				<div className="w-[70%]">
					{wines}
				</div>
			</Section>
		</main>
	);
};