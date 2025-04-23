import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const supabase = await createClient();

  // Déconnexion de l'utilisateur
  await supabase.auth.signOut();

  // Redirection vers la page de connexion
  return NextResponse.redirect(
    new URL("/auth/login?message=Voce foi desconnectado com sucesso !", requestUrl.origin),
  );
}
