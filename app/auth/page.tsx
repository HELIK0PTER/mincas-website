import { redirect } from 'next/navigation'
import { createClient, checkConnection } from '@/utils/supabase/server'

/**
 * Cette page va servir à checker si une personne est connectée ou non avec 2 redirections selon le test.
 * Evidemment, toutes les infos de connexion sont récupérées depuis Supabase.
 * Cette page est donc une server-side page qui va checker si une personne est connectée ou non et rediriger en fonction.
 * 
 * @returns Soit la page de connexion, soit les informations de la personne connectée avec un bouton pour se déconnecter.
 */

const AuthCheck = async () => {

  const supabase = createClient()
  const { data, error } = await supabase.auth.getUser()

  data.user ? (
    console.log('User is connected'),
    redirect('/')
  ) : 
  (
    console.log('User is not connected'),
    redirect('/auth/login')
  )
}

export default AuthCheck