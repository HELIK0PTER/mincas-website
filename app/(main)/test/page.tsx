import React from 'react';
import {getStripeProducts, getStripePriceByProduct} from "@/utils/stripe/utils";

const Page = async () => {

	const stripeProducts = await getStripeProducts();

	const getStripePrice = async (productId: string) => {
		const priceData = await getStripePriceByProduct(productId);
		return priceData.data[0].unit_amount / 100;
	}

	return (
		<div className={`flex flex-col items-center mt-4`}>
			{stripeProducts.data.map((product) => (
				<div key={product.id} className={`bg-secondary p-4 rounded-md`}>
					<h1 className={`font-bold text-xl text-primary`}>{product.name}</h1>
					<p className={`text-gray-600`}>R$ {getStripePrice(product.id)}</p>
					<p className={`text-center`}>{product.description}</p>
				</div>
			))
			}
		</div>
	);
};

export default Page;