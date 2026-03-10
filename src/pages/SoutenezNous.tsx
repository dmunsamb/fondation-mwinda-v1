import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Heart, Users, Handshake, ArrowRight, CreditCard, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const SoutenezNous = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      {/* Header Section */}
      <section className="py-16 px-6 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-transparent pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Soutenez-Nous</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Vous souhaitez nous soutenir dans notre mission ? Nous vous en sommes mille fois reconnaissant.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mt-10"
          >
            <a href="#faire-un-don" className="px-6 py-3 bg-brand-primary text-white rounded-full font-bold hover:bg-orange-600 transition-colors flex items-center gap-2">
              <Heart size={18} /> Faire un don
            </a>
            <a href="#devenir-benevole" className="px-6 py-3 bg-white/10 text-white rounded-full font-bold hover:bg-white/20 transition-colors flex items-center gap-2 backdrop-blur-sm border border-white/10">
              <Users size={18} /> Devenir bénévole
            </a>
            <a href="#devenir-partenaire" className="px-6 py-3 bg-white/10 text-white rounded-full font-bold hover:bg-white/20 transition-colors flex items-center gap-2 backdrop-blur-sm border border-white/10">
              <Handshake size={18} /> Devenir partenaire
            </a>
          </motion.div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-24">
        
        {/* Section 1: Faire un don */}
        <section id="faire-un-don" className="scroll-mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 md:p-12 rounded-[2rem] shadow-sm border border-gray-100"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary">
                <Heart size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">Faire un don</h2>
            </div>
            
            <h3 className="text-xl font-bold mb-4 text-brand-blue">Faire un don unique ou récurrent</h3>
            <ol className="list-decimal list-inside space-y-4 text-gray-600 mb-8 text-lg">
              <li>Choisissez vous-même le montant que vous voulez donner (de 1 à 100 euros, voir plus, il n'y a pas de limite).</li>
              <li>Choisissez un mode de paiement :
                <ul className="list-disc list-inside ml-6 mt-2 space-y-4">
                  <li>Soit par virement sur notre compte bancaire (<Link to="/contact" className="text-brand-primary font-bold hover:underline">contactez-nous pour les détails</Link>).</li>
                  <li>
                    Soit via un paiement en ligne sur PayPal en suivant ce lien.
                    <div className="mt-4 ml-6">
                      <a 
                        href="https://www.paypal.com/donate?token=oSaqrpfIhAeGFloHXHixsus4PAJvZ59AvWkgWXcQ4mzUxpYodV0gFjjc9OS34odT5cwGFitMTEQ6S2yJ" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#00457C] text-white px-6 py-3 rounded-full font-bold hover:bg-[#003366] transition-colors"
                      >
                        <CreditCard size={20} /> Faire un don via PayPal
                      </a>
                    </div>
                  </li>
                </ul>
              </li>
              <li>Pour soutenir notre action 10$ Goma, veuillez mettre la communication : <Link to="/contact" className="text-brand-primary font-bold hover:underline">« JE SUIS GOMA »</Link></li>
            </ol>
            
            <div className="bg-brand-light p-6 rounded-xl flex items-center gap-4 border border-gray-200">
              <CreditCard className="text-brand-blue" size={24} />
              <p className="text-gray-700 font-medium">Votre soutien financier nous permet de concrétiser nos projets sur le terrain et d'apporter une aide directe aux populations vulnérables.</p>
            </div>
          </motion.div>
        </section>

        {/* Section 2: Devenir bénévole */}
        <section id="devenir-benevole" className="scroll-mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-blue text-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-white/10"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white">
                <Users size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Devenir Bénévole</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold mb-4 text-white">Ce que vous trouverez en travaillant avec nous :</h3>
                <ul className="space-y-3 text-gray-300 text-lg">
                  <li className="flex items-start gap-2"><ArrowRight className="text-brand-primary mt-1 shrink-0" size={18} /> de nombreux contacts</li>
                  <li className="flex items-start gap-2"><ArrowRight className="text-brand-primary mt-1 shrink-0" size={18} /> une ambiance chaleureuse</li>
                  <li className="flex items-start gap-2"><ArrowRight className="text-brand-primary mt-1 shrink-0" size={18} /> une équipe compétente</li>
                  <li className="flex items-start gap-2"><ArrowRight className="text-brand-primary mt-1 shrink-0" size={18} /> l'opportunité de gagner en compétences dans plusieurs domaines (communication, administration, technologie, prise de parole, etc.)</li>
                </ul>
                <p className="mt-4 text-gray-400 italic">Pour travailler sur le terrain et/ou offrir vos services bénévolement, prenez contact directement avec la FOM.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 text-white">Ce que nous attendons de vous :</h3>
                <ul className="space-y-3 text-gray-300 text-lg">
                  <li className="flex items-start gap-2"><ArrowRight className="text-brand-primary mt-1 shrink-0" size={18} /> professionnalisme et assiduité</li>
                  <li className="flex items-start gap-2"><ArrowRight className="text-brand-primary mt-1 shrink-0" size={18} /> une large ouverture d'esprit</li>
                  <li className="flex items-start gap-2"><ArrowRight className="text-brand-primary mt-1 shrink-0" size={18} /> la capacité de travailler en équipe</li>
                  <li className="flex items-start gap-2"><ArrowRight className="text-brand-primary mt-1 shrink-0" size={18} /> un engagement d'au minimum un an</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <h3 className="text-xl font-bold mb-4 text-white">De quelles façons est-il possible de s'impliquer auprès de FOM ?</h3>
              <p className="text-gray-300 mb-4 text-lg">Les bénévoles de FOM peuvent accomplir des tâches de différentes natures selon leurs intérêts et leurs compétences. Voici une partie des tâches qu'il est possible d'effectuer en tant que bénévole :</p>
              <ul className="grid md:grid-cols-2 gap-3 text-gray-300 text-lg mb-8">
                <li className="flex items-start gap-2"><div className="w-2 h-2 rounded-full bg-brand-primary mt-2 shrink-0"></div> Organiser ou commanditer un événement bénéfice</li>
                <li className="flex items-start gap-2"><div className="w-2 h-2 rounded-full bg-brand-primary mt-2 shrink-0"></div> Participer à un événement de la Fondation FOM</li>
                <li className="flex items-start gap-2"><div className="w-2 h-2 rounded-full bg-brand-primary mt-2 shrink-0"></div> Soutenir les équipes de financement dans leurs activités</li>
                <li className="flex items-start gap-2"><div className="w-2 h-2 rounded-full bg-brand-primary mt-2 shrink-0"></div> Effectuer diverses tâches administratives</li>
                <li className="flex items-start gap-2"><div className="w-2 h-2 rounded-full bg-brand-primary mt-2 shrink-0"></div> Travailler sur les projets digitaux (réseaux sociaux, sites web, photographie, imagerie, etc.)</li>
              </ul>
              
              <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-brand-dark px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
                Contactez-nous <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </section>

        {/* Section 3: Devenir partenaire */}
        <section id="devenir-partenaire" className="scroll-mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 text-brand-dark p-8 md:p-12 rounded-[2rem] shadow-sm border border-gray-100 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue">
                  <Handshake size={32} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">Devenir Partenaire</h2>
              </div>

              <h3 className="text-xl font-bold mb-4 text-brand-dark">Ce que nous attendons de vous :</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                La Fondation Mwinda FOM est en permanence à la recherche de partenaires pour mener des actions personnalisées. Et comme chaque partenariat est unique, nous en définissons les contours avec vous…
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Pour autant bien entendu qu'il y ait une valeur ajoutée pour la FOM et que ce projet cadre avec nos valeurs. Vous désirez contribuer à l'avancement de notre fondation et surtout appuyer FOM. Il est possible de le faire. Nous vous invitons à nous joindre.
              </p>

              <Link to="/contact" className="inline-flex items-center gap-2 bg-brand-blue text-white px-8 py-3 rounded-full font-bold hover:bg-brand-dark transition-colors">
                <Mail size={18} /> Contactez-nous
              </Link>
            </div>
          </motion.div>
        </section>

      </div>
    </div>
  );
};

export default SoutenezNous;
