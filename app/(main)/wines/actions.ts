"use server"
import {createClient} from "@/utils/supabase/server";

export const addToCart = async (wineId : number, quantity? : number) => {
	const supabase = await createClient()

	console.log("wineId: ", wineId)

	const { data : { user } } = await supabase.auth.getUser()

	const { error } = await supabase
		.from('cart')
		.insert([
			{
				user_id: user?.id,
				wine_id: wineId,
				quantity: quantity || 1
			}
		])

	// reload the page to update the cart
	console.log("res: ", error)

	return error
}