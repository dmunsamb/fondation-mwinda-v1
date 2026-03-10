import React from 'react';
import { motion } from 'motion/react';
import { EVENTS } from '../constants';
import { Calendar, MapPin, ArrowUpRight } from 'lucide-react';

const Events = () => {
  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <section className="py-16 px-6 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-transparent pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Nos Événements</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Rejoignez-nous lors de nos prochaines activités et événements culturels pour soutenir nos actions.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EVENTS.map((event, index) => (
            <motion.div 
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gray-50 p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-brand-blue/0 group-hover:bg-brand-blue transition-all duration-300"></div>
              
              <div className="flex items-center gap-3 text-brand-blue font-bold mb-6 bg-brand-blue/5 w-fit px-4 py-2 rounded-full">
                <Calendar size={18} /> {event.date}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-brand-dark group-hover:text-brand-blue transition-colors">{event.title}</h3>
              
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-6">
                <MapPin size={16} className="text-brand-primary" /> {event.location}
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                {event.description}
              </p>

              <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-all ml-auto">
                <ArrowUpRight size={20} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
