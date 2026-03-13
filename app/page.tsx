"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

const IMAGES = {
  logo: "https://mentivis.com/wp-content/uploads/2024/12/logo_noir300.png",
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

const IconTarget = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
    <line x1="12" y1="2" x2="12" y2="4" />
    <line x1="12" y1="20" x2="12" y2="22" />
    <line x1="2" y1="12" x2="4" y2="12" />
    <line x1="20" y1="12" x2="22" y2="12" />
  </svg>
);

const IconClipboard = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="8" y="2" width="8" height="4" rx="1" />
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <line x1="9" y1="10" x2="15" y2="10" />
    <line x1="9" y1="14" x2="15" y2="14" />
    <line x1="9" y1="18" x2="13" y2="18" />
  </svg>
);

const IconArrows = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M7 16V4M7 4L3 8M7 4L11 8" />
    <path d="M17 8v12m0 0l4-4m-4 4l-4-4" />
  </svg>
);

const IconBuilding = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4M9 9v.01M9 12v.01M9 15v.01M9 18v.01" />
    <rect x="9" y="3" width="6" height="4" rx="1" />
  </svg>
);

const IconChart = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 20V10M18 20V4M6 20v-4" strokeLinecap="round" />
  </svg>
);

const IconStethoscope = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>
);

const IconBriefcase = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    <line x1="12" y1="12" x2="12" y2="16" />
    <line x1="10" y1="14" x2="14" y2="14" />
  </svg>
);

const solutions = [
  {
    title: "TALENT OS",
    subtitle: "Pilotez par les compétences, pas par l'organigramme",
    description: "Les fiches de poste figées dans le marbre. Les talents cachés qui s'ignorent. Les compétences critiques que vous ne pouvez pas recruter.",
    impact: "–40% de délais de recrutement • Mobilité interne multipliée par 3 • Zéro dépendance aux pénuries de talents",
    icon: IconTarget,
  },
  {
    title: "SKILLS FACTORY",
    subtitle: "Un référentiel vivant qui parle à toute l'entreprise",
    description: "Le RH dit « autonomie », le manager dit « débrouillardise », le candidat comprend « démerde-toi ». Résultat : incompréhensions, mauvais recrutements.",
    impact: "Un seul référentiel • Utilisé partout • Toujours à jour • Enfin compris par tous",
    icon: IconClipboard,
  },
  {
    title: "TRANSITION WORKFORCE",
    subtitle: "Transformez sans casse. C'est possible.",
    description: "Fermeture de site. Digitalisation brutale. Réorganisation. Le mot « plan social » plane dans les couloirs.",
    impact: "90% de reclassement interne • Climat social préservé • Transformation accélérée de 6 mois",
    icon: IconArrows,
  },
  {
    title: "CORPORATE CAMPUS",
    subtitle: "Votre campus interne, clé en main",
    description: "Vous formez beaucoup mais ça part dans tous les sens. Vous rêvevez d'avoir votre propre école.",
    impact: "Une machine à produire les talents dont vous avez besoin • 100% adaptés à votre culture",
    icon: IconBuilding,
  },
  {
    title: "ROI FORMATION",
    subtitle: "Et si votre formation générait du cash ?",
    description: "Votre académie coûte cher. Très cher. Les budgets formation explosent. Le COMEX vous regarde bizarrement.",
    impact: "Formation autofinancée voire profitable • Budget formation multiplié par 2 sans demander un euro de plus",
    icon: IconChart,
  },
  {
    title: "EDUCATION RESCUE",
    subtitle: "Redressement d'école : du rouge au vert",
    description: "Inscriptions en chute libre. Réputation ternie. Équilibre financier fragile.",
    impact: "Augmentations d'inscriptions significatives • Rentabilité restaurée • Diplômés qui trouvent un job",
    icon: IconStethoscope,
  },
  {
    title: "INVESTOR EDUCATION LAB",
    subtitle: "Investir dans l'éducation en connaissance de cause",
    description: "Cette école a du potentiel. Mais est-ce que le business model tient la route ? Les diplômes ont-ils de la valeur ?",
    impact: "Décision éclairée • Risques maîtrisés • Plan d'action jour 1 prêt",
    icon: IconBriefcase,
  },
];

const pillars = [
  { title: "Vision stratégique", description: "Alignement avec vos objectifs d'établissement" },
  { title: "Excellence pédagogique", description: "Innovation dans les méthodes d'enseignement" },
  { title: "Efficacité technologique", description: "Outils digitaux au service de l'apprentissage" },
  { title: "Accompagnement humain", description: "Change management des équipes et apprenants" },
];

function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'} ${className}`}>
      {children}
    </div>
  );
}

function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === current ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30" />
          <div className={`absolute inset-0 flex flex-col justify-center items-center text-center px-6 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}>
            <h2 className={`text-5xl md:text-7xl font-light text-white mb-6 tracking-tight transition-all duration-700 ${
              index === current ? "translate-y-0" : "translate-y-8"
            }`}>
              {slide.title}
            </h2>
            <p className={`text-xl md:text-2xl text-white/90 font-light max-w-2xl transition-all duration-700 delay-200 ${
              index === current ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}>
              {slide.subtitle}
            </p>
          </div>
        </div>
      ))}
      
      {/* Navigation Dots */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10 transition-all duration-500 delay-500 ${
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}>
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current 
                ? "bg-white w-8" 
                : "bg-white/30 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Arrow Navigation */}
      <button
        onClick={() => setCurrent((current - 1 + heroSlides.length) % heroSlides.length)}
        className={`absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 z-10 ${
          isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
        }`}
        style={{ transitionDelay: '600ms' }}
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => setCurrent((current + 1) % heroSlides.length)}
        className={`absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 z-10 ${
          isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
        }`}
        style={{ transitionDelay: '600ms' }}
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-8 right-8 flex flex-col items-center gap-2 text-white/50 transition-all duration-500 delay-700 ${
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}>
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg className="w-5 h-5 animate-float" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

