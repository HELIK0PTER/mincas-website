import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  console.log("Gestionnaire de callback d'authentification");

  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const origin = requestUrl.origin;
  const redirectTo = requestUrl.searchParams.get("redirect_to");

  if (!code) {
    console.error("Code d'authentification manquant");
    return NextResponse.redirect(`${origin}/auth/error?error=missing_code`);
  }

  try {
    const supabase = createClient();
    const { data, error } = await supabase.auth.exchangeCodeForSession(code);

    if (error) {
      console.error("Erreur lors de l'échange du code:", error.message);
      return NextResponse.redirect(`${origin}/auth/error?error=${encodeURIComponent(error.message)}`);
    }

    if (!data.session) {
      console.error("Session non créée");
      return NextResponse.redirect(`${origin}/auth/error?error=session_creation_failed`);
    }

    let redirectUrl = origin;
    if (redirectTo) {
      try {
        const redirectToUrl = new URL(redirectTo, origin);
        if (redirectToUrl.origin === origin) {
          redirectUrl = redirectToUrl.toString();
        }
      } catch (e) {
        console.warn("URL de redirection invalide:", redirectTo);
      }
    }

    return NextResponse.redirect(redirectUrl);
  } catch (e) {
    console.error("Erreur inattendue dans le gestionnaire de callback:", e);
    return NextResponse.redirect(`${origin}/auth/error?error=unexpected_error`);
  }
}