import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { MapPin, Clock, CheckCircle, ArrowRight } from 'lucide-react';

const statusColors: Record<string, string> = {
  'En cours': 'bg-orange-100 text-orange-700',
  'Réalisé': 'bg-green-100 text-green-700',
  'Planifié': 'bg-blue-100 text-blue-700',
};

const ProjectCard = ({ project, index }: { project: any; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.08 }}
    className="bg-gray-50 border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group"
  >
    <div className="h-48 bg-gray-200 relative overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
        referrerPolicy="no-referrer"
        loading="lazy"
      />
      <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 ${statusColors[project.status] || 'bg-gray-100 text-gray-700'}`}>
        {project.status === 'En cours' ? <Clock size={11} /> : <CheckCircle size={11} />}
        {project.status}
      </div>
      {project.year && (
        <div className="absolute top-4 left-4 bg-black/50 text-white px-2 py-1 rounded-full text-xs font-bold">
          {project.year}
        </div>
      )}
    </div>
    <div className="p-6">
      <div className="flex items-center gap-2 text-brand-secondary text-sm font-bold mb-2">
        <MapPin size={13} /> {project.location}
      </div>
      <Link to={`/projects/${project.id}`} className="text-lg font-bold text-brand-dark group-hover:text-brand-primary transition-colors block mb-3 leading-snug">
        {project.title}
      </Link>
      <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-2">{project.description}</p>
      <Link to={`/projects/${project.id}`} className="inline-flex items-center gap-2 text-sm font-bold text-brand-primary hover:gap-3 transition-all group/link">
        En savoir plus <ArrowRight size={15} className="group-hover/link:translate-x-0.5 transition-transform" />
      </Link>
    </div>
  </motion.div>
);

const AllProjects = () => {
  const enCours = PROJECTS.filter(p => p.status === 'En cours');
  const realises = PROJECTS.filter(p => p.status === 'Réalisé');

  return (
    <div className="pt-24 bg-white min-h-screen">
      {/* Header */}
      <section className="py-16 px-6 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-transparent pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Tous nos Projets</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Découvrez l'ensemble de nos initiatives — en cours et réalisées — au service des communautés congolaises.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
        {/* En cours */}
        {enCours.length > 0 && (
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-bold">
                <Clock size={15} /> En cours
              </div>
              <div className="h-px bg-gray-100 flex-grow"></div>
              <span className="text-gray-400 text-sm">{enCours.length} projet{enCours.length > 1 ? 's' : ''}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {enCours.map((project, i) => <ProjectCard key={project.id} project={project} index={i} />)}
            </div>
          </div>
        )}

        {/* Réalisés */}
        {realises.length > 0 && (
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-bold">
                <CheckCircle size={15} /> Réalisés
              </div>
              <div className="h-px bg-gray-100 flex-grow"></div>
              <span className="text-gray-400 text-sm">{realises.length} projet{realises.length > 1 ? 's' : ''}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {realises.map((project, i) => <ProjectCard key={project.id} project={project} index={i} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProjects;
