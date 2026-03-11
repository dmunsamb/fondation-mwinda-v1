import React, { useRef, useState } from 'react';
import { AnimatePresence } from 'motion/react';
import Hero from '../components/Hero';
import { motion } from 'motion/react';
import { INTERVENTION_AREAS, EVENTS, PROJECTS, BLOG_POSTS } from '../constants';
import * as Icons from 'lucide-react';
import { Link } from 'react-router-dom';

const FOM_LOGO_FALLBACK = '/images/fom-logo-vertical.webp';

const HomeEventsSection = () => {
  const [zoomedEvent, setZoomedEvent] = useState<any>(null);
  const upcoming = EVENTS.filter((e: any) => e.status === 'upcoming');

  return (
    <section className="py-24 px-6 bg-brand-blue text-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Calendrier des Evenements</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">Rejoignez-nous lors de nos prochaines activites et evenements culturels.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {upcoming.map((event: any, index: number) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-2xl overflow-hidden border border-white/10 group cursor-pointer relative"
              style={{ aspectRatio: '4/5' }}
              onClick={() => setZoomedEvent(event)}
            >
              {/* Flyer image */}
              <img
                src={event.flyer || FOM_LOGO_FALLBACK}
                alt={event.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <div className="flex items-center gap-1.5 text-brand-primary text-xs font-bold mb-1">
                  <Icons.Calendar size={12} /> {event.date}
                </div>
                <p className="text-white font-bold text-sm leading-snug mb-1">{event.title}</p>
                <div className="flex items-center gap-1 text-gray-300 text-xs">
                  <Icons.MapPin size={11} /> {event.location}
                </div>
              </div>
              {/* Always-visible subtle date badge */}
              <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-sm text-white text-xs font-bold px-2 py-1 rounded-full opacity-80 group-hover:opacity-0 transition-opacity">
                {event.date}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/events"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium transition-colors"
          >
            Voir tous les evenements <Icons.ArrowRight size={14} />
          </Link>
        </div>
      </div>

      {/* Fullscreen lightbox */}
      <AnimatePresence>
        {zoomedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setZoomedEvent(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 280, damping: 24 }}
              className="relative flex flex-col items-center"
              style={{ maxHeight: '95vh' }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setZoomedEvent(null)}
                className="absolute -top-3 -right-3 z-10 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
              >
                <Icons.X size={18} />
              </button>
              <img
                src={zoomedEvent.flyer || FOM_LOGO_FALLBACK}
                alt={zoomedEvent.title}
                className="rounded-2xl shadow-2xl object-contain"
                style={{ maxHeight: '85vh', maxWidth: '90vw' }}
              />
              <div className="mt-3 text-center text-white">
                <p className="font-bold">{zoomedEvent.title}</p>
                <p className="text-sm text-gray-400">{zoomedEvent.date} — {zoomedEvent.location}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const Home = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

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
      <section className="relative py-32 px-6 bg-brand-blue overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/20 to-transparent pointer-events-none"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
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
                src="https://www.youtube.com/embed/8mWVrey1xa0?si=rEuNVKmhYqnpPBaG" 
                title="Fondation Mwinda Presentation"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                loading="lazy"
              ></iframe>
            </motion.div>
          </div>

          {/* New Project Listing */}
          <div>
            <div className="flex items-center justify-between mb-10">
              <h3 className="text-3xl font-bold text-white">Nos Projets Récents</h3>
              <Link to="/all-projects" className="text-brand-primary hover:text-white transition-colors font-bold flex items-center gap-2">
                Voir tous les projets <Icons.ArrowRight size={18} />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {PROJECTS.filter(p => p.status === 'En cours').slice(0, 3).map((project, index) => (
                <motion.div 
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden group hover:bg-white/10 transition-colors"
                >
                  <div className="aspect-video overflow-hidden relative">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 right-4 bg-brand-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                      {project.status}
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-white mb-3 line-clamp-2">{project.title}</h4>
                    <Link to={`/projects/${project.id}`} className="inline-flex items-center gap-2 text-brand-primary font-bold group-hover:text-white transition-colors">
                      Détails du projet <Icons.ArrowRight size={16} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comment s'impliquer Section */}
      <section className="py-24 px-6 bg-white text-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Comment s'impliquer ?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Rejoignez le mouvement et aidez-nous à faire la différence. Chaque action compte.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-gray-50 border border-gray-100 p-8 rounded-[2rem] text-center shadow-sm hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 bg-brand-blue/10 text-brand-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Icons.Heart size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Faire un don</h3>
              <p className="text-gray-600 mb-8">Votre soutien financier nous permet de concrétiser nos projets sur le terrain.</p>
              <Link to="/soutenez-nous#faire-un-don" className="inline-block bg-brand-blue text-white px-8 py-3 rounded-full font-bold hover:bg-brand-dark transition-colors">
                Soutenir
              </Link>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-gray-50 border border-gray-100 p-8 rounded-[2rem] text-center shadow-sm hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 bg-brand-blue/10 text-brand-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Icons.Users size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Devenir bénévole</h3>
              <p className="text-gray-600 mb-8">Mettez vos compétences au service de notre cause et vivez une expérience humaine unique.</p>
              <Link to="/soutenez-nous#devenir-benevole" className="inline-block bg-brand-blue text-white px-8 py-3 rounded-full font-bold hover:bg-brand-dark transition-colors">
                Rejoindre
              </Link>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-gray-50 border border-gray-100 p-8 rounded-[2rem] text-center shadow-sm hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 bg-brand-blue/10 text-brand-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Icons.Handshake size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Devenir partenaire</h3>
              <p className="text-gray-600 mb-8">Associez votre entreprise ou organisation à nos actions pour un impact à grande échelle.</p>
              <Link to="/soutenez-nous#devenir-partenaire" className="inline-block bg-brand-blue text-white px-8 py-3 rounded-full font-bold hover:bg-brand-dark transition-colors">
                Collaborer
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Events Calendar Section */}
      <HomeEventsSection />

      {/* Interventions Preview - Cards with Hover Effects */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-brand-dark">Domaines d'Action</h2>
            <p className="text-gray-600 text-lg">Un impact réel et mesurable sur le terrain.</p>
          </div>
          
          <div className="relative group">
            <div 
              ref={scrollRef}
              className="flex overflow-x-auto snap-x snap-mandatory gap-8 pb-8 hide-scrollbar scroll-smooth"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {INTERVENTION_AREAS.map((area, index) => {
                const IconComponent = (Icons as any)[area.icon];
                return (
                  <motion.div 
                    key={area.id} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="min-w-[300px] md:min-w-[350px] snap-center bg-gray-50 border border-gray-100 p-10 rounded-[2.5rem] hover:bg-brand-blue hover:text-white transition-all duration-500 group/card"
                  >
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-dark mb-8 shadow-sm group-hover/card:scale-110 transition-transform duration-500">
                      {IconComponent && <IconComponent size={32} />}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{area.title}</h3>
                    <p className="text-gray-600 group-hover/card:text-blue-100 transition-colors leading-relaxed">{area.description}</p>
                  </motion.div>
                );
              })}
            </div>
            
            {/* Navigation Arrows */}
            <button 
              onClick={() => scroll('left')}
              className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg text-brand-dark opacity-50 hover:opacity-100 transition-opacity z-10"
              aria-label="Précédent"
            >
              <Icons.ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg text-brand-dark opacity-50 hover:opacity-100 transition-opacity z-10"
              aria-label="Suivant"
            >
              <Icons.ChevronRight size={24} />
            </button>
          </div>

          <div className="text-center mt-8">
            <Link to="/about" className="inline-flex items-center gap-2 bg-brand-blue text-white px-8 py-4 rounded-full font-bold hover:bg-brand-dark transition-colors">
              Découvrir tous nos domaines d'action <Icons.ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-24 px-6 bg-brand-blue text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-bold mb-4 text-white">Derniers Articles</h2>
              <p className="text-gray-300 text-lg">Suivez l'actualité de la Fondation Mwinda.</p>
            </div>
            <Link to="/blog" className="px-8 py-3 rounded-full border border-white/20 text-white font-bold hover:bg-white hover:text-brand-blue transition-all">
              Voir tout le blog
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {BLOG_POSTS.slice(0, 2).map((post, index) => (
              <motion.div 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden group flex flex-col"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <div className="text-brand-primary font-bold text-sm mb-3">{new Date(post.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                  <Link to={`/blog/${post.id}`} className="text-2xl font-bold text-white mb-4 group-hover:text-brand-primary transition-colors block hover:text-brand-primary">{post.title}</Link>
                  <p className="text-gray-400 mb-6 line-clamp-3 flex-grow">{post.excerpt}</p>
                  <Link to={`/blog/${post.id}`} className="inline-flex items-center gap-2 text-white font-bold hover:text-brand-primary transition-colors mt-auto">
                    Lire la suite <Icons.ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
