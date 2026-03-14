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

export default function CreationEcolePage() {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    setPageLoaded(true);
  }, []);

  const services = [
    {
      title: "Étude de faisabilité et positionnement stratégique",
      description: "Analyse du marché et de la concurrence, définition de votre proposition de valeur unique et de votre modèle pédagogique, ciblage de votre public d'apprenants, élaboration d'une stratégie de positionnement claire et différenciante.",
    },
    {
      title: "Conception pédagogique et ingénierie de formation",
      description: "Aide à la structuration de vos programmes et parcours de formation, conseil sur les méthodes pédagogiques innovantes (digital learning, approche par compétences...), développement de contenus de formation.",
    },
    {
      title: "Modèle économique et planification financière",
      description: "Construction d'un business plan solide et réaliste, prévisions financières, budget prévisionnel, conseil sur les sources de financement (fonds propres, emprunts, aides publiques, CPF...), optimisation de la rentabilité.",
    },
    {
      title: "Aspects réglementaires et administratifs",
      description: "Aide aux démarches de déclaration et d'autorisation, accompagnement pour l'obtention des certifications qualité (Qualiopi) indispensables, conseil sur l'enregistrement aux répertoires nationaux (RNCP, RS), structuration juridique de votre entité.",
    },
    {
      title: "Organisation et opérationnel",
      description: "Conseil sur la structuration de votre organisation (équipe pédagogique, administrative...), mise en place des processus clés (admission, suivi, évaluation...), choix et intégration des outils technologiques.",
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
              Créer votre école ou centre de formation avec succès
            </h1>
            <p className="text-lg text-[#666] font-light leading-relaxed">
              Vous avez le projet ambitieux de créer une école, un organisme de formation ou tout autre établissement d'enseignement en France ? Mentivis est votre partenaire expert pour transformer cette vision en réalité.
            </p>
          </div>
        </section>

        <AnimatedSection className="py-20 bg-[#f8f8f8]" delay={100}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Link href="/creation-etablissements/creation-cfa" className="block bg-white rounded-xl p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-medium text-[#1a1a1a] mb-4">Création de CFA</h3>
                <p className="text-[#666] text-sm font-light">Création intégrale de centres de formation d'apprentis (CFA)</p>
              </Link>
              <Link href="/creation-etablissements/conseil-superieur" className="block bg-white rounded-xl p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-medium text-[#1a1a1a] mb-4">Enseignement supérieur</h3>
                <p className="text-[#666] text-sm font-light">Accompagner les acteurs privés et publics du supérieur</p>
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
              Nos services pour la création d'établissement éducatif
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
              Pourquoi choisir Mentivis pour créer votre école ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-8">
                <h3 className="text-xl font-medium text-[#1a1a1a] mb-4">Expertise Sectorielle</h3>
                <p className="text-[#666] text-sm font-light">Nous connaissons les spécificités et les enjeux du monde de l'éducation et de la formation.</p>
              </div>
              <div className="bg-white rounded-xl p-8">
                <h3 className="text-xl font-medium text-[#1a1a1a] mb-4">Approche Sur Mesure</h3>
                <p className="text-[#666] text-sm font-light">Chaque projet est unique. Nous adaptons notre méthodologie à vos besoins et à votre vision.</p>
              </div>
              <div className="bg-white rounded-xl p-8">
                <h3 className="text-xl font-medium text-[#1a1a1a] mb-4">Accompagnement Global</h3>
                <p className="text-[#666] text-sm font-light">Nous couvrons l'ensemble des dimensions de votre projet, de la stratégie à l'opérationnel.</p>
              </div>
              <div className="bg-white rounded-xl p-8">
                <h3 className="text-xl font-medium text-[#1a1a1a] mb-4">Focus sur la Qualité et la Conformité</h3>
                <p className="text-[#666] text-sm font-light">Nous vous aidons à intégrer les standards de qualité et à respecter les réglementations (Qualiopi, RNCP...).</p>
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
              Vous avez un projet de création d'école ou de centre de formation ?
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
