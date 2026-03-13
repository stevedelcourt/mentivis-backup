import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Politique de confidentialité - Mentivis",
  description: "Politique de confidentialité et protection des données personnelles Mentivis.",
};

export default function ConfidentialitePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-light text-[#1a1a1a] mb-12">
            Politique de confidentialité
          </h1>
          
          <div className="prose prose-lg max-w-none space-y-8 text-[#666]">
            <div>
              <h2 className="text-xl font-medium text-[#1a1a1a] mb-4">1. Introduction</h2>
              <p>
                La présente politique de confidentialité décrit comment Mentivis collecte, utilise et protège 
                vos données personnelles conformément au Règlement Général sur la Protection des Données (RGPD) 
                et à la loi Informatique et Libertés.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-[#1a1a1a] mb-4">2. Données collectées</h2>
              <p>
                Nous collectons les données suivantes :
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone</li>
                <li>Entreprise / Organisation</li>
                <li>Toute information que vous nous fournissez volontairement</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-medium text-[#1a1a1a] mb-4">3. Finalités du traitement</h2>
              <p>
                Vos données sont utilisées pour :
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Répondre à vos demandes de contact</li>
                <li>Vous envoyer des informations sur nos services</li>
                <li>Établir des propositions commerciales</li>
                <li>Améliorer notre site et nos services</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-medium text-[#1a1a1a] mb-4">4. Base légale</h2>
              <p>
                Le traitement de vos données repose sur votre consentement (formulaire de contact, inscription à la newsletter) 
                et/ou notre intérêt légitime à développer notre activité commerciale.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-[#1a1a1a] mb-4">5. Conservation des données</h2>
              <p>
                Vos données personnelles sont conservées pour une durée de 3 ans à compter de notre dernier contact, 
                sauf obligation légale de conservation plus longue.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-[#1a1a1a] mb-4">6. Vos droits</h2>
              <p>
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Droit d'accès à vos données</li>
                <li>Droit de rectification</li>
                <li>Droit à l'effacement</li>
                <li>Droit d'opposition au traitement</li>
                <li>Droit à la portabilité</li>
                <li>Droit de limitation du traitement</li>
              </ul>
              <p className="mt-4">
                Pour exercer ces droits, contactez-nous à : contact@mentivis.com
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-[#1a1a1a] mb-4">7. Sécurité</h2>
              <p>
                Nous mettons en œuvre les mesures techniques et organisationnelles appropriées pour protéger vos 
                données contre tout accès non autorisé, modification, divulgation ou destruction.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-[#1a1a1a] mb-4">8. Transfert de données</h2>
              <p>
                Vos données peuvent être transférées vers des pays hors de l'Union Européenne dans le cadre de 
                l'utilisation de services cloud. Dans ce cas, nous nous assurons que les garanties appropriées 
                sont en place conformément au RGPD.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-[#1a1a1a] mb-4">9. Cookies</h2>
              <p>
                Ce site utilise des cookies pour améliorer votre expérience. Vous pouvez configurer votre navigateur 
                pour refuser les cookies, sachant que cela peut affecter certaines fonctionnalités du site.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-[#1a1a1a] mb-4">10. Contact</h2>
              <p>
                Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits, 
                vous pouvez nous contacter à :
              </p>
              <p className="mt-4">
                <strong>Mentivis</strong><br />
                60 Rue François 1er<br />
                75008 Paris<br />
                Email : contact@mentivis.com
              </p>
            </div>

            <div className="pt-8 border-t border-[#eee]">
              <p className="text-sm">
                Dernière mise à jour : Mars 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
