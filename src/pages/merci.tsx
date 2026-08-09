export default function Merci() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-primary text-white">
      <span className="uppercase tracking-widest text-sm text-accent mb-4">
        Paiement confirmé
      </span>
      <h1 className="text-3xl md:text-5xl font-bold max-w-2xl leading-tight">
        Merci pour votre achat
      </h1>
      <p className="mt-6 max-w-xl text-slate-300 text-lg">
        Un e-mail contenant l'accès à votre formation vous a été envoyé. Vérifiez
        aussi vos spams si vous ne le voyez pas dans les prochaines minutes.
      </p>

      {/* Correction : la balise <a> était mal ouverte */}
      <a
        href="/"
        className="mt-10 px-8 py-4 bg-accent rounded-full font-semibold hover:bg-blue-500 transition-colors duration-300"
      >
        Retour à l'accueil
      </a>
    </main>
  );
}