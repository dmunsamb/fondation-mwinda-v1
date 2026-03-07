import React from 'react';
import { motion } from 'motion/react';
import InterventionsComponent from '../components/Interventions';
import { PARTNERS } from '../constants';

const About = () => {
  return (
    <div className="pt-32">
      <section className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-4 block">Qui sommes-nous</span>
            <h1 className="text-5xl md:text-6xl font-bold mb-8">Notre Histoire & Mission</h1>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              La Fondation Mwinda (FOM) est née d'une volonté profonde de faire briller la vie des Congolaises et Congolais par des actions humanitaires concrètes. S’impliquer au quotidien pour l’épanouissement des vulnérables est devenu notre raison d'être.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed italic border-l-4 border-brand-primary pl-6">
              "Nous pensons que le développement d’un pays doit passer par le développement personnel de l’individu."
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              La mission de la FOM vise à soutenir le bien-être chez les enfants, les jeunes, et les familles par le renforcement des cinq besoins fondamentaux de l'homme selon la pyramide de Maslow. Nous croyons fermement que chaque individu, s'il est soutenu, peut devenir un acteur du changement pour sa communauté et son économie.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              À travers nos cours, nos ateliers et nos centres de santé, nous offrons les outils nécessaires pour que chacun puisse se développer personnellement et contribuer activement à la société congolaise.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary shrink-0 font-bold">01</div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Protection Globale</h4>
                  <p className="text-gray-500">Nous prenons en charge les enfants vulnérables et assurons un environnement sécurisé pour les survivantes.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-brand-secondary/10 rounded-full flex items-center justify-center text-brand-secondary shrink-0 font-bold">02</div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Éducation Inclusive</h4>
                  <p className="text-gray-500">De l'école élémentaire à l'alphabétisation des adultes, nous ouvrons les portes du savoir.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/african-children-joy/800/1000" 
                alt="Enfants de la fondation" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
                width="800"
                height="1000"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl max-w-xs hidden md:block">
              <p className="text-brand-dark font-display italic text-lg leading-relaxed">
                "Chaque individu doit pouvoir contribuer à sa communauté et à son économie."
              </p>
              <div className="mt-4 font-bold text-brand-primary">— Direction FOM</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interventions Section Integrated into About */}
      <InterventionsComponent />

      {/* Partners Section */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nos Partenaires</h2>
            <div className="w-20 h-1 bg-brand-blue mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 text-lg">Ils nous font confiance et soutiennent nos actions sur le terrain.</p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
            {PARTNERS.map((partner, index) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="w-32 md:w-40 grayscale hover:grayscale-0 transition-all duration-500"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="w-full h-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-dark text-white py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16">Nos Valeurs Fondamentales</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Intégrité', desc: 'Nous agissons avec transparence et honnêteté dans toutes nos actions.' },
              { title: 'Compassion', desc: 'L\'humain est au cœur de nos préoccupations quotidiennes.' },
              { title: 'Excellence', desc: 'Nous visons un impact durable et de haute qualité pour nos bénéficiaires.' },
            ].map((val, i) => (
              <div key={i} className="p-8 border border-white/10 rounded-3xl hover:bg-white/5 transition-colors">
                <h3 className="text-2xl font-bold mb-4 text-brand-primary">{val.title}</h3>
                <p className="text-gray-400 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
