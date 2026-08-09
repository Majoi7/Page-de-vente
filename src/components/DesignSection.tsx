export default function DesignSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="uppercase tracking-widest text-sm text-accent">
            Méthode
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            Une approche structurée, étape par étape
          </h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            Chaque module de la formation vous accompagne depuis les bases jusqu'à la réalisation de projets complets, avec des exemples concrets et des exercices pratiques.
          </p>
          <ul className="space-y-4 text-slate-700">
            <li className="flex items-start gap-3">
              <span className="mt-1 w-2 h-2 rounded-full bg-accent" />
              Fondamentaux de la composition et de la couleur
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 w-2 h-2 rounded-full bg-accent" />
              Utilisation professionnelle des outils de design
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 w-2 h-2 rounded-full bg-accent" />
              Construction d'un portfolio solide
            </li>
          </ul>
        </div>
        <div className="h-80 md:h-96 rounded-2xl bg-slate-100 border border-slate-200" />
      </div>
    </section>
  );
}