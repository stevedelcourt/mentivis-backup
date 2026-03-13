"use client";

import { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

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

export default function ContactPage() {
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
            Contactez-nous
          </h1>
          <p className="text-lg text-[#666] font-light">
            Envie de parler avec nous ? Nous sommes là pour vous écouter et nous vous répondrons dans les plus brefs délais !
          </p>
        </div>
      </section>

      {/* Form - Light */}
      <AnimatedSection className="py-20 bg-[#f8f8f8]" delay={200}>
        <div className="max-w-2xl mx-auto px-6">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm text-[#666] mb-2 font-light">
                Nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 bg-white border border-[#ddd] rounded-lg text-[#1a1a1a] focus:outline-none focus:border-[#1a1a1a] transition-colors font-light"
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
                className="w-full px-4 py-3 bg-white border border-[#ddd] rounded-lg text-[#1a1a1a] focus:outline-none focus:border-[#1a1a1a] transition-colors font-light"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-[#666] mb-2 font-light">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="w-full px-4 py-3 bg-white border border-[#ddd] rounded-lg text-[#1a1a1a] focus:outline-none focus:border-[#1a1a1a] transition-colors font-light resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#1a1a1a] text-white py-3 rounded-lg font-medium hover:bg-[#333] transition-colors"
            >
              Envoyer
            </button>
          </form>
        </div>
      </AnimatedSection>

      {/* Contact Info - White */}
      <AnimatedSection className="py-20 bg-white" delay={300}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-[#1a1a1a] font-medium mb-4">Contact</h3>
              <p className="text-[#666] text-sm font-light">
                <a href="mailto:contact@mentivis.com" className="hover:text-[#1a1a1a] transition-colors">
                  contact@mentivis.com
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-[#1a1a1a] font-medium mb-4">Siège social</h3>
              <p className="text-[#666] text-sm font-light">
                60 Rue François 1er<br />
                75008 Paris
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <Footer />
    </main>
  );
}