export default function Home() {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    setPageLoaded(true);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <HeroSlider />

      {/* Value Prop - Animated on load */}
      <section className={`py-24 bg-white transition-all duration-700 delay-100 ${
        pageLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a] mb-8 leading-tight">
            Transformez vos coûts de formation en{' '}
            <span className="relative">
              <span className="relative z-10">levier de croissance</span>
              <span className="absolute bottom-0 left-0 w-full h-3 bg-[#cfd4db]/30 -z-0"></span>
            </span>{' '}
            profitable
          </h2>
          <p className="text-lg text-[#666] font-light mb-10 leading-relaxed max-w-2xl mx-auto">
            Talent OS cartographie vos compétences, conçoit vos Campus internes certifiants et mobilise les financements (OPCO, dispositifs publics) pour un impact business mesurable.
          </p>
          <Link
            href="/contact"
            className="btn-primary inline-flex items-center gap-2 bg-[#1a1a1a] text-white px-10 py-4 text-sm font-medium rounded-full hover:bg-[#333] hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Obtenir un diagnostic ROI gratuit
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Solutions - Staggered animation */}
      <section className="py-24 bg-[#f8f8f8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center mb-16 transition-all duration-700 delay-200 ${
            pageLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a] mb-4">
              Nos solutions
            </h2>
            <p className="text-[#666] max-w-xl mx-auto">
              Transformez vos compétences en avantage stratégique
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <div
                  key={index}
                  className={`stagger-item group bg-white rounded-2xl p-8 card-hover cursor-pointer border border-transparent hover:border-[#cfd4db]/30 ${
                    pageLoaded ? "" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-[#1a1a1a] mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-medium text-[#1a1a1a] mb-2 group-hover:text-[#1a1a1a] transition-colors">
                        {solution.title}
                      </h3>
                      <p className="text-[#666] text-sm font-light mb-3">{solution.subtitle}</p>
                      <p className="text-[#444] text-sm font-light mb-4 leading-relaxed">
                        {solution.description}
                      </p>
                      <div className="border-t border-[#eee] pt-4">
                        <p className="text-[#1a1a1a] text-xs font-light group-hover:translate-x-1 transition-transform">
                          {solution.impact}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4D Quadra */}
      <AnimatedSection className="py-24 bg-white" delay={100}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-[#1a1a1a] mb-4">
              Pourquoi 4D Quadra ?
            </h2>
            <p className="text-[#666] max-w-2xl mx-auto">
              La méthodologie Mentivis 4D Quadra est le fondement de notre approche.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, index) => (
              <div 
                key={index} 
                className="stagger-item group text-center p-8 bg-[#f8f8f8] rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-[#1a1a1a] text-white flex items-center justify-center text-2xl font-light group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  {index + 1}
                </div>
                <h3 className="text-[#1a1a1a] font-medium mb-3 group-hover:text-[#1a1a1a]">{pillar.title}</h3>
                <p className="text-[#666] text-sm font-light">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Stats */}
      <AnimatedSection className="py-20 bg-[#f8f8f8]" delay={200}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-2xl text-[#1a1a1a] font-light mb-6">
            Plus de <span className="font-medium">40 projets</span> stratégiques en 2025
          </p>
          <Link
            href="/a-propos"
            className="inline-flex items-center gap-2 text-[#1a1a1a] hover:text-[#666] transition-colors link-underline"
          >
            Pourquoi Mentivis
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </AnimatedSection>

      {/* CTA Banner */}
      <AnimatedSection className="py-24 bg-[#1a1a1a]" delay={300}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Prêt à transformer votre formation ?
          </h2>
          <p className="text-white/70 mb-10 max-w-xl mx-auto">
            Parlons de vos enjeux et découvrons ensemble comment transformer vos coûts de formation en investissement rentable.
          </p>
          <Link
            href="/contact"
            className="btn-primary inline-flex items-center gap-2 bg-[#cfd4db] text-[#1a1a1a] px-10 py-4 text-sm font-medium rounded-full hover:bg-white hover:scale-105 transition-all duration-300"
          >
            Planifier un échange
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </AnimatedSection>

      {/* Contact Form */}
      <AnimatedSection className="py-24 bg-white" delay={400}>
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-[#1a1a1a] mb-4">
              Contactez-nous
            </h2>
            <p className="text-[#666]">
              Envie de parler avec nous ? Nous sommes là pour vous écouter.
            </p>
          </div>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm text-[#666] mb-2 font-light">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-4 bg-[#f8f8f8] border border-[#ddd] rounded-xl text-[#1a1a1a] focus:outline-none focus:border-[#1a1a1a] focus:bg-white transition-all duration-300 font-light"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-[#666] mb-2 font-light">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-4 bg-[#f8f8f8] border border-[#ddd] rounded-xl text-[#1a1a1a] focus:outline-none focus:border-[#1a1a1a] focus:bg-white transition-all duration-300 font-light"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-[#666] mb-2 font-light">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-4 bg-[#f8f8f8] border border-[#ddd] rounded-xl text-[#1a1a1a] focus:outline-none focus:border-[#1a1a1a] focus:bg-white transition-all duration-300 font-light resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#1a1a1a] text-white py-4 rounded-xl font-medium hover:bg-[#333] hover:scale-[1.02] transition-all duration-300"
            >
              Envoyer
            </button>
          </form>
        </div>
      </AnimatedSection>

      <Footer />
    </main>
  );
}
