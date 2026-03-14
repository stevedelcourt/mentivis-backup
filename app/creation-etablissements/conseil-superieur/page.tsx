"use client";

import { useState, useEffect, useRef } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";

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

export default function ConseilSuperieurPage() {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    setPageLoaded(true);
  }, []);

  const services = [
    {
      title: "Stratégie de positionnement",
      description: "Analyse concurrentielle, définition de votre proposition de valeur, différenciation sur le marché de l'enseignement supérieur.",
    },
    {
      title: "Transformation digitale",
      description: "Modernisation des campus et services étudiants,数字化 des processus administratifs, plateformes d'apprentissage en ligne.",
    },
    {
      title: "Innovation pédagogique",
      description: "Conception de nouveaux formats d'apprentissage, intégration des technologies éducatives, formation des enseignants.",
    },
    {
      title: "Stratégie d'attractivité",
      description: "Communication institutionnelle, recrutement des étudiants, partenariats internationaux, image de marque.",
    },
    {
      title: "Accréditations et certifications",
      description: "Accompagnement vers les habilitations, certification Qualiopi, enregistrement RNCP, accréditations internationales.",
    },
    {
      title: "Optimisation opérationnelle",
      description: "Amélioration des processus, gestion de la qualité, pilotage de la performance, développement de nouveaux campus.",
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="pt-32 pb-16 bg-white overflow-hidden">
          <div className={`max-w-4xl mx-auto px-6 text-center transition-all duration-700 delay-100 ${
            pageLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            <h1 className="text-4xl md:text-5xl font-light text-[#1a1a1a] mb-6">
              Accompagner les acteurs privés et publics du supérieur
            </h1>
            <p className="text-lg text-[#666] font-light leading-relaxed">
              Le secteur de l'enseignement supérieur fait face à une compétition mondiale accrue, à une pression constante d'innovation, à des contraintes de financement et à une nécessité d'adaptation rapide.
            </p>
          </div>
        </section>

        <AnimatedSection className="py-20 bg-[#f8f8f8]" delay={100}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Link href="/creation-etablissements/creation-decole" className="block bg-white rounded-xl p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-medium text-[#1a1a1a] mb-4">Écoles & Formation</h3>
                <p className="text-[#666] text-sm font-light">Création d'écoles et de centres de formation corporate</p>
              </Link>
              <Link href="/creation-etablissements/creation-cfa" className="block bg-white rounded-xl p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-medium text-[#1a1a1a] mb-4">Création de CFA</h3>
                <p className="text-[#666] text-sm font-light">Création intégrale de centres de formation d'apprentis</p>
              </Link>
              <Link href="/creation-etablissements/franchises" className="block bg-white rounded-xl p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-medium text-[#1a1a1a] mb-4">Franchises</h3>
                <p className="text-[#666] text-sm font-light">Accélérer, structurer et sécuriser la croissance franchises</p>
              </Link>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-20 bg-white" delay={200}>
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-light text-[#1a1a1a] mb-12 text-center">
              Nos expertises pour l'enseignement supérieur
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="bg-[#f8f8f8] rounded-xl p-8"
                >
                  <h3 className="text-xl font-medium text-[#1a1a1a] mb-4">{service.title}</h3>
                  <p className="text-[#666] text-sm font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-20 bg-[#f8f8f8]" delay={300}>
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-light text-[#1a1a1a] mb-8 text-center">
              Nos accompagnement
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-8 text-center">
                <div className="text-4xl font-light text-[#1a1a1a] mb-4">3-7j</div>
                <h3 className="text-lg font-medium text-[#1a1a1a] mb-2">Quick Win Express</h3>
                <p className="text-[#666] text-sm font-light">Un impact immédiat sur un point précis</p>
              </div>
              <div className="bg-white rounded-xl p-8 text-center">
                <div className="text-4xl font-light text-[#1a1a1a] mb-4">2-4 sem</div>
                <h3 className="text-lg font-medium text-[#1a1a1a] mb-2">Diagnostic Complet</h3>
                <p className="text-[#666] text-sm font-light">Analyse approfondie de votre écosystème</p>
              </div>
              <div className="bg-white rounded-xl p-8 text-center">
                <div className="text-4xl font-light text-[#1a1a1a] mb-4">3-18 mois</div>
                <h3 className="text-lg font-medium text-[#1a1a1a] mb-2">Accompagnement Global</h3>
                <p className="text-[#666] text-sm font-light">Transformation en profondeur</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-20 bg-white" delay={400}>
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-light text-[#1a1a1a] mb-6">
              Parlons de votre projet
            </h2>
            <p className="text-[#666] font-light mb-8">
              Vous êtes un acteur de l'enseignement supérieur ?
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
    </>
  );
}
