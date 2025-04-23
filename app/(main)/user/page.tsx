import React from "react";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function UserPage() {
  const supabase = await createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    redirect("/auth/login");
  }
  const { data: profile } = await supabase
    .from("profiles")
    .select()
    .eq("id", user.id);

  if (!profile) {
    redirect("/auth/login");
  }

  return (
    <div className="bg-secondary dark:bg-primary rounded-lg shadow-md p-6 mx-6">
      <h2 className="text-2xl font-semibold mb-4 text-primary dark:text-secondary">
        Informações do Usuário
      </h2>
      <p className="mb-2">
        <strong>Name:</strong> {profile[0].full_name}
      </p>
      <p className="mb-2">
        <strong>Email:</strong> {profile[0].email}
      </p>
      <p>
        <strong>Último login:</strong>{" "}
        {new Date(user.last_sign_in_at || "").toLocaleString()}
      </p>
    </div>
  );
}
