export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-primary text-white">
      <span className="uppercase tracking-widest text-sm text-accent mb-4">
        Formation professionnelle
      </span>
      <h1 className="text-4xl md:text-6xl font-bold max-w-3xl leading-tight">
        Maîtrisez l'art du design et transformez vos idées en créations professionnelles
      </h1>
      <p className="mt-6 max-w-xl text-slate-300 text-lg">
        Une formation vidéo complète pour apprendre les techniques de design utilisées par les professionnels du secteur.
      </p>
      <a
        href="#competences"
        className="mt-10 px-8 py-4 bg-accent rounded-full font-semibold hover:bg-blue-500 transition-colors duration-300"
      >
        Découvrir la formation
      </a>
    </section>
  );
}