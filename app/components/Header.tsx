"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navItems = [
  { href: "/", label: "Accueil" },
  { href: "/offres", label: "Offres" },
  { href: "/expertises", label: "Expertises" },
  { href: "/creation-etablissements", label: "Lancer mon école" },
  { href: "/solutions", label: "Solutions" },
  { href: "/a-propos", label: "Nous" },
  { href: "/carrieres", label: "Carrières" },
];

const photoHeroPages = ["/", "/offres", "/solutions", "/a-propos"];
const whiteBgPages = ["/expertises", "/creation-etablissements", "/contact", "/mentions-legales", "/confidentialite"];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const hasPhotoHero = photoHeroPages.includes(pathname);
  const hasWhiteBg = whiteBgPages.includes(pathname);
  const isAlwaysWhite = hasWhiteBg || isScrolled;
  const showWhiteLogo = hasPhotoHero && !isScrolled;
  const menuTextWhite = !isAlwaysWhite && showWhiteLogo;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isAlwaysWhite 
          ? "bg-white/95 backdrop-blur-md shadow-lg py-3" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link 
          href="/" 
          className="flex items-center group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <Image
            src="https://mentivis.com/wp-content/uploads/2024/12/logo_noir300.png"
            alt="Mentivis"
            width={120}
            height={40}
            className={`h-10 w-auto transition-all duration-300 group-hover:scale-105 ${
              showWhiteLogo ? "brightness-0 invert" : "brightness-0"
            }`}
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative text-sm font-light transition-colors duration-300 hover:opacity-100 ${
                menuTextWhite
                  ? "text-white/80 hover:text-white" 
                  : "text-[#1a1a1a]/70 hover:text-[#1a1a1a]"
              } ${pathname === item.href ? (menuTextWhite ? "text-white" : "text-[#1a1a1a]") : ""}`}
            >
              {item.label}
              <span className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
              } ${menuTextWhite ? "bg-white" : "bg-[#1a1a1a]"}`} />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link 
            href="/contact" 
            className="px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 bg-[#1a1a1a] text-white hover:bg-[#333]"
          >
            Contact
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 rounded-full transition-all duration-300 ${
                menuTextWhite ? "bg-white" : "bg-[#1a1a1a]"
              } ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`w-full h-0.5 rounded-full transition-all duration-300 ${
                menuTextWhite ? "bg-white" : "bg-[#1a1a1a]"
              } ${isMobileMenuOpen ? "opacity-0" : ""}`} />
              <span className={`w-full h-0.5 rounded-full transition-all duration-300 ${
                menuTextWhite ? "bg-white" : "bg-[#1a1a1a]"
              } ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl transition-all duration-500 overflow-hidden ${
        isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      }`}>
        <nav className="flex flex-col p-6 gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-lg font-light py-2 border-b border-[#eee] ${
                pathname === item.href 
                  ? "text-[#1a1a1a] font-medium" 
                  : "text-[#666]"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-[#1a1a1a] text-white text-center py-3 rounded-full mt-4"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
