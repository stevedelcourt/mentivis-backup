import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Insights - Actualités et Analyses Mentivis",
  description: "Insights sur le secteur de la formation, tendances et meilleures pratiques.",
};

const articles = [
  {
    title: "Mentivis Solutions, la nouvelle offre Engineering and Technology Solutions",
    date: "11 Mar 2026",
    category: "Actualités",
    image: "https://mentivis.com/wp-content/uploads/2026/03/menti4-1536x1030.webp",
  },
  {
    title: "Formation professionnelle 2026 : stratégie, IA et mobilité",
    date: "03 Mar 2026",
    category: "Formation",
    image: "https://mentivis.com/wp-content/uploads/2024/11/pexels-divinetechygirl-1181712-1-1024x683.jpg",
  },
  {
    title: "L'IA comme nouvelle alphabétisation : reprendre la bataille de la lumière",
    date: "26 Jan 2026",
    category: "Digital Data IA",
    image: "https://mentivis.com/wp-content/uploads/2026/01/officez-1536x1024.webp",
  },
  {
    title: "L'Europe face à son défi éducatif : le grand examen de Davos",
    date: "22 Jan 2026",
    category: "Éducation",
    image: "https://mentivis.com/wp-content/uploads/2026/03/investor-1536x1024.webp",
  },
];

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-[#1a1a1a]">
      <Header />
      
      <section className="pt-32 pb-16 bg-[#2d2d2d]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-light text-white mb-6">
            Insights
          </h1>
          <p className="text-lg text-[#cfd4db] font-light">
            Découvrez nos derniers articles pour des insights sur le secteur, les tendances et les meilleures pratiques.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {articles.map((article, index) => (
              <div key={index} className="bg-[#2d2d2d] rounded-xl overflow-hidden hover:bg-[#363636] transition-colors">
                <div className="relative h-48">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs text-[#cfd4db]">{article.date}</span>
                    <span className="text-xs text-white/40">|</span>
                    <span className="text-xs text-white/60">{article.category}</span>
                  </div>
                  <h3 className="text-white font-medium text-sm leading-relaxed">
                    {article.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#2d2d2d]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-light text-white mb-6">
            Votre partenaire incontournable au cœur de l'écosystème éducatif
          </h2>
          <p className="text-[#cfd4db] font-light mb-8">
            Accompagnement sur-mesure | Solutions innovantes | Expertise multisectorielle
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#cfd4db] text-[#1a1a1a] px-8 py-3 text-sm font-medium rounded-full hover:bg-[#a8aeb8] transition-colors"
          >
            Prenez contact avec nous
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
