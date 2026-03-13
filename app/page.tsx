"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const IMAGES = {
  logo: "https://mentivis.com/wp-content/uploads/2024/12/logo_noir300.png",
  logoWhite: "https://mentivis.com/wp-content/uploads/2024/12/logo_noir300.png",
  office: "https://mentivis.com/wp-content/uploads/2026/01/officez-1536x1024.webp",
  woman: "https://mentivis.com/wp-content/uploads/2024/11/dark_woman-1536x1198.webp",
  menti4: "https://mentivis.com/wp-content/uploads/2026/03/menti4-1536x1030.webp",
  investor: "https://mentivis.com/wp-content/uploads/2026/03/investor-1536x1024.webp",
  team: "https://mentivis.com/wp-content/uploads/2024/11/pexels-divinetechygirl-1181712-1-1024x683.jpg",
};

const heroSlides = [
  {
    title: "Talent OS",
    subtitle: "Pilotez par les compétences et non par la hiérarchie",
    image: IMAGES.office,
  },
  {
    title: "Pôle formation",
    subtitle: "Votre campus corporate, clé en main",
    image: IMAGES.woman,
  },
  {
    title: "Mentivis Solutions",
    subtitle: "Conseil, Applicatif & Systèmes",
    image: IMAGES.menti4,
  },
  {
    title: "Education Rescue",
    subtitle: "Redressement rapide et optimisation des coûts",
    image: IMAGES.team,
  },
  {
    title: "Investor Lab",
    subtitle: "Sécuriser votre plan et vos fonds éducation",
    image: IMAGES.investor,
  },
];

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

function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/90 via-[#1a1a1a]/50 to-[#1a1a1a]/30" />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
            <h2 className="text-4xl md:text-6xl font-light text-white mb-4">
              {slide.title}
            </h2>
            <p className="text-xl md:text-2xl text-[#cfd4db] font-light">
              {slide.subtitle}
            </p>
          </div>
        </div>
      ))}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === current ? "bg-[#cfd4db]" : "bg-white/30"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      <button
        onClick={() => setCurrent((current - 1 + heroSlides.length) % heroSlides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
        aria-label="Previous slide"
      >
        ←
      </button>
      <button
        onClick={() => setCurrent((current + 1) % heroSlides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
        aria-label="Next slide"
      >
        →
      </button>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1a1a1a]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a]/95 backdrop-blur-sm border-b border-[#cfd4db]/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center">
            <Image
              src={IMAGES.logoWhite}
              alt="Mentivis"
              width={120}
              height={40}
              className="h-10 w-auto brightness-0 invert"
            />
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-white/80 hover:text-[#cfd4db] text-sm font-light transition-colors">Accueil</a>
            <a href="#solutions" className="text-white/80 hover:text-[#cfd4db] text-sm font-light transition-colors">Solutions</a>
            <a href="#contact" className="text-white/80 hover:text-[#cfd4db] text-sm font-light transition-colors">Contact</a>
          </nav>
          <div className="flex items-center gap-4">
            <span className="text-xs text-[#cfd4db]">FR</span>
            <span className="text-xs text-white/40">|</span>
            <a href="#" className="text-xs text-white/60 hover:text-[#cfd4db] transition-colors">EN</a>
            <a href="#contact" className="bg-[#cfd4db] text-[#1a1a1a] px-5 py-2 text-sm font-medium rounded-full hover:bg-[#a8aeb8] transition-colors">
              Contact
            </a>
          </div>
        </div>
      </header>

      {/* Hero Slider */}
      <HeroSlider />

      {/* Main Value Prop */}
      <section className="py-20 bg-[#2d2d2d]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
            Transformez vos coûts de formation en levier de croissance profitable
          </h2>
          <p className="text-lg text-[#cfd4db] font-light mb-8 leading-relaxed">
            Talent OS cartographie vos compétences, conçoit vos Campus internes certifiants et mobilise les financements (OPCO, dispositifs publics) pour un impact business mesurable.
          </p>
          <a
            href="#contact"
            className="inline-block bg-[#cfd4db] text-[#1a1a1a] px-8 py-3 text-sm font-medium rounded-full hover:bg-[#a8aeb8] transition-colors"
          >
            Obtenir un diagnostic ROI gratuit
          </a>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="py-20">
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

      {/* 4D Quadra */}
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

      {/* Stats */}
      <section className="py-16 bg-[#1a1a1a]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#cfd4db] font-light mb-4">
            Plus de 40 projets stratégiques, organisationnels et pédagogiques en 2025
          </p>
          <a
            href="#contact"
            className="text-white hover:text-[#cfd4db] transition-colors underline underline-offset-4"
          >
            Pourquoi Mentivis
          </a>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-[#2d2d2d]">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
              Contactez-nous
            </h2>
            <p className="text-[#cfd4db] font-light">
              Envie de parler avec nous ? Nous sommes là pour vous écouter.
            </p>
          </div>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm text-white/70 mb-2 font-light">
                Nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#cfd4db]/20 rounded-lg text-white focus:outline-none focus:border-[#cfd4db] transition-colors font-light"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-white/70 mb-2 font-light">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#cfd4db]/20 rounded-lg text-white focus:outline-none focus:border-[#cfd4db] transition-colors font-light"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-white/70 mb-2 font-light">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#cfd4db]/20 rounded-lg text-white focus:outline-none focus:border-[#cfd4db] transition-colors font-light resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#cfd4db] text-[#1a1a1a] py-3 rounded-lg font-medium hover:bg-[#a8aeb8] transition-colors"
            >
              Envoyer
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-[#1a1a1a] border-t border-[#cfd4db]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <Image
                src={IMAGES.logoWhite}
                alt="Mentivis"
                width={120}
                height={40}
                className="h-10 w-auto brightness-0 invert mb-4"
              />
              <p className="text-[#cfd4db] text-sm font-light">
                Conseil, stratégie et performance
              </p>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Contact</h4>
              <p className="text-white/60 text-sm font-light">
                <a href="mailto:contact@mentivis.com" className="hover:text-[#cfd4db] transition-colors">
                  contact@mentivis.com
                </a>
              </p>
              <p className="text-white/60 text-sm font-light mt-2">
                60 Rue François 1er<br />
                75008 Paris
              </p>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Newsletter</h4>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-4 py-2 bg-[#2d2d2d] border border-[#cfd4db]/20 rounded-lg text-white text-sm focus:outline-none focus:border-[#cfd4db] transition-colors font-light"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#cfd4db] text-[#1a1a1a] rounded-lg text-sm font-medium hover:bg-[#a8aeb8] transition-colors"
                >
                  S'abonner
                </button>
              </form>
            </div>
          </div>
          <div className="border-t border-[#cfd4db]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-xs font-light">
              © 2026 Mentivis. Tous droits réservés.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/40 hover:text-[#cfd4db] text-xs font-light transition-colors">
                Mentions légales
              </a>
              <a href="#" className="text-white/40 hover:text-[#cfd4db] text-xs font-light transition-colors">
                Confidentialité
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
