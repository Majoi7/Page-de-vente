const competences = [
  {
    titre: "Identité visuelle",
    description: "Création de logos, chartes graphiques et univers de marque cohérents.",
  },
  {
    titre: "Interfaces UI/UX",
    description: "Conception d'interfaces web et mobile modernes, claires et ergonomiques.",
  },
  {
    titre: "Design print",
    description: "Réalisation de supports imprimés : flyers, affiches, packaging.",
  },
  {
    titre: "Réseaux sociaux",
    description: "Création de visuels adaptés aux formats Instagram, LinkedIn et Facebook.",
  },
  {
    titre: "Motion design",
    description: "Animation de logos et de contenus visuels pour vidéos et présentations.",
  },
  {
    titre: "Direction artistique",
    description: "Structuration de projets visuels cohérents du concept à la livraison finale.",
  },
];

export default function CompetencesGrid() {
  return (
    <section id="competences" className="py-24 px-6 bg-soft">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <span className="uppercase tracking-widest text-sm text-accent">
          Ce que vous allez apprendre
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-4">
          Les compétences couvertes dans la formation
        </h2>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {competences.map((item, index) => (
          <div
            key={index}
            className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-slate-100"
          >
            <h3 className="text-xl font-semibold mb-3">{item.titre}</h3>
            <p className="text-slate-600 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}