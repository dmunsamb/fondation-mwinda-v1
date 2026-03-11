import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { MapPin, Clock, ArrowUpRight } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="bg-white">
      <div className="section-padding">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Projets en Cours</h2>
            <p className="text-gray-600 text-lg">
              Découvrez nos initiatives actuelles sur le terrain, visant à apporter des solutions durables aux défis humanitaires.
            </p>
          </div>
          <Link to="/all-projects" className="text-brand-primary font-bold flex items-center gap-2 hover:gap-3 transition-all shrink-0">
            Voir tous les projets <ArrowUpRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS.filter(p => p.status === 'En cours').map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="h-48 bg-gray-200 relative overflow-hidden">
                <img 
                  src={`https://picsum.photos/seed/human-${project.id}/600/400`} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  width="600"
                  height="400"
                />
                <div className="absolute top-4 right-4 bg-brand-primary text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <Clock size={12} /> {project.status}
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 text-brand-secondary text-sm font-bold mb-3">
                  <MapPin size={14} /> {project.location}
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-brand-primary transition-colors">{project.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                <Link to={`/projects/${project.id}`} className="block w-full py-3 border border-gray-100 rounded-xl text-sm font-bold text-center hover:bg-brand-blue hover:text-white hover:border-brand-blue hover:shadow-lg hover:shadow-brand-blue/20 transition-all duration-300">
                  En savoir plus
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
