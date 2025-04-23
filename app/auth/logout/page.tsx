"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function LogoutPage() {
  const supabase = await createClient();

  // Sign out the user
  await supabase.auth.signOut();

  // Redirect to login page
  redirect(
    "/auth/login?message=" +
      encodeURIComponent("Voce foi desconnectado com sucesso !")
  );
}
