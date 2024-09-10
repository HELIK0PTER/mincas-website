'use server'

import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'

export async function login(formData: FormData) {
  const supabase = createClient()

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  // Vérification des champs vides
  if (!data.email || !data.password) {
    redirect('/auth/login?error=' + encodeURIComponent('Email e senha são obrigatórios'))
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    redirect('/auth/login?error=' + encodeURIComponent(error.message))
  }
  revalidatePath('/', 'layout')
  redirect('./')
}

export async function signup(formData: FormData) {
  const supabase = createClient()

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string
  }

  // Vérification des champs vides
  if (!data.email || !data.password) {
    redirect('/auth/signup?error=' + encodeURIComponent('Email e senha são obrigatórios'))
  }

  // Vérification de la force du mot de passe
  if (data.password.length < 8) {
    redirect('/auth/signup?error=' + encodeURIComponent('A senha deve ter pelo menos 8 caracteres'))
  }

  const { data : signdata , error } = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
    options: {
      emailRedirectTo : 'http://localhost:3000/auth/login?message=' + encodeURIComponent('Pronto ! Você pode fazer login agora.'),
    }
  })

  if (error) {
    redirect('/auth/signup?error=' + encodeURIComponent(error.message))
  }

  console.log("user: " + signdata.user)
  console.log("session: " + signdata.session)


  if (signdata.user) {
    // redirect('/auth/signup?error=' + encodeURIComponent('Essa conta já existe. Faça login.'))
  }
  
  // Révalidation du chemin après inscription réussie
  // redirect('/auth/signup?message=' + encodeURIComponent('Conta criada com sucesso! Valide seu email para fazer login.'))
}

// Fonction de déconnexion
export async function logout() {
  const supabase = createClient()
  await supabase.auth.signOut()
  revalidatePath('/')
  redirect('/')
}