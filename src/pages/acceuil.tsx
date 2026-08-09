import Hero from "../components/Hero";
import CompetencesGrid from "../components/CompetencesGrid";
import DesignSection from "../components/DesignSection";
import Avantages from "../components/Avantages";
import CTAFinal from "../components/CTAFinal";
import Footer from "../components/Footer";

export default function Acceuil() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <CompetencesGrid />
      <DesignSection />
      <Avantages />
      <CTAFinal />
      <Footer />
    </main>
  );
}