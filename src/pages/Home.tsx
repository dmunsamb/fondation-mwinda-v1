import React from 'react';
import Hero from '../components/Hero';
import { motion } from 'motion/react';
import { INTERVENTION_AREAS, EVENTS } from '../constants';
import * as Icons from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      
      {/* Quick About Summary - Dynamic Layout */}
      <section className="relative py-24 px-6 bg-white overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-brand-accent/30 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-72 h-72 bg-brand-primary/10 rounded-full blur-3xl opacity-50"></div>
        </div>

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-blue"></span>
              À Propos de Nous
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-brand-dark leading-tight">
              Notre Mission <br/>
              <span className="text-brand-primary">Humanitaire</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed italic border-l-4 border-brand-primary pl-6">
              "Nous pensons que le développement d’un pays doit passer par le développement personnel de l’individu."
            </p>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              La Fondation Mwinda s'engage pour le bien-être des enfants, des jeunes et des familles en RDC. Nous brisons le cycle de la pauvreté en offrant des opportunités concrètes.
            </p>
            <Link to="/about" className="group inline-flex items-center gap-3 text-brand-blue font-bold text-lg hover:gap-4 transition-all">
              <span className="border-b-2 border-brand-blue pb-1">En savoir plus sur nous</span>
              <Icons.ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-2 gap-6 relative">
            {/* Floating decorative elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 w-20 h-20 bg-brand-primary/20 rounded-full blur-xl hidden md:block"
            />

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -5, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.1)" }}
              className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100 flex flex-col justify-between h-48 md:h-64"
            >
              <div className="w-12 h-12 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary mb-4">
                <Icons.Map size={24} />
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-brand-dark mb-2">16</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider font-bold">Régions</div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -5, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.1)" }}
              className="bg-brand-blue text-white p-8 rounded-[2rem] shadow-xl shadow-brand-blue/20 flex flex-col justify-between h-48 md:h-64 mt-8 md:mt-12"
            >
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center text-white mb-4">
                <Icons.Globe size={24} />
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">6</div>
                <div className="text-sm text-white/70 uppercase tracking-wider font-bold">Pays</div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              className="bg-brand-dark text-white p-8 rounded-[2rem] shadow-xl col-span-2 flex items-center justify-between relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-primary/20 transition-colors duration-500"></div>
              
              <div className="relative z-10">
                <div className="text-5xl md:text-6xl font-bold text-brand-primary mb-2">4.037</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider font-bold">Personnes touchées</div>
              </div>
              <div className="relative z-10 w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-brand-primary">
                <Icons.Users size={32} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* YouTube Presentation Section - Dark & Immersive */}
      <section className="relative py-32 px-6 bg-brand-dark overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-transparent pointer-events-none"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-12 h-1 bg-brand-primary rounded-full"></span>
                <span className="text-brand-primary font-bold tracking-widest uppercase text-sm">Présentation Vidéo</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white leading-tight">Découvrez notre impact <br/>en <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-orange-400">images</span></h2>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-lg">
                Suivez nos actions sur le terrain à travers notre chaîne YouTube. Nous partageons régulièrement les avancées de nos projets et les témoignages de nos bénéficiaires.
              </p>
              <a 
                href="https://www.youtube.com/channel/UCwvOgJjt7TQkwnp6roZwgbQ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4 bg-white/5 hover:bg-red-600 text-white px-8 py-4 rounded-full font-bold border border-white/10 hover:border-red-600 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-red-600 transition-colors">
                  <Icons.Youtube size={20} />
                </div>
                <span>S'abonner à notre chaîne</span>
              </a>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10 group"
            >
              <div className="absolute inset-0 bg-brand-blue/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none z-10"></div>
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/watch?v=fcGI_GIJy5Y" 
                title="Fondation Mwinda Presentation"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                loading="lazy"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Events Calendar Section - Clean & Modern */}
      <section className="py-24 px-6 bg-brand-light relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-dark">Calendrier des Événements</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Rejoignez-nous lors de nos prochaines activités et événements culturels pour soutenir nos actions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {EVENTS.map((event, index) => (
              <motion.div 
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-brand-blue/0 group-hover:bg-brand-blue transition-all duration-300"></div>
                
                <div className="flex items-center gap-3 text-brand-blue font-bold mb-6 bg-brand-blue/5 w-fit px-4 py-2 rounded-full">
                  <Icons.Calendar size={18} /> {event.date}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-brand-dark group-hover:text-brand-blue transition-colors">{event.title}</h3>
                
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-6">
                  <Icons.MapPin size={16} className="text-brand-primary" /> {event.location}
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {event.description}
                </p>

                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-all ml-auto">
                  <Icons.ArrowUpRight size={20} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interventions Preview - Cards with Hover Effects */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-bold mb-4 text-brand-dark">Domaines d'Action</h2>
              <p className="text-gray-600 text-lg">Un impact réel et mesurable sur le terrain.</p>
            </div>
            <Link to="/about" className="px-8 py-3 rounded-full border border-gray-200 font-bold hover:bg-brand-dark hover:text-white hover:border-brand-dark transition-all">
              Voir tous les domaines
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {INTERVENTION_AREAS.slice(0, 3).map((area, index) => {
              const IconComponent = (Icons as any)[area.icon];
              return (
                <motion.div 
                  key={area.id} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-brand-light p-10 rounded-[2.5rem] hover:bg-brand-blue hover:text-white transition-all duration-500 group"
                >
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-dark mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500">
                    {IconComponent && <IconComponent size={32} />}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{area.title}</h3>
                  <p className="text-gray-500 mb-8 group-hover:text-blue-100 transition-colors leading-relaxed">{area.description}</p>
                  <Link to="/about" className="inline-flex items-center gap-2 font-bold group-hover:gap-3 transition-all">
                    Détails <Icons.ArrowRight size={18} />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
