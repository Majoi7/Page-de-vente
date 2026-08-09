import type { VercelRequest, VercelResponse } from "@vercel/node";
import { createClient } from "@supabase/supabase-js";

const supabaseAdmin = createClient(
  process.env.SUPABASE_URL as string,
  process.env.SUPABASE_SERVICE_ROLE_KEY as string
);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { event, data } = req.body;

  if (event === "sale.completed") {
    const { customer, product } = data;

    const { error } = await supabaseAdmin.from("achats").insert({
      email: customer?.email,
      prenom: customer?.first_name,
      nom: customer?.last_name,
      produit_id: product?.id,
      produit_nom: product?.name,
      statut: "complete",
    });

    if (error) {
      console.error("Erreur insertion Supabase :", error.message);
    }
  }

  return res.status(200).json({ received: true });
}