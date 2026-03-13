import Header from "../components/Header";
import Footer from "../components/Footer";
import AnimatedSection from "../components/AnimatedSection";

export default function JobsPage() {
  const jobs = [
    {
      ref: "SC-0858",
      title: "Secrétaire Comptable (H/F)",
      location: "Marseille 13001",
      type: "CDI",
      organization: "École Perrin Sainte Trinité",
      context: "L'école Perrin Sainte Trinité, établissement d'enseignement privé, recherche un(e) Secrétaire Comptable en CDI pour assurer l'accueil et la gestion administrative de notre structure.",
      missions: [
        "Gestion Administrative : Aide au processus d'inscription, suivi des dossiers élèves et gestion des effectifs",
        "Comptabilité : Saisie des opérations comptables, rapprochements bancaires, gestion des règlements familles/bourses de cantine",
        "Accueil & Vie de l'Établissement : Accueil physique et téléphonique des familles et fournisseurs",
        "Communication : Traitement du courrier, affichage et transmission des informations internes",
      ],
      profile: [
        "Diplôme de niveau BTS requis",
        "Bonnes connaissances en comptabilité générale",
        "Maîtrise de l'outil informatique",
        "Rigueur, autonomie, discrétion et sens de l'accueil",
        "Adhésion au projet éducatif catholique de l'établissement",
      ],
      conditions: [
        "Contrat : CDI à temps plein",
        "Horaires : Lun, Mar, Jeu, Ven de 07h45 à 11h30 et de 12h00 à 17h45",
        "Rémunération : 2 350 € brut mensuel (Convention Collective EPNL)",
        "Avantages : Congés calqués sur le calendrier scolaire",
        "Prise de poste : 20 août 2026",
      ],
      deadline: "30/06/2026",
    },
  ];

  return (
    <>
      <Header />
      <main className="bg-white min-h-screen pt-20">
        <AnimatedSection>
          <section className="py-20 bg-[#1a1a1a]">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex gap-4 mb-4">
                <a href="/carrieres" className="text-[#cfd4db] hover:text-white text-sm font-light">
                  Carrières
                </a>
                <span className="text-white/30">/</span>
                <span className="text-white/50 text-sm">Jobs</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-light text-white mb-6">
                Jobs chez Mentivis
              </h1>
              <p className="text-xl text-white/70 font-light max-w-2xl">
                Opportunités à temps plein pour façonner l'avenir de l'éducation
              </p>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-6">
              <div className="max-w-3xl mb-16">
                <h2 className="text-3xl font-light text-[#1a1a1a] mb-6">
                  Un cabinet de stratégie qui vous ressemble
                </h2>
                <p className="text-lg text-gray-600 font-light mb-6">
                  Rejoignez une équipe de talents passionnés, déterminés à révolutionner 
                  le secteur de l'éducation. Si vous aspirez à un poste à temps plein 
                  offrant des opportunités de développement, découvrez nos opportunités actuelles.
                </p>
                <p className="text-lg text-gray-600 font-light mb-8">
                  Nous proposons un environnement dynamique, stimulant et résolument 
                  tourné vers l'innovation, où chacun peut évoluer, partager des idées 
                  novatrices et contribuer activement à transformer le monde de l'éducation.
                </p>
                <a
                  href="/carrieres"
                  className="inline-block px-8 py-4 bg-[#1a1a1a] text-white rounded-full font-medium hover:bg-[#333] transition-colors duration-300"
                >
                  Postuler maintenant
                </a>
              </div>

              {jobs.map((job, index) => (
                <div key={index} className="bg-[#f8f9fa] rounded-2xl p-8 md:p-12">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div>
                      <span className="text-sm text-gray-500 font-light">{job.ref}</span>
                      <h3 className="text-2xl font-medium text-[#1a1a1a]">{job.title}</h3>
                    </div>
                    <div className="flex gap-3">
                      <span className="px-4 py-2 bg-[#cfd4db] text-[#1a1a1a] text-sm font-medium rounded-full">
                        {job.type}
                      </span>
                      <span className="px-4 py-2 border border-[#1a1a1a] text-[#1a1a1a] text-sm font-medium rounded-full">
                        {job.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 font-light mb-6">{job.context}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="text-sm font-medium text-[#1a1a1a] mb-3">Missions</h4>
                      <ul className="space-y-2">
                        {job.missions.map((mission, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                            <span className="w-1 h-1 rounded-full bg-[#cfd4db] mt-1.5 flex-shrink-0" />
                            {mission}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-[#1a1a1a] mb-3">Profil recherché</h4>
                      <ul className="space-y-2">
                        {job.profile.map((item, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                            <span className="w-1 h-1 rounded-full bg-[#cfd4db] mt-1.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6 mb-6">
                    <h4 className="text-sm font-medium text-[#1a1a1a] mb-3">Conditions</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                      {job.conditions.map((condition, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-[#cfd4db] mt-1.5 flex-shrink-0" />
                          {condition}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <p className="text-sm text-gray-500">
                      Candidature avant le {job.deadline}
                    </p>
                    <a
                      href="/contact"
                      className="inline-block px-8 py-4 bg-[#1a1a1a] text-white rounded-xl font-medium hover:bg-[#333] transition-colors duration-300"
                    >
                      Candidater
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="py-20 bg-[#f8f9fa]">
            <div className="max-w-7xl mx-auto px-6">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-light text-[#1a1a1a] mb-6">
                  Votre aventure commence ici
                </h2>
                <p className="text-lg text-gray-600 font-light mb-8">
                  Que vous souhaitiez relever de nouveaux défis ou lancer votre carrière, 
                  rejoindre notre équipe est une opportunité unique de faire la différence.
                </p>
                <div className="flex gap-4 justify-center">
                  <a
                    href="/carrieres"
                    className="px-8 py-4 bg-[#1a1a1a] text-white rounded-full font-medium hover:bg-[#333] transition-colors duration-300"
                  >
                    Voir toutes nos opportunités
                  </a>
                  <a
                    href="/contact"
                    className="px-8 py-4 border border-[#1a1a1a] text-[#1a1a1a] rounded-full font-medium hover:bg-[#1a1a1a] hover:text-white transition-colors duration-300"
                  >
                    Nous contacter
                  </a>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </main>
      <Footer />
    </>
  );
}
