import { createClient } from "./client"

export const getConnection = async () => {

  const supabase = createClient()

  return supabase.auth.getUser() ?? false
}