import { useState } from "react";
import type { FormEvent } from "react";

const pays = [
  { iso: "BJ", indicatif: "229", label: "Bénin (+229)" },
  { iso: "CI", indicatif: "225", label: "Côte d'Ivoire (+225)" },
  { iso: "SN", indicatif: "221", label: "Sénégal (+221)" },
  { iso: "CM", indicatif: "237", label: "Cameroun (+237)" },
  { iso: "FR", indicatif: "33", label: "France (+33)" },
  { iso: "US", indicatif: "1", label: "USA (+1)" },
  { iso: "CA", indicatif: "1", label: "Canada (+1)" },
];

export default function CTAFinal() {
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [paysChoisi, setPaysChoisi] = useState("BJ");
  const [telephone, setTelephone] = useState("");
  const [loading, setLoading] = useState(false);
  const [erreur, setErreur] = useState("");

  const handleAchat = async (e: FormEvent) => {
    e.preventDefault();
    setErreur("");
    setLoading(true);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          first_name: prenom,
          last_name: nom,
          phone: {
            number: telephone.replace(/\s+/g, ""),
            country_code: paysChoisi,
          },
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        const messagesErreur = result.errors
          ? Object.values(result.errors).flat().join(" ")
          : result.message;
        setErreur(messagesErreur || "Une erreur est survenue.");
        setLoading(false);
        return;
      }

      switch (result.data.step) {
        case "payment":
          window.location.href = result.data.payment.checkout_url;
          break;
        case "completed":
          window.location.href = "/merci";
          break;
        case "already_purchased":
          setErreur("Vous avez déjà acheté cette formation.");
          setLoading(false);
          break;
        default:
          setLoading(false);
      }
    } catch {
      setErreur("Impossible de contacter le serveur.");
      setLoading(false);
    }
  };

  return (
    <section className="py-24 px-6 bg-soft">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Prêt à passer à l'étape suivante ?
        </h2>
        <p className="text-slate-600 mb-10 leading-relaxed">
          Rejoignez la formation dès aujourd'hui et développez des compétences en design reconnues par les professionnels.
        </p>

        <form onSubmit={handleAchat} className="space-y-4 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Prénom"
              required
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <input
              type="text"
              placeholder="Nom"
              required
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          <input
            type="email"
            placeholder="Adresse e-mail"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-accent"
          />

          <div className="grid grid-cols-[auto_1fr] gap-4">
            <select
              value={paysChoisi}
              onChange={(e) => setPaysChoisi(e.target.value)}
              className="px-3 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-accent bg-white"
            >
              {pays.map((item) => (
                <option key={item.iso} value={item.iso}>
                  {item.label}
                </option>
              ))}
            </select>
            <input
              type="tel"
              placeholder="Numéro de téléphone"
              required
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          {erreur && <p className="text-red-600 text-sm">{erreur}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full px-10 py-4 bg-accent text-white rounded-full font-semibold text-lg hover:bg-blue-500 transition-colors duration-300 disabled:opacity-60"
          >
            {loading ? "Redirection en cours..." : "Acheter la vidéo de formation"}
          </button>
        </form>
      </div>
    </section>
  );
}