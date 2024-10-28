import { createClient} from "@/utils/supabase/server";
import { Wine } from "@/types/Wine";

export const supabase = createClient()

// Connected user logic

export const User	=	async () => {
	const {data: user, error} = await supabase.auth.getUser()

	if (error) {
		throw new Error(error.message)
	}

	return user
}


// Admin logic

export const DeleteUser = async (uuid : string) => {
	const {error} = await supabase.auth.admin.deleteUser(uuid)

	if (error) {
		throw new Error(error.message)
	}
}

export const MakeAdmin = async (uuid : string) => {
	const {error} = await supabase.auth.admin.updateUserById(uuid, {role: 'admin'})

	if (error) {
		throw new Error(error.message)
	}
}

// Wines logic

export const Wines = async () => {
	const {data: wines, error} = await supabase.from('wines').select('*')

	if (error) {
		throw new Error(error.message)
	}

	return wines
}

export const AddWine = async (wine : Wine) => {
	const {data, error} = await supabase.from('wines').insert(wine)

	if (error) {
		throw new Error(error.message)
	}

	return data
}

export const UpdateWine = async (id: number, wine: Wine) => {
	const {data, error} = await supabase.from('wines').update(wine).match({id})

	if (error) {
		throw new Error(error.message)
	}

	return data
}

export const DeleteWine = async (id: number) => {
	const {data, error} = await supabase.from('wines').delete().match({id})

	if (error) {
		throw new Error(error.message)
	}

	return data
}