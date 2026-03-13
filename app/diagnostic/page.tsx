import Header from "../components/Header";
import Footer from "../components/Footer";
import AnimatedSection from "../components/AnimatedSection";

export default function DiagnosticPage() {
  const benefits = [
    {
      title: "Audit complet",
      description: "Évaluation détaillée de votre stratégie de formation actuelle",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
    },
    {
      title: "Recommandations personnalisées",
      description: "Solutions adaptées à votre secteur et à vos objectifs",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Plan d'action",
      description: "Feuille de route claire pour optimiser votre formation",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
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
                Calculez votre score<br />de formation professionnelle
              </h1>
              <p className="text-xl text-white/70 font-light max-w-2xl">
                Évaluez la performance de votre stratégie de formation et identifiez 
                les leviers d'amélioration.
              </p>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="bg-[#f8f9fa] rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#cfd4db] flex items-center justify-center text-[#1a1a1a] mb-6">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-medium text-[#1a1a1a] mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 font-light">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="bg-[#f8f9fa] rounded-2xl p-8 md:p-12">
                <h2 className="text-3xl font-light text-[#1a1a1a] mb-6">
                  Vous avez une question ou un projet en réflexion ?
                </h2>
                <p className="text-lg text-gray-600 font-light mb-8 max-w-2xl">
                  Mentivis vous aide à définir une stratégie claire et à mettre en place 
                  des solutions concrètes, adaptées à votre secteur d'activité et à la 
                  réalité de votre organisation.
                </p>
                <form className="space-y-6 max-w-xl">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Votre nom
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#1a1a1a] transition-colors duration-300"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Votre e-mail
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#1a1a1a] transition-colors duration-300"
                      placeholder="votre@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Votre message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#1a1a1a] transition-colors duration-300 resize-none"
                      placeholder="Parlez-nous de votre projet..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-8 py-4 bg-[#1a1a1a] text-white rounded-xl font-medium hover:bg-[#333] transition-colors duration-300"
                  >
                    Envoyer
                  </button>
                </form>
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-6">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-light text-[#1a1a1a] mb-6">
                  Pourquoi évaluer votre stratégie de formation ?
                </h2>
                <p className="text-lg text-gray-600 font-light mb-8">
                  La formation professionnelle est un levier majeur de performance pour 
                  les organisations. Une évaluation rigoureuse vous permet d'optimiser 
                  vos investissements et de maximiser l'impact sur vos collaborateurs.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  {[
                    "Identifier les gaps de compétences",
                    "Optimiser votre budget formation",
                    "Mesurer le ROI de vos actions",
                    "Alignez formation et stratégie business",
                    "Anticiper les évolutions réglementaires",
                    "Améliorer l'engagement des collaborateurs",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#cfd4db] mt-2 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="py-20 bg-[#f8f9fa]">
            <div className="max-w-7xl mx-auto px-6 text-center">
              <h2 className="text-3xl font-light text-[#1a1a1a] mb-6">
                Prêt à évaluer votre formation ?
              </h2>
              <p className="text-lg text-gray-600 font-light mb-8 max-w-2xl mx-auto">
                Contactez-nous pour bénéficier d'un diagnostic personnalisé et 
                découvrir comment améliorer votre stratégie de formation.
              </p>
              <a
                href="/contact"
                className="inline-block px-8 py-4 bg-[#1a1a1a] text-white rounded-full font-medium hover:bg-[#333] transition-colors duration-300"
              >
                Demander un diagnostic
              </a>
            </div>
          </section>
        </AnimatedSection>
      </main>
      <Footer />
    </>
  );
}
