import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

export const metadata = {
  title: "Offres Mentivis - Conseil et Transformation Éducative",
  description: "Conseil et transformation éducative. Talent OS, Corporate Campus, Skills Factory, Education Rescue, Investor Lab.",
};

const solutions = [
  {
    title: "TALENT OS",
    subtitle: "Pilotez par les compétences, pas par l'organigramme",
    description: "Les fiches de poste figées dans le marbre. Les talents cachés qui s'ignorent. Les compétences critiques que vous ne pouvez pas recruter.",
    impact: "–40% de délais de recrutement • Mobilité interne multipliée par 3 • Zéro dépendance aux pénuries de talents",
  },
  {
    title: "SKILLS FACTORY",
    subtitle: "Un référentiel vivant qui parle à toute l'entreprise",
    description: "Le RH dit « autonomie », le manager dit « débrouillardise », le candidat comprend « démerde-toi ». Résultat : incompréhensions, mauvais recrutements.",
    impact: "Un seul référentiel • Utilisé partout • Toujours à jour • Enfin compris par tous",
  },
  {
    title: "TRANSITION WORKFORCE",
    subtitle: "Transformez sans casse. C'est possible.",
    description: "Fermeture de site. Digitalisation brutale. Réorganisation. Le mot « plan social » plane dans les couloirs.",
    impact: "90% de reclassement interne • Climat social préservé • Transformation accélérée de 6 mois",
  },
  {
    title: "CORPORATE CAMPUS",
    subtitle: "Votre campus interne, clé en main",
    description: "Vous formez beaucoup mais ça part dans tous les sens. Vous rêvevez d'avoir votre propre école.",
    impact: "Une machine à produire les talents dont vous avez besoin • 100% adaptés à votre culture",
  },
  {
    title: "ROI FORMATION",
    subtitle: "Et si votre formation générait du cash ?",
    description: "Votre académie coûte cher. Très cher. Les budgets formation explosent. Le COMEX vous regarde bizarrement.",
    impact: "Formation autofinancée voire profitable • Budget formation multiplié par 2 sans demander un euro de plus",
  },
  {
    title: "EDUCATION RESCUE",
    subtitle: "Redressement d'école : du rouge au vert",
    description: "Inscriptions en chute libre. Réputation ternie. Équilibre financier fragile.",
    impact: "Augmentations d'inscriptions significatives • Rentabilité restaurée • Diplômés qui trouvent un job",
  },
  {
    title: "INVESTOR EDUCATION LAB",
    subtitle: "Investir dans l'éducation en connaissance de cause",
    description: "Cette école a du potentiel. Mais est-ce que le business model tient la route ? Les diplômes ont-ils de la valeur ?",
    impact: "Décision éclairée • Risques maîtrisés • Plan d'action jour 1 prêt",
  },
];

const pillars = [
  { title: "Vision stratégique", description: "Alignement avec vos objectifs d'établissement" },
  { title: "Excellence pédagogique", description: "Innovation dans les méthodes d'enseignement" },
  { title: "Efficacité technologique", description: "Outils digitaux au service de l'apprentissage" },
  { title: "Accompagnement humain", description: "Change management des équipes et apprenants" },
];

export default function OffresPage() {
  return (
    <main className="min-h-screen bg-[#1a1a1a]">
      <Header />
      
      <section className="pt-32 pb-16 bg-[#2d2d2d]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-light text-white mb-6">
            Les offres consulting & déploiement
          </h1>
          <p className="text-lg text-[#cfd4db] font-light leading-relaxed">
            Nous sommes votre partenaire pour transformer et optimiser votre institution éducative, de la stratégie à la mise en œuvre.
            Nous vous offrons un accompagnement complet et sur mesure pour chaque aspect de votre projet.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
              Nos solutions. Transformez vos compétences en avantage stratégique
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-[#2d2d2d] rounded-xl p-8 hover:bg-[#363636] transition-colors"
              >
                <h3 className="text-xl font-medium text-white mb-2">{solution.title}</h3>
                <p className="text-[#cfd4db] text-sm font-light mb-4">{solution.subtitle}</p>
                <p className="text-white/70 text-sm font-light mb-6 leading-relaxed">
                  {solution.description}
                </p>
                <div className="border-t border-[#cfd4db]/20 pt-4">
                  <p className="text-[#cfd4db] text-xs font-light">{solution.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#2d2d2d]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
              Pourquoi 4D Quadra ?
            </h2>
            <p className="text-[#cfd4db] font-light max-w-2xl mx-auto">
              La méthodologie Mentivis 4D Quadra est le fondement de notre approche.
              Elle tire son nom des 4 dimensions essentielles de toute transformation réussie dans l'éducation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full border border-[#cfd4db]/30 flex items-center justify-center">
                  <span className="text-2xl font-light text-[#cfd4db]">{index + 1}</span>
                </div>
                <h3 className="text-white font-medium mb-2">{pillar.title}</h3>
                <p className="text-white/60 text-sm font-light">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-light text-white mb-6">Contactez-nous</h2>
          <p className="text-[#cfd4db] font-light mb-8">
            Notre promesse : Un premier échange stratégique offert pour comprendre vos enjeux et identifier les leviers de valeur prioritaires.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#cfd4db] text-[#1a1a1a] px-8 py-3 text-sm font-medium rounded-full hover:bg-[#a8aeb8] transition-colors"
          >
            Planifier une consultation
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
