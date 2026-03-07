import React from 'react';
import { motion } from 'motion/react';
import { INTERVENTION_AREAS } from '../constants';
import * as Icons from 'lucide-react';

const Interventions = () => {
  return (
    <section id="interventions" className="bg-white">
      <div className="section-padding">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Nos Domaines d'Intervention</h2>
          <div className="w-20 h-1.5 bg-brand-primary mx-auto rounded-full mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Nous intervenons de manière holistique pour répondre aux besoins fondamentaux des populations les plus vulnérables en RDC.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INTERVENTION_AREAS.map((area, index) => {
            const IconComponent = (Icons as any)[area.icon];
            return (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-3xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-2xl hover:shadow-brand-primary/10 transition-all duration-500"
              >
                <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue mb-8 group-hover:scale-110 group-hover:bg-brand-blue group-hover:text-white transition-all duration-500">
                  {IconComponent && <IconComponent size={32} />}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-blue transition-colors">{area.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {area.description}
                </p>
                <ul className="space-y-3">
                  {area.details.map((detail, i) => (
                    <li key={i} className="flex gap-3 text-sm text-gray-500">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-primary shrink-0"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Interventions;
