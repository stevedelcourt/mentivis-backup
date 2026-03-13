import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Contact - Mentivis",
  description: "Contactez Mentivis pour vos projets de conseil et transformation éducative.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#1a1a1a]">
      <Header />
      
      <section className="pt-32 pb-16 bg-[#2d2d2d]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-light text-white mb-6">
            Contactez-nous
          </h1>
          <p className="text-lg text-[#cfd4db] font-light">
            Envie de parler avec nous ? Nous sommes là pour vous écouter et nous vous répondrons dans les plus brefs délais !
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-2xl mx-auto px-6">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm text-white/70 mb-2 font-light">
                Nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 bg-[#2d2d2d] border border-[#cfd4db]/20 rounded-lg text-white focus:outline-none focus:border-[#cfd4db] transition-colors font-light"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-white/70 mb-2 font-light">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-[#2d2d2d] border border-[#cfd4db]/20 rounded-lg text-white focus:outline-none focus:border-[#cfd4db] transition-colors font-light"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-white/70 mb-2 font-light">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="w-full px-4 py-3 bg-[#2d2d2d] border border-[#cfd4db]/20 rounded-lg text-white focus:outline-none focus:border-[#cfd4db] transition-colors font-light resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#cfd4db] text-[#1a1a1a] py-3 rounded-lg font-medium hover:bg-[#a8aeb8] transition-colors"
            >
              Envoyer
            </button>
          </form>
        </div>
      </section>

      <section className="py-20 bg-[#2d2d2d]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-white font-medium mb-4">Contact</h3>
              <p className="text-white/60 text-sm font-light">
                <a href="mailto:contact@mentivis.com" className="hover:text-[#cfd4db] transition-colors">
                  contact@mentivis.com
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-white font-medium mb-4">Siège social</h3>
              <p className="text-white/60 text-sm font-light">
                60 Rue François 1er<br />
                75008 Paris
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
