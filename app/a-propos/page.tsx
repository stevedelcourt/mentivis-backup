import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

export const metadata = {
  title: "À propos de nous - Mentivis",
  description: "Découvrez Mentivis, votre partenaire pour la transformation éducative. Notre mission, nos valeurs, notre équipe.",
};

const team = [
  { name: "Marie Castelli", role: "Talent Network Manager", quote: "Un bon réseau ne se mesure pas à sa taille, mais à sa capacité à faire émerger les bonnes compétences, au bon moment, pour les bons projets." },
  { name: "Mathias Costes", role: "Partner, Corporate Sales", quote: "Notre mission n'est pas de vendre une solution, mais de bâtir avec nos clients des réponses durables à leurs enjeux éducatifs." },
  { name: "Steven Delcourt", role: "Partner, Brand & Marketing", quote: "Ce que nous construisons, ce ne sont pas des structures, mais des dynamiques éducatives capables de durer, de s'adapter et de transformer." },
  { name: "Roxan Roumégas", role: "Partner, Président France", quote: "Il ne suffit pas d'avoir une vision. Encore faut-il savoir la rendre viable, partageable, et surtout vivante." },
];

const values = [
  { title: "Expertise", description: "Nos consultants sont des experts reconnus dans l'écosystème éducatif. Maîtrisant parfaitement les cadres réglementaires et stratégiques, nous concevons des solutions sur-mesure." },
  { title: "Innovation", description: "Dans un monde en mutation perpétuelle, nous transformons les défis en opportunités. Nos méthodologies disruptives et nos technologies de pointe accompagnent nos clients." },
  { title: "Stratégie", description: "Nous construisons des stratégies sur mesure, ancrées dans une analyse précise de votre écosystème. Nos plans d'action allient rigueur et ambition." },
  { title: "Excellence", description: "Nous transformons vos ambitions en résultats tangibles. Notre expertise vous propulse vers l'excellence, en optimisant chaque processus." },
];

export default function AProposPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero with Group Photo */}
      <section className="relative h-[60vh] min-h-[400px] pt-24">
        <Image
          src="https://mentivis.com/wp-content/uploads/2025/07/grouprscmn-1024x654-1.webp"
          alt="L'équipe Mentivis"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 pb-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-light text-white mb-6">
              Vous avez du talent. Nous avons des opportunités.
            </h1>
            <p className="text-lg text-white/90 font-light leading-relaxed">
              Rejoignez notre réseau de talents, le Mentivis Talent Network.
            </p>
          </div>
        </div>
      </section>

      {/* Values - White */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-light text-[#1a1a1a] mb-12 text-center">
            Notre approche unique
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-[#f8f8f8] rounded-xl">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full border border-[#1a1a1a]/20 flex items-center justify-center">
                  <span className="text-2xl font-light text-[#1a1a1a]">{index + 1}</span>
                </div>
                <h3 className="text-[#1a1a1a] font-medium mb-2">{value.title}</h3>
                <p className="text-[#666] text-sm font-light">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team - Light */}
      <section className="py-20 bg-[#f8f8f8]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-light text-[#1a1a1a] mb-12 text-center">
            Nous sommes reconnus dans l'éducation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm">
                <p className="text-[#666] text-sm font-light mb-4 italic">
                  "{member.quote}"
                </p>
                <div className="mt-4">
                  <p className="text-[#1a1a1a] font-medium">{member.name}</p>
                  <p className="text-[#888] text-sm font-light">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Confidentiality - White */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-light text-[#1a1a1a] mb-6">
            La confidentialité de vos Projets est notre priorité
          </h2>
          <p className="text-[#666] font-light mb-8 leading-relaxed">
            Protéger vos informations confidentielles est notre priorité. Nous mettons un point d'honneur à garantir la sécurité de vos projets à chaque étape. 
            Notre équipe suit des standards rigoureux en matière de confidentialité, combinant respect des normes légales et engagement éthique.
          </p>
        </div>
      </section>

      {/* CTA - Light */}
      <section className="py-20 bg-[#f8f8f8]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <a
            href="/contact"
            className="inline-block bg-[#1a1a1a] text-white px-8 py-3 text-sm font-medium rounded-full hover:bg-[#333] transition-colors"
          >
            Contactez-nous
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
