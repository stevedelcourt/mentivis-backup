import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-16 bg-[#1a1a1a] border-t border-[#cfd4db]/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <Image
              src="https://mentivis.com/wp-content/uploads/2024/12/logo_noir300.png"
              alt="Mentivis"
              width={120}
              height={40}
              className="h-10 w-auto brightness-0 invert mb-4"
            />
            <p className="text-[#cfd4db] text-sm font-light">
              Conseil, stratégie et performance
            </p>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-white/60 text-sm font-light hover:text-[#cfd4db] transition-colors">Accueil</Link></li>
              <li><Link href="/offres" className="text-white/60 text-sm font-light hover:text-[#cfd4db] transition-colors">Offres</Link></li>
              <li><Link href="/expertises" className="text-white/60 text-sm font-light hover:text-[#cfd4db] transition-colors">Expertises</Link></li>
              <li><Link href="/creation-etablissements" className="text-white/60 text-sm font-light hover:text-[#cfd4db] transition-colors">Lancer mon école</Link></li>
              <li><Link href="/solutions" className="text-white/60 text-sm font-light hover:text-[#cfd4db] transition-colors">Solutions</Link></li>
              <li><Link href="/insights" className="text-white/60 text-sm font-light hover:text-[#cfd4db] transition-colors">Insights</Link></li>
              <li><Link href="/a-propos" className="text-white/60 text-sm font-light hover:text-[#cfd4db] transition-colors">Nous</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">Contact</h4>
            <p className="text-white/60 text-sm font-light">
              <a href="mailto:contact@mentivis.com" className="hover:text-[#cfd4db] transition-colors">
                contact@mentivis.com
              </a>
            </p>
            <p className="text-white/60 text-sm font-light mt-2">
              60 Rue François 1er<br />
              75008 Paris
            </p>
          </div>
          <div>
            <h4 className="text-white font-medium mb-4">Newsletter</h4>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Votre email"
                className="px-4 py-2 bg-[#2d2d2d] border border-[#cfd4db]/20 rounded-lg text-white text-sm focus:outline-none focus:border-[#cfd4db] transition-colors font-light"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[#cfd4db] text-[#1a1a1a] rounded-lg text-sm font-medium hover:bg-[#a8aeb8] transition-colors"
              >
                S'abonner
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-[#cfd4db]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs font-light">
            © 2026 Mentivis. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/40 hover:text-[#cfd4db] text-xs font-light transition-colors">
              Mentions légales
            </a>
            <a href="#" className="text-white/40 hover:text-[#cfd4db] text-xs font-light transition-colors">
              Confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
