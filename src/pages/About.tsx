import React, { useState } from 'react';
import { motion } from 'motion/react';
import InterventionsComponent from '../components/Interventions';
import { PARTNERS, ADMINS } from '../constants';
import { PlayCircle } from 'lucide-react';

const About = () => {
  const [activeVideo, setActiveVideo] = useState({
    id: 'azIOZB9nEko',
    start: 57,
    title: 'Présentation Fondation Mwinda'
  });

  const VIDEOS = [
    { id: 'svx0DRN8ieU', start: 0, title: 'Urgent 🚨 Découvrez la fondation Mwinda qui donne l’espoir au Congolais' },
    { id: '3AWvpJFlmDc', start: 0, title: 'LA FONDATION MWINDA EN RDC OUVRE SES PORTES AU CONGOLAIS' },
    { id: 'Q4KuYlA9fo0', start: 0, title: 'Fondation Mwinda chez les personnes de troisième âge' },
    { id: 'Mv_nJNQAF3U', start: 0, title: 'Ba Réalités ya Kinshasa avec La Fondation MWINDA...' }
  ];

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
              La mission de la FOM vise à soutenir le bien-être chez les enfants, les jeunes, et les familles par le renforcement des six besoins fondamentaux de l'homme selon la pyramide de Maslow. Nous croyons fermement que chaque individu, s'il est soutenu, peut devenir un acteur du changement pour sa communauté et son économie.
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
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center text-brand-blue shrink-0 font-bold">03</div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Protection de la Santé</h4>
                  <p className="text-gray-500">Soins de santé primaires et soutien aux survivants de violences.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary shrink-0 font-bold">04</div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Autonomisation</h4>
                  <p className="text-gray-500">Soutien à l'entrepreneuriat et renforcement des capacités économiques.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-brand-secondary/10 rounded-full flex items-center justify-center text-brand-secondary shrink-0 font-bold">05</div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Environnement</h4>
                  <p className="text-gray-500">Sensibilisation et actions pour la préservation de notre écosystème.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center text-brand-blue shrink-0 font-bold">06</div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Culture</h4>
                  <p className="text-gray-500">Renforcer l'identité culturelle à travers l'art et promouvoir les valeurs, patrimoines et art congolais.</p>
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
                src="https://scontent-bru2-1.xx.fbcdn.net/v/t39.30808-6/484812960_962454859416958_1295299767394697944_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_ohc=mgFUxNz6MQsQ7kNvwGWmUeS&_nc_oc=Adnwp_JfB16hVq23PAI2xPaSJtS6W1EvkFgAS4RnVSf3q9gVCg7LGDmHxajUoGu3JjA&_nc_zt=23&_nc_ht=scontent-bru2-1.xx&_nc_gid=ymhm6A3b6RcIsXEUIz1pTQ&_nc_ss=8&oh=00_AfylQcyQ6JdeDtx64rWEAyw_e-nDYwr6pPT8QPi_sGtCYA&oe=69B4D7C2" 
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

      <section className="bg-brand-blue text-white py-24 px-6">
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

      {/* Timeline Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Notre Histoire</h2>
            <div className="w-20 h-1 bg-brand-primary mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 text-lg">Les moments clés qui ont façonné la Fondation Mwinda.</p>
          </div>
          
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-brand-primary/30 before:to-transparent">
            {[
              { date: 'Octobre 2019', title: 'Ouverture du collège', desc: 'La FOM a ouvert le collège Mwinda nôtre avenir.' },
              { date: 'Janvier 2020', title: 'Partenariat Stratégique', desc: 'La FOM a développé un partenariat avec l’hôtel de ville de Kinshasa.' },
              { date: 'Mars 2020', title: 'Journée de la Femme', desc: 'Célébration auprès des femmes de Uvira en raison des massacres vécus.' },
              { date: 'Avril 2020', title: 'Micro-crédits', desc: 'Lancement des micro-crédits aux personnes handicapées de Kintambo et aux femmes seules.' }
            ].map((item, index) => (
              <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-brand-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white shadow-sm border border-gray-100 group-hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-brand-primary">{item.date}</span>
                  </div>
                  <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Group Photo Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl relative">
            <img 
              src="https://scontent-bru2-1.xx.fbcdn.net/v/t39.30808-6/603085061_1181759967486445_9023473575802469898_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_ohc=hjAoPEcwtmoQ7kNvwETS48Q&_nc_oc=Adm5bIpELTZoKRNYZeFLJHsrqQ9HbL4K3JYd1C4gaiSm4LodhHWKUKCo1lXk8WfP5k4&_nc_zt=23&_nc_ht=scontent-bru2-1.xx&_nc_gid=UrBx_eZUXuF6KpLv6GmZgg&_nc_ss=8&oh=00_AfxjqLCKRRhE5gyrM0QLdVTEXs4IXoqZic46pSnPsAB6EA&oe=69B4EB3F" 
              alt="Atelier de Noël FOM à Paris (2025)" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-12">
              <h3 className="text-white text-2xl md:text-4xl font-bold mb-2">Ensemble, nous créons un avenir meilleur.</h3>
              <p className="text-gray-300 font-medium">Atelier de Noël FOM à Paris (2025)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6 bg-brand-blue text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Notre Équipe</h2>
            <div className="w-20 h-1 bg-brand-primary mx-auto rounded-full mb-6"></div>
            <p className="text-gray-300 text-lg">Les personnes dévouées derrière la Fondation Mwinda.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {ADMINS.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-white/10 group"
              >
                <div className="aspect-square overflow-hidden bg-white/10">
                  <img 
                    src={member.photoUrl} 
                    alt={member.name} 
                    className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${member.name === 'Nancy Mwinda' ? 'object-top scale-125 group-hover:scale-150' : ''}`}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-bold text-xl mb-1 text-white">{member.name}</h3>
                  <p className="text-brand-primary text-sm font-medium">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-brand-dark">Nos Vidéos</h2>
            <div className="w-20 h-1 bg-brand-primary mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 text-lg mb-8">Découvrez nos actions en images.</p>
            <a 
              href="https://www.youtube.com/channel/UCwvOgJjt7TQkwnp6roZwgbQ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full font-bold hover:bg-red-700 transition-colors"
            >
              <PlayCircle className="w-5 h-5" />
              Visiter notre chaîne YouTube
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="aspect-video rounded-3xl overflow-hidden shadow-xl bg-gray-100">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src={`https://www.youtube.com/embed/${activeVideo.id}?start=${activeVideo.start}`} 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <h3 className="text-2xl font-bold mt-6 text-brand-dark">{activeVideo.title}</h3>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-xl mb-4 text-brand-dark">Plus de vidéos</h4>
              {VIDEOS.map((video, index) => (
                <button
                  key={index}
                  onClick={() => setActiveVideo(video)}
                  className={`w-full text-left p-4 rounded-2xl flex items-start gap-4 transition-colors ${
                    activeVideo.id === video.id && activeVideo.title === video.title
                      ? 'bg-brand-primary/10 border-brand-primary border text-brand-dark'
                      : 'bg-gray-50 border-transparent border hover:bg-gray-100 text-gray-600'
                  }`}
                >
                  <div className="w-32 aspect-video bg-gray-200 rounded-lg overflow-hidden shrink-0 relative">
                    <img 
                      src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`} 
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <PlayCircle className="w-8 h-8 text-white opacity-80" />
                    </div>
                  </div>
                  <div>
                    <h5 className="font-bold text-sm line-clamp-2">{video.title}</h5>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
