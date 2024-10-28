import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

import Basket from './FetchBasket';
import { BasketItem } from '@/types/Basket';

export default async function UserPage() {
  const supabase = createClient();

  const { data: { user }, error } = await supabase.auth.getUser();

  if (error || !user) {
    redirect('/auth/login');
  }
  const { data : profile } : any = await supabase
    .from('profiles')
    .select()
    .eq('id', user.id)

  const basket = await Basket();

  const wines = await supabase
    .from('wines')
    .select('*');

  if (!wines.data) return null;

  const fromatBasket = basket.map((item: BasketItem) => {
    return {
      ...item,
      ...wines.data.find((wine: any) => wine.id === item.id)
    }
  });

  return (
    <div className="bg-secondary dark:bg-primary rounded-lg shadow-md p-6 mx-6">
      <h2 className="text-2xl font-semibold mb-4 text-primary dark:text-secondary">Informações do Usuário</h2>
      <p className="mb-2"><strong>Name:</strong> {profile[0].full_name}</p>
      <p className="mb-2"><strong>Email:</strong> {profile[0].email}</p>
      <p><strong>Último login:</strong> {new Date(user.last_sign_in_at || '').toLocaleString()}</p>
      {/* pour l'instant on va importer ici le panier */}
      {basket && (
        <div>
          <h2 className="text-2xl font-semibold mt-6 mb-4 text-primary dark:text-secondary">Carrinho</h2>
          <ul>
            {basket.map((item: BasketItem, index : any) => (
              <li key={item.id} className="grid grid-cols-3 mb-2">
                <span>{fromatBasket.find((wine: any) => wine.id === item.id).name}</span>
                <span>{item.quantity} x ${fromatBasket.find((wine: any) => wine.id === item.id).price}</span>
                <span>Total: ${Number.parseInt(item.quantity) * fromatBasket.find((wine: any) => wine.id === item.id).price}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {basket &&
        <div className={`grid grid-cols-3`}>
          <p className={`font-bold col-start-3`}>
            Total: ${basket.reduce((acc: number, item: BasketItem) => {
              return acc + Number.parseInt(item.quantity) * fromatBasket.find((wine: any) => wine.id === item.id).price;
            }, 0)}
          </p>
        </div>
      }
    </div>
  );
}
