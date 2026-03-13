"use client";

import { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

const services = [
  {
    title: "Création d'écoles et de centres de formation",
    description: "Vous envisagez de créer votre propre école ou de développer un organisme de formation pour adultes ? Ce projet est l'occasion de concrétiser votre vision, de structurer une offre unique et de répondre aux besoins réels des apprenants.",
  },
  {
    title: "Création de centres de formation d'apprentis (CFA)",
    description: "L'apprentissage est un levier stratégique pour les entreprises, permettant de développer leurs talents tout en offrant aux jeunes une opportunité concrète de professionnalisation et insertion au monde du travail.",
  },
  {
    title: "Accompagner les acteurs privés et publics du supérieur",
    description: "Le secteur de l'enseignement supérieur fait face à une compétition mondiale accrue, à une pression constante d'innovation, à des contraintes de financement et à une nécessité d'adaptation rapide.",
  },
  {
    title: "Accélérer, structurer et sécuriser la croissance franchises",
    description: "Un système de formation unifié permet de créer un pipeline de talents, de certifier les compétences en interne et d'homogénéiser l'ensemble du réseau, y compris à l'international.",
  },
];

const checklist = [
  { title: "Étude de faisabilité", description: "Analyse du marché et de la concurrence" },
  { title: "Stratégie pédagogique", description: "Offre de formation structurée et différenciante" },
  { title: "Modèle économique", description: "Business plan, budget prévisionnel" },
  { title: "Conformité réglementaire", description: "Déclaration d'activité, certification Qualiopi, RNCP" },
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

export default function CreationEtablissementsPage() {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    setPageLoaded(true);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero - White */}
      <section className="pt-32 pb-16 bg-white overflow-hidden">
        <div className={`max-w-4xl mx-auto px-6 text-center transition-all duration-700 delay-100 ${
          pageLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <h1 className="text-4xl md:text-5xl font-light text-[#1a1a1a] mb-6">
            Création et lancement de votre établissement éducatif
          </h1>
          <p className="text-lg text-[#666] font-light leading-relaxed">
            Dans un secteur de l'éducation et de la formation en constante évolution, les établissements doivent sans cesse s'adapter, innover et optimiser leur fonctionnement.
          </p>
        </div>
      </section>

      {/* Services - Light */}
      <AnimatedSection className="py-20 bg-[#f8f8f8]" delay={100}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`stagger-item bg-white rounded-xl p-8 hover:shadow-lg transition-shadow ${
                  pageLoaded ? "" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
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

      {/* Checklist - White */}
      <AnimatedSection className="py-20 bg-white" delay={200}>
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-light text-[#1a1a1a] mb-12 text-center">
            Checklist pour créer un établissement de formation ou un CFA avec Mentivis
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {checklist.map((item, index) => (
              <div 
                key={index} 
                className={`stagger-item text-center p-6 bg-[#f8f8f8] rounded-xl ${
                  pageLoaded ? "" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center font-medium">
                  {index + 1}
                </div>
                <h3 className="text-[#1a1a1a] font-medium mb-2">{item.title}</h3>
                <p className="text-[#666] text-sm font-light">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Accompaniment - Light */}
      <AnimatedSection className="py-20 bg-[#f8f8f8]" delay={300}>
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-light text-[#1a1a1a] mb-8 text-center">
            L'accompagnement par Mentivis
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-8">
              <h3 className="text-xl font-medium text-[#1a1a1a] mb-4">Stratégie globale de développement</h3>
              <p className="text-[#666] text-sm font-light">Positionnement, nouvelles offres, diversification.</p>
            </div>
            <div className="bg-white rounded-xl p-8">
              <h3 className="text-xl font-medium text-[#1a1a1a] mb-4">Optimisation des performances</h3>
              <p className="text-[#666] text-sm font-light">Performance opérationnelles et financières.</p>
            </div>
            <div className="bg-white rounded-xl p-8">
              <h3 className="text-xl font-medium text-[#1a1a1a] mb-4">Transformation pédagogique et digitale</h3>
              <p className="text-[#666] text-sm font-light">Digital learning, IA, plateformes LMS, data learning.</p>
            </div>
            <div className="bg-white rounded-xl p-8">
              <h3 className="text-xl font-medium text-[#1a1a1a] mb-4">Mise en conformité</h3>
              <p className="text-[#666] text-sm font-light">Exigences Qualiopi et RNCP.</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA - White */}
      <AnimatedSection className="py-20 bg-white" delay={400}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-light text-[#1a1a1a] mb-6">
            Parlons de votre projet
          </h2>
          <p className="text-[#666] font-light mb-8">
            Vous avez un projet de création d'école, de centre de formation, de CFA ?
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
