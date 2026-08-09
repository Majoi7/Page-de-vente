import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Méthode non autorisée" });
  }

  const { email, first_name, last_name, phone } = req.body;

  if (!email || !first_name || !last_name || !phone?.number || !phone?.country_code) {
    return res.status(400).json({ message: "Champs requis manquants" });
  }

  try {
    const response = await fetch("https://api.chariow.com/v1/checkout", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.CHARIOW_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product_id: process.env.CHARIOW_PRODUCT_ID,
        email,
        first_name,
        last_name,
        phone,
        redirect_url: `${process.env.SITE_URL}/merci?sale={sale_id}`,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      return res.status(response.status).json(result);
    }

    return res.status(200).json(result);
  } catch {
    return res.status(500).json({ message: "Erreur serveur lors du paiement" });
  }
}