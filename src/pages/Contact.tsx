import React from 'react';
import ContactComponent from '../components/Contact';
import { MapPin, Phone, Building2 } from 'lucide-react';
import { motion } from 'motion/react';

const ContactPage = () => {
  return (
    <div className="pt-20 overflow-hidden">
      <h1 className="sr-only">Contactez la Fondation Mwinda</h1>
      <ContactComponent />
      
      {/* Map or Locations Section */}
      <section className="bg-brand-light py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-dark">Nos Bureaux en RDC</h2>
            <div className="w-20 h-1 bg-brand-primary mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 text-lg">Retrouvez nos équipes locales dans les principales villes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { city: 'Mbuji-Mayi', address: 'Siège Social, Zone de Bipemba', phone: '+243 812 345 678', type: 'Siège Social' },
              { city: 'Kinshasa', address: 'Quartier Bandara, Kinshasa', phone: '+243 823 456 789', type: 'Bureau de Liaison' },
              { city: 'Lubumbashi', address: 'Centre-ville, Lubumbashi', phone: '+243 845 678 901', type: 'Antenne Régionale' },
            ].map((loc, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                    <Building2 size={24} />
                  </div>
                  <span className="bg-gray-100 text-gray-500 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">{loc.type}</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-brand-dark group-hover:text-brand-primary transition-colors">{loc.city}</h3>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3 text-gray-500">
                    <MapPin size={18} className="text-brand-primary shrink-0 mt-1" />
                    <p>{loc.address}</p>
                  </div>
                  <div className="flex items-center gap-3 text-gray-500">
                    <Phone size={18} className="text-brand-primary shrink-0" />
                    <p className="font-bold text-brand-dark">{loc.phone}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
