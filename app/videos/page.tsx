import Header from "../components/Header";
import Footer from "../components/Footer";
import AnimatedSection from "../components/AnimatedSection";

export default function VideosPage() {
  const videos = [
    {
      title: "Le monde à l'envers",
      description: "Changer de perspective, c'est déjà changer la réalité. Mentivis.",
      category: "Campagne",
    },
    {
      title: "Santa School",
      description: "Bienvenue à l'école des Pères Noël : ici se forment ceux qui maîtrisent l'art de faire rêver.",
      category: "Fun",
    },
    {
      title: "Santa Racing",
      description: "Parfois même le Père Noël doit speeder avec sa luge !",
      category: "Fun",
    },
    {
      title: "Cyber Mamie",
      description: "Mentivis vous aide à créer des écoles de cybersécurité. De la pédagogie à l'opérationnel.",
      category: "Communication",
    },
    {
      title: "Tout est possible",
      description: "Quand micro-ondes, canapés et voitures s'empilent dans une tour improbable, tout devient possible.",
      category: "Creativity",
    },
    {
      title: "Opéra Underground",
      description: "Le changement ne prévient pas. Il s'impose. Il transforme. Et il commence ici. Mentivis.",
      category: "Campaign",
    },
    {
      title: "The Waterfall",
      description: "Rien n'est figé. Même la gravité peut céder. Et si l'éducation osait, elle aussi, sortir du cadre ?",
      category: "Creativity",
    },
    {
      title: "The Strategy Rap",
      description: "Qui a dit que le conseil en éducation devait être sérieux et austère ? Chez Mentivis, on bouscule les codes.",
      category: "Fun",
    },
    {
      title: "The Birds",
      description: "Dans un monde d'illusions, où la vérité se dérobe, l'éducation reste notre point d'ancrage.",
      category: "Creativity",
    },
    {
      title: "Les vacances",
      description: "Mentivis is always-on, even during the holidays.",
      category: "Fun",
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
                Mentivis Video Showcase
              </h1>
              <p className="text-xl text-white/70 font-light max-w-2xl">
                Une vitrine immersive de projets à fort impact. Retours d'expérience concrets, 
                témoignages clients et innovations pédagogiques.
              </p>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {videos.map((video, index) => (
                  <div
                    key={index}
                    className="group cursor-pointer"
                  >
                    <div className="aspect-video bg-[#f8f9fa] rounded-2xl mb-4 flex items-center justify-center overflow-hidden">
                      <div className="w-20 h-20 rounded-full bg-[#1a1a1a]/10 flex items-center justify-center group-hover:bg-[#1a1a1a]/20 transition-colors duration-300">
                        <svg className="w-8 h-8 text-[#1a1a1a]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                    <span className="inline-block px-3 py-1 bg-[#cfd4db] text-[#1a1a1a] text-xs font-medium rounded-full mb-2">
                      {video.category}
                    </span>
                    <h3 className="text-xl font-medium text-[#1a1a1a] mb-2 group-hover:text-[#333] transition-colors duration-300">
                      {video.title}
                    </h3>
                    <p className="text-gray-600 font-light text-sm">
                      {video.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="py-20 bg-[#f8f9fa]">
            <div className="max-w-7xl mx-auto px-6">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-light text-[#1a1a1a] mb-6">
                  Une vidéo dit plus que mille mots
                </h2>
                <p className="text-lg text-gray-600 font-light mb-8">
                  Découvrez nos dernières vidéos, nos campagnes impactantes, ainsi que 
                  nos interviews exclusives et diffusions en direct.
                </p>
                <div className="flex gap-4 justify-center">
                  <a
                    href="/contact"
                    className="px-8 py-4 bg-[#1a1a1a] text-white rounded-full font-medium hover:bg-[#333] transition-colors duration-300"
                  >
                    Travailler avec nous
                  </a>
                  <a
                    href="/carrieres"
                    className="px-8 py-4 border border-[#1a1a1a] text-[#1a1a1a] rounded-full font-medium hover:bg-[#1a1a1a] hover:text-white transition-colors duration-300"
                  >
                    Rejoindre l'équipe
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
