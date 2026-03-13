import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

export const metadata = {
  title: "Mentivis Solutions - Transformation IA & Data",
  description: "Conseil, ingénierie et transformation digitale. IA générative, données, cloud sovereignain.",
};

const services = [
  {
    title: "Services financiers & Assurance",
    description: "Transformation réglementaire (DORA, PSD3, Bâle IV), agents IA de traitement de dossiers, KYC/AML, modernisation de cores bancaires, open banking.",
  },
  {
    title: "Énergie & Utilities",
    description: "Stratégie de numérisation, hébergement HDS, interopérabilité HL7/FHIR, IA diagnostique, conformité MDR, dossier patient augmenté.",
  },
  {
    title: "Industrie & Manufacturing",
    description: "Transformation des processus de production, MES, maintenance prédictive, formation VR sécurité, IoT industriel, convergence OT/IT.",
  },
  {
    title: "Télécoms & Médias",
    description: "Modernisation de plateformes, personnalisation IA, expériences immersives.",
  },
  {
    title: "Secteur public & Défense",
    description: "Souveraineté numérique, transformation de SI critiques, homologation ANSSI, SecNumCloud, dématérialisation de services.",
  },
  {
    title: "Transport & Logistique",
    description: "Optimisation de flotte, prédiction de la demande, maintenance prédictive.",
  },
];

const commitments = [
  {
    title: "Conseil avant tout",
    description: "Nous ne proposons pas de solution avant d'avoir compris le problème. Chaque engagement commence par un diagnostic honnête.",
  },
  {
    title: "Souveraineté totale",
    description: "Vos données restent en France. Vos projets aussi. Zéro sous-traitance offshore, zéro hébergement hors UE.",
  },
  {
    title: "Les mêmes personnes du début à la fin",
    description: "Les consultants qui cadrent sont les ingénieurs qui livrent. Pas de turnover entre la vente et l'exécution.",
  },
  {
    title: "On livre tôt, on itère souvent",
    description: "Premier déploiement en moins de 4 semaines. Nous préférons mettre quelque chose entre vos mains rapidement.",
  },
  {
    title: "Conformité intégrée dès le premier jour",
    description: "RGPD, DORA, NIS2, ISO 27001, PCI-DSS, HDS, EU AI Act. Pas une couche ajoutée à la fin.",
  },
];

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-[#1a1a1a]">
      <Header />
      
      <section className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-light text-white mb-6">
            La transformation digitale, ça se pilote. Ça s'ingénie. Ça dure.
          </h1>
          <p className="text-lg text-[#cfd4db] font-light leading-relaxed">
            Nous accompagnons les organisations françaises dans leurs mutations les plus critiques de la stratégie à la mise en production.
            Une équipe de conseil et d'ingénierie senior, française de bout en bout, qui reste après la livraison.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#2d2d2d]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-12 text-center">
            Nous connaissons votre terrain
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-[#1a1a1a] rounded-xl p-8 hover:bg-[#363636] transition-colors">
                <h3 className="text-xl font-medium text-white mb-4">{service.title}</h3>
                <p className="text-white/70 text-sm font-light leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-12 text-center">
            Nos engagements, ce sur quoi vous pouvez compter
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commitments.map((commitment, index) => (
              <div key={index} className="bg-[#2d2d2d] rounded-xl p-8">
                <h3 className="text-xl font-medium text-white mb-3">{commitment.title}</h3>
                <p className="text-white/70 text-sm font-light leading-relaxed">
                  {commitment.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#2d2d2d]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-light text-white mb-6">
            De la stratégie à la production, sans rupture entre les deux
          </h2>
          <div className="space-y-8 text-left">
            <div className="flex gap-6">
              <div className="w-12 h-12 flex-shrink-0 rounded-full bg-[#cfd4db] text-[#1a1a1a] flex items-center justify-center font-medium">
                01
              </div>
              <div>
                <h3 className="text-white font-medium mb-2">Audit et cadrage stratégique</h3>
                <p className="text-white/70 text-sm font-light">Nous commençons par écouter et comprendre votre contexte, vos contraintes réglementaires, vos priorités métiers et vos risques réels.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 flex-shrink-0 rounded-full bg-[#cfd4db] text-[#1a1a1a] flex items-center justify-center font-medium">
                02
              </div>
              <div>
                <h3 className="text-white font-medium mb-2">Conseil et sprints</h3>
                <p className="text-white/70 text-sm font-light">Nos consultants et ingénieurs travaillent ensemble, pas en séquence. Vous voyez le produit évoluer à chaque sprint.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 flex-shrink-0 rounded-full bg-[#cfd4db] text-[#1a1a1a] flex items-center justify-center font-medium">
                03
              </div>
              <div>
                <h3 className="text-white font-medium mb-2">Déploiement, transfert et support</h3>
                <p className="text-white/70 text-sm font-light">Déploiement sur infrastructure française. Monitoring proactif. Formation de vos équipes. Transfert de compétences documenté.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <a
            href="/contact"
            className="inline-block bg-[#cfd4db] text-[#1a1a1a] px-8 py-3 text-sm font-medium rounded-full hover:bg-[#a8aeb8] transition-colors"
          >
            Parlons de votre projet
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
