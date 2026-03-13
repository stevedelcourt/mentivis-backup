import Header from "../components/Header";
import Footer from "../components/Footer";
import AnimatedSection from "../components/AnimatedSection";

export default function CarrieresPage() {
  const jobs = [
    {
      title: "Consultants en Accréditations et Certifications",
      description: "Accompagner les établissements dans l'obtention de certifications telles que Qualiopi, RNCP ou d'autres habilitations.",
      missions: [
        "Accompagner les établissements dans l'obtention de certifications",
        "Fournir des conseils stratégiques sur les processus d'habilitation",
        "Réaliser des audits internes et élaborer des plans d'amélioration",
      ],
      skills: [
        "Excellente maîtrise des normes et référentiels de certification",
        "Expérience avérée dans la gestion des accréditations",
        "Solides compétences analytiques et rédactionnelles",
      ],
    },
    {
      title: "Concepteurs pédagogiques",
      description: "Concevoir et mettre en place des programmes de formation innovants et engageants.",
      missions: [
        "Concevoir des programmes de formation innovants",
        "Créer des contenus pédagogiques sur mesure",
        "Intégrer des outils numériques et approches pédagogiques modernes",
      ],
      skills: [
        "Expertise solide en ingénierie pédagogique",
        "Maîtrise des méthodes d'apprentissage contemporaines",
        "Créativité et esprit d'innovation",
      ],
    },
    {
      title: "Formateurs certifiés",
      description: "Animer des sessions de formation dans votre domaine d'expertise.",
      missions: [
        "Animer des sessions de formation",
        "Évaluer les apprenants et assurer un suivi pédagogique",
        "Participer à l'amélioration continue des programmes",
      ],
      skills: [
        "Certification Qualiopi ou équivalent (atout)",
        "Expérience dans la formation d'adultes",
        "Excellentes aptitudes en communication",
      ],
    },
    {
      title: "Consultants en stratégie éducative",
      description: "Accompagner les institutions dans le développement de leur offre éducative.",
      missions: [
        "Accompagner les institutions dans leur développement",
        "Concevoir des plans stratégiques",
        "Étudier le marché de l'éducation",
      ],
      skills: [
        "Expérience en conseil stratégique dans l'éducation",
        "Aptitude à formuler des recommandations claires",
        "Esprit analytique et vision prospective",
      ],
    },
    {
      title: "Spécialistes en marketing éducatif",
      description: "Concevoir et déployer des stratégies marketing pour valoriser les programmes.",
      missions: [
        "Concevoir des stratégies marketing innovantes",
        "Piloter les campagnes de communication",
        "Évaluer les performances marketing",
      ],
      skills: [
        "Expérience en marketing digital dans l'éducation",
        "Maîtrise des outils de communication",
        "Esprit créatif et orientation résultats",
      ],
    },
  ];

  const testimonials = [
    {
      quote: "Grâce à l'approche collaborative et au savoir-faire de l'équipe, j'ai pu relever des défis complexes et trouver des solutions efficaces.",
      name: "Vanessa P.",
      role: "Certification Manager",
    },
    {
      quote: "Collaborer avec Mentivis pour intégrer les modèles de langage de grande taille (LLM) et l'intelligence artificielle a été une expérience incroyable.",
      name: "Jean-Philippe R.",
      role: "Architecte systèmes IA",
    },
    {
      quote: "L'approche à la fois créative et stratégique de l'équipe m'a offert l'opportunité de concevoir des campagnes parfaitement ciblées.",
      name: "Florence E.",
      role: "Marketing et campagnes",
    },
  ];

  return (
    <>
      <Header />
      <main className="bg-white min-h-screen pt-20">
        <AnimatedSection>
          <section className="py-20 bg-[#1a1a1a]">
            <div className="max-w-7xl mx-auto px-6">
              <h1 className="text-5xl md:text-6xl font-light text-white mb-6">
                Réseau de talents
              </h1>
              <p className="text-xl text-white/70 font-light max-w-2xl">
                Faites partie du grand réseau d'experts Mentivis
              </p>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-6">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-light text-[#1a1a1a] mb-6">
                  Êtes-vous passionné par la transformation du secteur éducatif ?
                </h2>
                <p className="text-lg text-gray-600 font-light mb-8">
                  Vous possédez une expertise en éducation, technologie, stratégie ou tout autre domaine clé ? 
                  Vous souhaitez collaborer avec des leaders du secteur pour réimaginer l'avenir de l'éducation ? 
                  Nous serions ravis d'échanger avec vous.
                </p>
                <div className="bg-[#f8f9fa] rounded-2xl p-8 mb-12">
                  <h3 className="text-xl font-medium text-[#1a1a1a] mb-6">Ce que nous proposons</h3>
                  <ul className="space-y-4">
                    {[
                      "La flexibilité de travailler sur des projets alignés avec votre domaine d'expertise",
                      "Des opportunités de contribuer à des missions de conseil à fort impact",
                      "Une rémunération attractive, valorisant votre temps et vos compétences",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-600">
                        <span className="w-2 h-2 rounded-full bg-[#cfd4db] mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="/contact"
                  className="inline-block px-8 py-4 bg-[#1a1a1a] text-white rounded-full font-medium hover:bg-[#333] transition-colors duration-300"
                >
                  Soumettre votre profil
                </a>
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="py-20 bg-[#f8f9fa]">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-3xl font-light text-[#1a1a1a] mb-12">
                Rejoignez notre réseau de talents
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {jobs.map((job, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300"
                  >
                    <h3 className="text-xl font-medium text-[#1a1a1a] mb-4">
                      {job.title}
                    </h3>
                    <p className="text-gray-600 font-light mb-6">{job.description}</p>
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-[#1a1a1a] mb-2">Missions :</h4>
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
                      <h4 className="text-sm font-medium text-[#1a1a1a] mb-2">Compétences :</h4>
                      <ul className="space-y-2">
                        {job.skills.map((skill, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                            <span className="w-1 h-1 rounded-full bg-[#cfd4db] mt-1.5 flex-shrink-0" />
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-3xl font-light text-[#1a1a1a] mb-12 text-center">
                Révélez tout votre potentiel !
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {[
                  "Évoluez aux côtés de professionnels passionnés et expérimentés",
                  "Accédez à des missions diversifiées",
                  "Impacter directement la transformation du secteur",
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <div className="w-16 h-16 rounded-full bg-[#cfd4db] mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl font-light text-[#1a1a1a]">{i + 1}</span>
                    </div>
                    <p className="text-gray-600 font-light">{item}</p>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <a
                  href="/contact"
                  className="inline-block px-8 py-4 bg-[#1a1a1a] text-white rounded-full font-medium hover:bg-[#333] transition-colors duration-300"
                >
                  Postuler maintenant
                </a>
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="py-20 bg-[#f8f9fa]">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-3xl font-light text-[#1a1a1a] mb-12">
                Témoignages
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white rounded-2xl p-8">
                    <p className="text-gray-600 font-light italic mb-6">
                      "{testimonial.quote}"
                    </p>
                    <div>
                      <p className="font-medium text-[#1a1a1a]">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-6 text-center">
              <h2 className="text-3xl font-light text-[#1a1a1a] mb-6">
                Vous avez du talent. Nous avons des opportunités.
              </h2>
              <p className="text-lg text-gray-600 font-light mb-8 max-w-2xl mx-auto">
                Rejoignez notre réseau de talents et travaillez sur des projets innovants 
                dans le domaine de l'éducation et de la formation.
              </p>
              <div className="flex gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-[#1a1a1a] text-white rounded-full font-medium hover:bg-[#333] transition-colors duration-300"
                >
                  Nous contacter
                </a>
                <a
                  href="/jobs"
                  className="px-8 py-4 border border-[#1a1a1a] text-[#1a1a1a] rounded-full font-medium hover:bg-[#1a1a1a] hover:text-white transition-colors duration-300"
                >
                  Voir les offres d'emploi
                </a>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </main>
      <Footer />
    </>
  );
}
