import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-20 bg-[#1a1a1a] border-t border-[#333]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link href="/" className="inline-block group">
              <Image
                src="https://mentivis.com/wp-content/uploads/2024/12/logo_noir300.png"
                alt="Mentivis"
                width={120}
                height={40}
                className="h-10 w-auto brightness-0 invert mb-6 group-hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <p className="text-[#cfd4db] text-sm font-light mb-6">
              Conseil, stratégie et performance
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/company/mentivis/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#2d2d2d] flex items-center justify-center text-white hover:bg-[#cfd4db] hover:text-[#1a1a1a] transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="https://x.com/mentivisconseil" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#2d2d2d] flex items-center justify-center text-white hover:bg-[#cfd4db] hover:text-[#1a1a1a] transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-6">Navigation</h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Accueil" },
                { href: "/offres", label: "Offres" },
                { href: "/expertises", label: "Expertises" },
                { href: "/creation-etablissements", label: "Lancer mon école" },
                { href: "/solutions", label: "Solutions" },
                { href: "/a-propos", label: "Nous" },
                { href: "/carrieres", label: "Carrières" },
                { href: "/jobs", label: "Jobs" },
              ].map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href} 
                    className="text-white/50 text-sm font-light hover:text-[#cfd4db] transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-white/30 group-hover:bg-[#cfd4db] transition-colors duration-300" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-6">Outils</h4>
            <ul className="space-y-3">
              {[
                { href: "/diagnostic", label: "Score Formation" },
                { href: "/calculateur-opco", label: "Calculateur OPCO" },
                { href: "/meeting", label: "Meeting" },
                { href: "/videos", label: "Vidéos" },
                { href: "/contact", label: "Contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href} 
                    className="text-white/50 text-sm font-light hover:text-[#cfd4db] transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-white/30 group-hover:bg-[#cfd4db] transition-colors duration-300" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-6">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:contact@mentivis.com" 
                  className="text-white/50 text-sm font-light hover:text-[#cfd4db] transition-colors duration-300"
                >
                  contact@mentivis.com
                </a>
              </li>
              <li className="text-white/50 text-sm font-light">
                60 Rue François 1er<br />
                75008 Paris
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-6">Newsletter</h4>
            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Votre email"
                className="px-4 py-3 bg-[#2d2d2d] border border-[#444] rounded-xl text-white text-sm focus:outline-none focus:border-[#cfd4db] transition-colors duration-300 font-light placeholder:text-white/30"
              />
              <button
                type="submit"
                className="px-4 py-3 bg-[#cfd4db] text-[#1a1a1a] rounded-xl text-sm font-medium hover:bg-white transition-colors duration-300"
              >
                S'abonner
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-[#333] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs font-light">
            © 2026 Mentivis. Tous droits réservés.
          </p>
          <div className="flex gap-8">
            <Link href="/mentions-legales" className="text-white/30 text-xs font-light hover:text-white/60 transition-colors duration-300">
              Mentions légales
            </Link>
            <Link href="/confidentialite" className="text-white/30 text-xs font-light hover:text-white/60 transition-colors duration-300">
              Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
