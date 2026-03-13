import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Mentions légales - Mentivis",
  description: "Mentions légales du site Mentivis.",
};

export default function MentionsLegalesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-light text-[#1a1a1a] mb-12">
            Mentions légales
          </h1>
          
          <div className="prose prose-lg max-w-none space-y-8 text-[#666]">
            <div>
              <h2 className="text-xl font-medium text-[#1a1a1a] mb-4">1. Éditeur du site</h2>
              <p>
                Le site Mentivis est édité par la société Mentivis, SAS au capital social de [à compléter], 
                immatriculée au RCS de Paris sous le numéro [à compléter], dont le siège social est situé au 
                60 Rue François 1er, 75008 Paris.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-[#1a1a1a] mb-4">2. Directeur de la publication</h2>
              <p>
                Le directeur de la publication est Roxan Roumégas, Président de Mentivis.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-[#1a1a1a] mb-4">3. Hébergement</h2>
              <p>
                Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-[#1a1a1a] mb-4">4. Propriété intellectuelle</h2>
              <p>
                L'ensemble des contenus présents sur ce site (textes, graphiques, logos, images, sons, logiciels, etc.) 
                est protégé par les droits de propriété intellectuelle et est la propriété exclusive de Mentivis ou de ses partenaires.
              </p>
              <p className="mt-4">
                Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments 
                du site est interdite sans autorisation écrite préalable de Mentivis.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-[#1a1a1a] mb-4">5. Responsabilité</h2>
              <p>
                Mentivis s'efforce de fournir des informations aussi précises que possible. Toutefois, Mentivis ne pourra 
                être tenue responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu'elles soient 
                de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-[#1a1a1a] mb-4">6. Liens hypertextes</h2>
              <p>
                Le site peut contenir des liens vers d'autres sites. Mentivis n'exerce aucun contrôle sur ces sites 
                et décline toute responsabilité quant à leur contenu.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-[#1a1a1a] mb-4">7. Droit applicable</h2>
              <p>
                Les présentes mentions légales sont régies par le droit français. Tout litige relatif à l'utilisation 
                du site sera de la compétence exclusive des tribunaux français.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
