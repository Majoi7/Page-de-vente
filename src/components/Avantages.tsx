const avantages = [
  { titre: "Accès à vie", description: "Consultez la formation autant de fois que nécessaire, sans limite de temps." },
  { titre: "Contenu structuré", description: "Des modules progressifs pensés pour un apprentissage efficace." },
  { titre: "Support dédié", description: "Un accompagnement pour répondre à vos questions tout au long du parcours." },
];

export default function Avantages() {
  return (
    <section className="py-24 px-6 bg-primary text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
        {avantages.map((item, index) => (
          <div key={index} className="px-4">
            <h3 className="text-xl font-semibold mb-3">{item.titre}</h3>
            <p className="text-slate-300 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}