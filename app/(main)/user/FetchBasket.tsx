import { createClient} from "@/utils/supabase/server";
import { BasketItem } from "@/types/Basket";

export default async function Basket() {
	const supabase = createClient();

	const { data : { user }, error } = await supabase.auth.getUser();

	if (error || !user) {
		return { error: 'Usuário não autenticado' }
	}

	let { data : profile } : any = await supabase
		.from('profiles')
		.select('basket')
		.eq('id', user.id)

	if (!profile.length) {
		return { error: 'Perfil não encontrado'}
	}

	return profile[0].basket.map((item : BasketItem) => {
		return {
			id: item.id,
			name: item.name,
			price: item.price,
			quantity: item.quantity
		}
	})
}