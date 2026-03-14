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

export default function CreationCFAPage() {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    setPageLoaded(true);
  }, []);

  const services = [
    {
      title: "Étude de faisabilité",
      description: "Analyse du marché de l'apprentissage dans votre secteur, étude de la concurrence, évaluation des besoins en alternance des entreprises partenaires.",
    },
    {
      title: "Positionnement pédagogique",
      description: "Définition de l'offre de formation adaptée aux exigences de l'alternance, conception des parcours pédagogiques personnalisés.",
    },
    {
      title: "Relations entreprises",
      description: "Stratégie de développement du réseau d'employeurs partenaires, montage des contrats d'apprentissage et de professionnalisation.",
    },
    {
      title: "Structuration juridique",
      description: "Accompagnement dans la création de la structure juridique, démarches d'habilitation auprès des OPCO et des financeurs.",
    },
    {
      title: "Obtention de Qualiopi",
      description: "Préparation à la certification Qualiopi obligatoire pour recevoir les fonds publics, audit blanc et mise en conformité.",
    },
    {
      title: "Lancement opérationnel",
      description: "Recrutement de l'équipe pédagogique, mise en place des outils de suivi, formation des tuteurs et maîtres d'apprentissage.",
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
              Création de centres de formation d'apprentis (CFA)
            </h1>
            <p className="text-lg text-[#666] font-light leading-relaxed">
              L'apprentissage est un levier stratégique pour les entreprises, permettant de développer leurs talents tout en offrant aux jeunes une opportunité concrète de professionnalisation.
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
              Notre accompagnement pour créer votre CFA
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
              Pourquoi créer un CFA ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-8 text-center">
                <div className="text-4xl font-light text-[#1a1a1a] mb-4">01</div>
                <h3 className="text-lg font-medium text-[#1a1a1a] mb-2">Répondre aux besoins</h3>
                <p className="text-[#666] text-sm font-light">Formez des talents adaptés aux besoins réels de votre secteur</p>
              </div>
              <div className="bg-white rounded-xl p-8 text-center">
                <div className="text-4xl font-light text-[#1a1a1a] mb-4">02</div>
                <h3 className="text-lg font-medium text-[#1a1a1a] mb-2">Avantages fiscaux</h3>
                <p className="text-[#666] text-sm font-light">Bénéficiez des exonérations et aides liées à l'apprentissage</p>
              </div>
              <div className="bg-white rounded-xl p-8 text-center">
                <div className="text-4xl font-light text-[#1a1a1a] mb-4">03</div>
                <h3 className="text-lg font-medium text-[#1a1a1a] mb-2">Pipeline de talents</h3>
                <p className="text-[#666] text-sm font-light">Constituez votre vivier de futurs collaborateurs qualifiés</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-20 bg-white" delay={400}>
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-light text-[#1a1a1a] mb-6">
              Parlons de votre projet CFA
            </h2>
            <p className="text-[#666] font-light mb-8">
              Vous souhaitez créer un centre de formation d'apprentis ?
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
