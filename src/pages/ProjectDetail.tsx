import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { PROJECTS } from '../constants';
import { ArrowLeft, MapPin, Calendar, ArrowRight } from 'lucide-react';

const statusColors: Record<string, string> = {
  'En cours': 'bg-orange-100 text-orange-700 border-orange-200',
  'Réalisé': 'bg-green-100 text-green-700 border-green-200',
  'Planifié': 'bg-blue-100 text-blue-700 border-blue-200',
};

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find(p => p.id === id);

  if (!project) {
    return (
      <div className="pt-32 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Projet introuvable</h1>
          <Link to="/projects" className="text-brand-primary font-bold hover:underline">← Retour aux projets</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 bg-white min-h-screen">
      {/* Hero Image */}
      <div className="w-full h-72 md:h-[28rem] overflow-hidden bg-gray-100 relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 max-w-5xl mx-auto">
          <div className="flex flex-wrap gap-3 mb-4">
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${statusColors[project.status] || 'bg-gray-100 text-gray-700 border-gray-200'}`}>
              {project.status}
            </span>
            {project.year && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/20 text-white border border-white/30">
                <Calendar size={10} /> {project.year}
              </span>
            )}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">{project.title}</h1>
          <div className="flex items-center gap-2 text-white/80 mt-3 text-sm">
            <MapPin size={14} /> {project.location}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Back link */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-brand-primary transition-colors text-sm font-bold mb-10 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Retour aux projets
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              {(project.body as any[]).map((block: any, i: number) => {
                if (block.type === 'paragraph') {
                  return (
                    <p key={i} className="text-gray-600 leading-relaxed text-lg">
                      {block.text}
                    </p>
                  );
                }
                if (block.type === 'section') {
                  return (
                    <div key={i} className="pt-4">
                      <h2 className="text-xl font-bold text-brand-dark mb-3 border-l-4 border-brand-primary pl-4">{block.title}</h2>
                      <p className="text-gray-600 leading-relaxed text-lg">{block.text}</p>
                    </div>
                  );
                }
                if (block.type === 'list') {
                  return (
                    <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                      {block.title && <h3 className="text-lg font-bold text-brand-dark mb-4">{block.title}</h3>}
                      <ul className="space-y-3">
                        {block.items.map((item: string, j: number) => (
                          <li key={j} className="flex items-start gap-3 text-gray-600">
                            <div className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-primary shrink-0"></div>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                }
                if (block.type === 'quote') {
                  return (
                    <blockquote key={i} className="border-l-4 border-brand-primary pl-6 py-2 my-6">
                      <p className="text-gray-700 italic text-lg leading-relaxed">{block.text}</p>
                    </blockquote>
                  );
                }
                return null;
              })}
            </motion.div>

            {/* CTA */}
            <div className="mt-12 pt-8 border-t border-gray-100">
              <Link
                to="/soutenez-nous"
                className="inline-flex items-center gap-3 bg-brand-dark text-white px-8 py-4 rounded-full font-bold hover:bg-brand-blue transition-colors group"
              >
                Soutenir ce projet
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Sidebar — Highlights */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-brand-blue/5 rounded-3xl p-8 border border-brand-blue/10 sticky top-28"
            >
              <h3 className="text-lg font-bold text-brand-dark mb-6">Informations clés</h3>
              <div className="space-y-4">
                {(project.highlights as any[]).map((h: any, i: number) => (
                  <div key={i} className="flex flex-col gap-1 py-3 border-b border-gray-100 last:border-0">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{h.label}</span>
                    <span className="text-lg font-bold text-brand-dark">{h.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
