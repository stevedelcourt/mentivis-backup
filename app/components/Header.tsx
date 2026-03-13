"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Accueil" },
  { href: "/offres", label: "Offres" },
  { href: "/expertises", label: "Expertises" },
  { href: "/creation-etablissements", label: "Lancer mon école" },
  { href: "/solutions", label: "Solutions" },
  { href: "/insights", label: "Insights" },
  { href: "/a-propos", label: "Nous" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a]/95 backdrop-blur-sm border-b border-[#cfd4db]/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="https://mentivis.com/wp-content/uploads/2024/12/logo_noir300.png"
            alt="Mentivis"
            width={120}
            height={40}
            className="h-10 w-auto brightness-0 invert"
          />
        </Link>
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-light transition-colors ${
                pathname === item.href
                  ? "text-[#cfd4db]"
                  : "text-white/80 hover:text-[#cfd4db]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <span className="text-xs text-[#cfd4db]">FR</span>
          <span className="text-xs text-white/40">|</span>
          <a href="#" className="text-xs text-white/60 hover:text-[#cfd4db] transition-colors">EN</a>
          <Link href="/contact" className="bg-[#cfd4db] text-[#1a1a1a] px-5 py-2 text-sm font-medium rounded-full hover:bg-[#a8aeb8] transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
