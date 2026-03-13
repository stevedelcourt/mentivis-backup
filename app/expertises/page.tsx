"use client";

import { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";

const capabilities = [
  {
    title: "Conseil stratégie & audit",
    items: [
      "Analyse approfondie : Évaluation des pratiques internes, performance des formations, satisfaction des apprenants et partenaires.",
      "Vision stratégique : Formalisation d'une stratégie claire, alignée sur vos ambitions.",
      "Leviers de croissance : Identification des opportunités pour optimiser processus, offres et positionnement.",
      "Recommandations sur mesure : Solutions adaptées à vos besoins et à votre environnement.",
    ],
  },
  {
    title: "Marketing & communication",
    items: [
      "Analyse de marché : Identification des profils d'étudiants et des canaux de communication pertinents.",
      "Stratégie d'attractivité : Développement d'une marque institutionnelle forte pour attirer les talents.",
      "Campagnes ciblées : Conception de campagnes marketing adaptées aux attentes des futurs étudiants.",
      "Optimisation du parcours candidat : Simplification et valorisation des étapes d'inscription et d'admission.",
    ],
  },
  {
    title: "Accréditations & certifications",
    items: [
      "Audit de conformité : Vérification de l'alignement avec les normes (Qualiopi, RNCP, RGPD).",
      "Plans d'action : Élaboration et mise en œuvre de solutions en cas de non-conformité.",
      "Anticipation des risques : Réduction des sanctions potentielles et renforcement de votre crédibilité.",
      "Obtention ou renouvellement de certifications qualité.",
    ],
  },
  {
    title: "Pédagogie & curricula",
    items: [
      "Audit pédagogique : Évaluation des contenus, méthodes d'enseignement et outils numériques.",
      "Analyse des pratiques : Étude de l'efficacité des approches (blended learning, apprentissage par projet, etc.).",
      "Recommandations sur mesure : Adaptation des programmes aux attentes du marché et aux évolutions éducatives.",
      "Formation des équipes : Accompagnement pour maîtriser les nouvelles méthodologies et outils pédagogiques.",
    ],
  },
  {
    title: "Juridique & conformité",
    items: [
      "Accompagnement juridique : Assistance dans la création et la structuration de votre établissement.",
      "Conformité réglementaire : Validation des statuts, contrats et politiques internes.",
      "Gestion opérationnelle : Conseil sur les obligations légales en matière d'emploi, RGPD et accréditations.",
      "Support continu : Suivi juridique pour anticiper les risques et assurer une activité pérenne.",
    ],
  },
  {
    title: "Finance & M&A",
    items: [
      "Analyse financière : Évaluation des performances et identification des leviers de rentabilité.",
      "Levée de fonds : Accompagnement dans la recherche d'investisseurs et le montage financier.",
      "Fusion et acquisition (M&A) : Conseil stratégique pour vos opérations de croissance externe.",
      "Planification durable : Élaboration de stratégies financières alignées sur vos objectifs à long terme.",
    ],
  },
  {
    title: "Data IA & systèmes d'information",
    items: [
      "Gestion des données : Organisation et valorisation de vos données pour une prise de décision éclairée.",
      "Intelligence artificielle : Intégration d'outils IA pour automatiser et personnaliser les processus éducatifs.",
      "Knowledge management : Mise en place de solutions pour centraliser, structurer et partager les connaissances.",
      "Optimisation stratégique : Exploitation des données et de l'IA pour améliorer la performance et l'innovation.",
    ],
  },
  {
    title: "RH et RSE recrutement du staff",
    items: [
      "Recrutement stratégique : Identification et recrutement des talents alignés avec vos valeurs et objectifs.",
      "Développement RH : mise en place de stratégies pour le développement et la fidélisation de votre équipe.",
      "Intégration RSE : Intégration des principes de Responsabilité Sociétale des Entreprises dans votre politique RH.",
      "Suivi des performances : Évaluation continue des équipes et adaptation des pratiques.",
    ],
  },
];

const values = [
  { title: "Expertise", description: "Notre engagement, votre succès. Nos consultants sont des experts reconnus dans l'écosystème éducatif." },
  { title: "Innovation", description: "Notre ADN stratégique. Nous transformons les défis en opportunités avec des méthodologies disruptives." },
  { title: "Stratégie", description: "Votre succès, notre vision. Nous construisons des stratégies sur mesure, ancrées dans une analyse précise." },
  { title: "Excellence", description: "Votre Levier d'Excellence. Nous transformons vos ambitions en résultats tangibles." },
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

export default function ExpertisesPage() {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    setPageLoaded(true);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero - White */}
      <section className="pt-32 pb-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-700 delay-100 ${
              pageLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}>
              <h1 className="text-4xl md:text-5xl font-light text-[#1a1a1a] mb-6">
                Mentivis. Moins de slides, plus d'exécution.
              </h1>
              <p className="text-lg text-[#666] font-light leading-relaxed">
                Chaque établissement fait face à des défis uniques, qu'ils soient stratégiques, organisationnels ou humains. 
                L'enjeu n'est pas seulement d'y répondre, mais de savoir en tirer parti pour renforcer la performance et la pérennité.
              </p>
            </div>
            <div className={`relative h-[400px] rounded-xl overflow-hidden transition-all duration-700 delay-300 ${
              pageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}>
              <Image
                src="https://mentivis.com/wp-content/uploads/2026/02/consultantboxb-1536x862.webp"
                alt="Mentivis Conseil"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities - Light */}
      <AnimatedSection className="py-20 bg-[#f8f8f8]" delay={100}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-light text-[#1a1a1a] mb-12 text-center">
            Nos capacités et compétences
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((cap, index) => (
              <div 
                key={index} 
                className={`stagger-item bg-white rounded-xl p-8 hover:shadow-lg transition-shadow ${
                  pageLoaded ? "" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-medium text-[#1a1a1a] mb-4">{cap.title}</h3>
                <ul className="space-y-3">
                  {cap.items.map((item, i) => (
                    <li key={i} className="text-[#666] text-sm font-light leading-relaxed">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Values - White */}
      <AnimatedSection className="py-20 bg-white" delay={200}>
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-light text-[#1a1a1a] mb-12 text-center">
            Notre approche unique
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index} 
                className={`stagger-item text-center p-6 bg-[#f8f8f8] rounded-xl ${
                  pageLoaded ? "" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full border border-[#1a1a1a]/20 flex items-center justify-center">
                  <span className="text-2xl font-light text-[#1a1a1a]">{index + 1}</span>
                </div>
                <h3 className="text-[#1a1a1a] font-medium mb-2">{value.title}</h3>
                <p className="text-[#666] text-sm font-light">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA - Light */}
      <AnimatedSection className="py-20 bg-[#f8f8f8]" delay={300}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-light text-[#1a1a1a] mb-6">
            Nous nous engageons à transformer votre vision éducative en une institution d'excellence
          </h2>
          <p className="text-[#666] font-light mb-8">
            Prenez rendez-vous pour une consultation stratégique, on s'occupe du reste !
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#1a1a1a] text-white px-8 py-3 text-sm font-medium rounded-full hover:bg-[#333] transition-colors"
          >
            Contactez-nous
          </Link>
        </div>
      </AnimatedSection>

      <Footer />
    </main>
  );
}
