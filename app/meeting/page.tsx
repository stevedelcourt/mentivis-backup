import Header from "../components/Header";
import Footer from "../components/Footer";
import AnimatedSection from "../components/AnimatedSection";

export default function MeetingPage() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen pt-20">
        <AnimatedSection>
          <section className="py-20 bg-[#1a1a1a]">
            <div className="max-w-7xl mx-auto px-6">
              <h1 className="text-5xl md:text-6xl font-light text-white mb-6">
                Prenez rendez-vous avec Mentivis
              </h1>
              <p className="text-xl text-white/70 font-light max-w-2xl">
                Mathias Costes, Partner chez Mentivis. Choisissez le créneau qui vous convient 
                pour un échange rapide et efficace.
              </p>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                  <h2 className="text-3xl font-light text-[#1a1a1a] mb-6">
                    Contact direct
                  </h2>
                  <p className="text-lg text-gray-600 font-light mb-8">
                    Parlez-nous de votre projet. Nous analysons vos besoins, qualifions votre demande 
                    et vous proposons un premier échange pour avancer rapidement et efficacement.
                  </p>
                  <div className="bg-[#f8f9fa] rounded-2xl p-8 mb-8">
                    <h3 className="text-xl font-medium text-[#1a1a1a] mb-4">Mentivis</h3>
                    <p className="text-gray-600 font-light mb-2">
                      60 Rue François 1er<br />
                      75008 Paris
                    </p>
                    <p className="text-gray-600 font-light">
                      <a href="mailto:contact@mentivis.com" className="hover:text-[#1a1a1a]">
                        contact@mentivis.com
                      </a>
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <a
                      href="https://www.linkedin.com/company/mentivis/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white hover:bg-[#333] transition-colors duration-300"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a
                      href="https://x.com/mentivisconseil"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center text-white hover:bg-[#333] transition-colors duration-300"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                  </div>
                </div>

                <div>
                  <div className="bg-[#f8f9fa] rounded-2xl p-8">
                    <h3 className="text-xl font-medium text-[#1a1a1a] mb-6">
                      Envoyez-nous un message
                    </h3>
                    <form className="space-y-6">
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
                          rows={5}
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#1a1a1a] transition-colors duration-300 resize-none"
                          placeholder="Parlez-nous de votre projet..."
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full px-8 py-4 bg-[#1a1a1a] text-white rounded-xl font-medium hover:bg-[#333] transition-colors duration-300"
                      >
                        Envoyer
                      </button>
                      <p className="text-xs text-gray-500 text-center">
                        Ce site est protégé par reCAPTCHA et la Politique de confidentialité de Google.
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="py-20 bg-[#f8f9fa]">
            <div className="max-w-7xl mx-auto px-6">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-light text-[#1a1a1a] mb-6">
                  Votre projet nous intéresse
                </h2>
                <p className="text-lg text-gray-600 font-light mb-8">
                  Mentivis vous accompagne sur les enjeux de croissance, de formation 
                  et de structuration. N'hésitez pas à nous contacter pour discuter de vos besoins.
                </p>
                <a
                  href="mailto:contact@mentivis.com"
                  className="inline-block px-8 py-4 bg-[#1a1a1a] text-white rounded-full font-medium hover:bg-[#333] transition-colors duration-300"
                >
                  Contacter Mentivis
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
