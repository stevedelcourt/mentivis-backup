"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function CalculateurOPCOPage() {
  const [formData, setFormData] = useState({
    sector: "",
    effectif: "",
    masseSalariale: "",
    objectif: "",
    apprenants: "",
    duree: "",
    prenom: "",
    nom: "",
    email: "",
    entreprise: "",
    telephone: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const sectors = [
    { value: "", label: "Sélectionnez votre secteur" },
    { value: "industrie", label: "Industrie / Manufacturing" },
    { value: "commerce", label: "Commerce / Distribution" },
    { value: "services", label: "Services aux entreprises" },
    { value: "btp", label: "Construction / BTP" },
    { value: "transport", label: "Transport / Logistique" },
    { value: "sante", label: "Santé / Social" },
    { value: "hotellerie", label: "Hôtellerie / Restauration" },
    { value: "autre", label: "Autre secteur" },
  ];

  const objectifs = [
    { value: "", label: "Que souhaitez-vous financer ?" },
    { value: "campus", label: "Création d'un Campus interne / CFA" },
    { value: "rncp", label: "Certifications professionnelles (RNCP)" },
    { value: "reconversion", label: "Reconversions / Montées en compétences" },
    { value: "alternance", label: "Développement de l'alternance" },
    { value: "transformation", label: "Transformation digitale / IA" },
  ];

  return (
    <>
      <Header />
      <main className="bg-white min-h-screen pt-20">
        <section className="py-20 bg-[#1a1a1a]">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-light text-white mb-6">
              Combien pouvez-vous récupérer en financements OPCO ?
            </h1>
            <p className="text-xl text-white/70 font-light max-w-2xl">
              Calculez le montant exact auquel vous avez droit pour financer vos projets de formation et votre Campus interne.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-[#f8f9fa] rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl font-light text-[#1a1a1a] mb-2">
                Calculateur de financement OPCO
              </h2>
              <p className="text-gray-600 font-light mb-8">
                Découvrez le montant de financement auquel votre entreprise peut prétendre
              </p>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Votre secteur d'activité *
                      </label>
                      <select
                        name="sector"
                        value={formData.sector}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#1a1a1a] transition-colors duration-300"
                      >
                        {sectors.map((s) => (
                          <option key={s.value} value={s.value}>
                            {s.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Effectif total *
                      </label>
                      <input
                        type="number"
                        name="effectif"
                        value={formData.effectif}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#1a1a1a] transition-colors duration-300"
                        placeholder="Nombre d'employés"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Masse salariale annuelle (€) *
                      </label>
                      <input
                        type="number"
                        name="masseSalariale"
                        value={formData.masseSalariale}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#1a1a1a] transition-colors duration-300"
                        placeholder="En euros"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Objectif de formation *
                      </label>
                      <select
                        name="objectif"
                        value={formData.objectif}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#1a1a1a] transition-colors duration-300"
                      >
                        {objectifs.map((o) => (
                          <option key={o.value} value={o.value}>
                            {o.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nombre d'apprenants visés
                      </label>
                      <input
                        type="number"
                        name="apprenants"
                        value={formData.apprenants}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#1a1a1a] transition-colors duration-300"
                        placeholder="Nombre de personnes"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Durée moyenne (heures)
                      </label>
                      <input
                        type="number"
                        name="duree"
                        value={formData.duree}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#1a1a1a] transition-colors duration-300"
                        placeholder="En heures"
                      />
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6 mt-6">
                    <h3 className="text-lg font-medium text-[#1a1a1a] mb-4">Vos coordonnées</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Prénom *
                        </label>
                        <input
                          type="text"
                          name="prenom"
                          value={formData.prenom}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#1a1a1a] transition-colors duration-300"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nom *
                        </label>
                        <input
                          type="text"
                          name="nom"
                          value={formData.nom}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#1a1a1a] transition-colors duration-300"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email professionnel *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#1a1a1a] transition-colors duration-300"
                          placeholder="votre@entreprise.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Entreprise *
                        </label>
                        <input
                          type="text"
                          name="entreprise"
                          value={formData.entreprise}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#1a1a1a] transition-colors duration-300"
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#1a1a1a] transition-colors duration-300"
                      />
                    </div>
                  </div>

                  <p className="text-xs text-gray-500">
                    Protection de vos données : Les informations collectées sont utilisées uniquement pour vous fournir votre diagnostic personnalisé. Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données.
                  </p>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-[#1a1a1a] text-white rounded-xl font-medium hover:bg-[#333] transition-colors duration-300"
                  >
                    Calculer mon potentiel de financement →
                  </button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-medium text-[#1a1a1a] mb-2">Merci !</h3>
                  <p className="text-gray-600 mb-6">Un expert Mentivis vous contactera sous 48h pour affiner ce diagnostic.</p>
                  
                  <div className="bg-white rounded-xl p-6 text-left mb-6">
                    <h4 className="text-lg font-medium text-[#1a1a1a] mb-4">Votre potentiel de financement estimé</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Contribution OPCO annuelle</span>
                        <span className="font-medium">À calculer</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Financement formation (hors alternance)</span>
                        <span className="font-medium">À calculer</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Aide création Campus / CFA</span>
                        <span className="font-medium">À calculer</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Autres dispositifs publics</span>
                        <span className="font-medium">À calculer</span>
                      </div>
                      <div className="border-t pt-3 flex justify-between">
                        <span className="font-medium">Total potentiel sur 3 ans</span>
                        <span className="font-medium text-[#1a1a1a]">À calculer</span>
                      </div>
                    </div>
                  </div>

                  <a
                    href="/contact"
                    className="inline-block px-8 py-4 bg-[#1a1a1a] text-white rounded-xl font-medium hover:bg-[#333] transition-colors duration-300"
                  >
                    Prendre rendez-vous maintenant
                  </a>
                </div>
              )}
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500">
                Méthodologie : Calcul basé sur les taux de contribution OPCO 2025 (0,55% à 1% de la masse salariale selon l'effectif), les dispositifs FNE-Formation, France 2030, et les aides régionales.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
