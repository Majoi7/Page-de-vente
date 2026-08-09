import { useState, FormEvent } from "react";

export default function CTAFinal() {
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
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
        body: JSON.stringify({ email, first_name: prenom, last_name: nom }),
      });

      const result = await response.json();

      if (!response.ok) {
        setErreur(result.message || "Une erreur est survenue.");
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