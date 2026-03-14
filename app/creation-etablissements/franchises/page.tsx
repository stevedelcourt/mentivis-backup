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

export default function FranchisesPage() {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    setPageLoaded(true);
  }, []);

  const services = [
    {
      title: "Académie réseau",
      description: "Création d'une académie interne pour former vos franchiseurs et vos franchisés, garantir la cohérence de l'enseigne.",
    },
    {
      title: "Certification des compétences",
      description: "Développement de certifications internes, enregistrement au RNCP, valorisation des compétences des équipes.",
    },
    {
      title: "Recrutement unifié",
      description: "Mise en place d'un processus de recrutement commun, sélection des meilleurs talents pour l'ensemble du réseau.",
    },
    {
      title: "Formation continue",
      description: "Programmes de montée en compétences, formations réglementaires, adaptation aux évolutions du marché.",
    },
    {
      title: "Digital learning",
      description: "Plateforme de formation en ligne, modules interactifs, suivi des progressions et certifications digitales.",
    },
    {
      title: "Expansion internationale",
      description: "Adaptation des programmes de formation aux contextes locaux, accompagnement à l'international.",
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
              Accélérer, structurer et sécuriser la croissance des franchises
            </h1>
            <p className="text-lg text-[#666] font-light leading-relaxed">
              Un système de formation unifié permet de créer un pipeline de talents, de certifier les compétences en interne et d'homogénéiser l'ensemble du réseau, y compris à l'international.
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
              <Link href="/creation-etablissements/conseil-superieur" className="block bg-white rounded-xl p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-medium text-[#1a1a1a] mb-4">Enseignement supérieur</h3>
                <p className="text-[#666] text-sm font-light">Accompagner les acteurs du supérieur</p>
              </Link>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-20 bg-white" delay={200}>
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-light text-[#1a1a1a] mb-12 text-center">
              Nos solutions pour les réseaux de franchises
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
              Les bénéfices pour votre réseau
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-8 text-center">
                <div className="text-4xl font-light text-[#1a1a1a] mb-4">✓</div>
                <h3 className="text-lg font-medium text-[#1a1a1a] mb-2">Cohérence</h3>
                <p className="text-[#666] text-sm font-light">Uniformisez la qualité sur l'ensemble du réseau</p>
              </div>
              <div className="bg-white rounded-xl p-8 text-center">
                <div className="text-4xl font-light text-[#1a1a1a] mb-4">✓</div>
                <h3 className="text-lg font-medium text-[#1a1a1a] mb-2">Attractivité</h3>
                <p className="text-[#666] text-sm font-light">Renforcez l'attractivité employeur de votre enseigne</p>
              </div>
              <div className="bg-white rounded-xl p-8 text-center">
                <div className="text-4xl font-light text-[#1a1a1a] mb-4">✓</div>
                <h3 className="text-lg font-medium text-[#1a1a1a] mb-2">Croissance</h3>
                <p className="text-[#666] text-sm font-light">Accélérez le développement de votre réseau</p>
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
              Vous avez un réseau de franchises à structurer ?
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
