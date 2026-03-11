import React from 'react';
import ProjectsComponent from '../components/Projects';
import { BLOG_POSTS } from '../constants';
import { Calendar, ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const ProjectsPage = () => {
  return (
    <div className="pt-20 overflow-hidden">
      <h1 className="sr-only">Nos Projets et Actualités</h1>
      <ProjectsComponent />
      
      {/* Blog Section - Magazine Style */}
      <section className="py-24 px-6 bg-brand-blue text-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/20 text-brand-primary text-xs font-bold uppercase tracking-widest mb-4 border border-brand-primary/20">
                <span className="w-2 h-2 rounded-full bg-brand-primary"></span>
                Actualités
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white">De notre Blog</h2>
            </div>
            <p className="text-gray-300 text-lg max-w-md text-right md:text-left">
              Suivez nos actualités et découvrez l'impact de nos actions au quotidien sur le terrain.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BLOG_POSTS.slice(0, 4).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col h-full bg-white/5 rounded-[1.5rem] overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-bold text-white flex items-center gap-1.5">
                    <Calendar size={10} className="text-brand-primary" />
                    {new Date(post.date).toLocaleDateString('fr-FR', { month: 'short', year: 'numeric' })}
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-base font-bold text-white mb-2 line-clamp-2 group-hover:text-brand-primary transition-colors leading-snug">{post.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 flex-grow">{post.excerpt}</p>
                  <Link
                    to={`/blog/${post.id}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-brand-primary text-sm font-bold hover:gap-2.5 transition-all"
                  >
                    Lire <ArrowUpRight size={14} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Button */}
          <div className="mt-12 text-center">
            <Link
              to="/blog"
              className="inline-flex items-center gap-3 bg-white text-brand-dark px-8 py-4 rounded-full font-bold hover:bg-brand-primary hover:text-white transition-all group"
            >
              Voir tous les articles <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Project Detail Section - Dark Theme */}
      <section className="py-32 px-6 bg-white text-brand-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue/5 blur-3xl rounded-full translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-brand-primary/5 blur-3xl rounded-full -translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-primary to-brand-blue rounded-[2.5rem] opacity-10 blur-lg"></div>
              <img 
                src="/images/projects/orphelinat-lualaba.webp"
                alt="Chantier Lualaba"
                className="relative rounded-[2rem] shadow-2xl border border-gray-100 w-full"
                referrerPolicy="no-referrer"
                loading="lazy"
                width="800"
                height="600"
              />
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white text-brand-dark p-6 rounded-2xl shadow-xl border border-gray-100 hidden md:block">
                <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Budget Estimé</div>
                <div className="text-3xl font-bold text-brand-primary">$150,000</div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="inline-block px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary font-bold mb-6 border border-brand-primary/20">
                Projet Phare 2025
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Construction de l'Orphelinat <span className="text-brand-primary">Lualaba</span>
              </h2>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed border-l-2 border-brand-blue pl-6">
                Ce projet de construction est l'un de nos plus grands défis pour 2025. Situé dans la province du Lualaba, cet orphelinat pourra accueillir plus de 50 enfants dans des conditions de confort et de sécurité optimales.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                {[
                  { label: 'Capacité', value: '50+ Lits' },
                  { label: 'Surface', value: '1200 m²' },
                  { label: 'Statut', value: 'En cours' },
                  { label: 'Livraison', value: 'Déc 2025' },
                ].map((item, i) => (
                  <div key={i} className="bg-gray-50 p-4 rounded-xl border border-gray-100 hover:bg-gray-100 transition-colors">
                    <div className="text-gray-500 text-sm mb-1">{item.label}</div>
                    <div className="text-xl font-bold">{item.value}</div>
                  </div>
                ))}
              </div>

              <button className="bg-brand-blue text-white px-8 py-4 rounded-full font-bold hover:bg-brand-dark transition-all flex items-center gap-3 group">
                Soutenir ce projet <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
