"use server"
import {createClient} from "@/utils/supabase/server";

export const addToCart = async (wineId : number) => {
	const supabase = createClient()

	console.log("wineId: ", wineId)

	const { error } = await supabase
		.from('cart')
		.insert({product_id: wineId}
		)

	// reload the page to update the cart
	console.log("res: ", error)

	return error
}