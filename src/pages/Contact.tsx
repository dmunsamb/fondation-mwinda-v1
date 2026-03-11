import React from 'react';
import ContactComponent from '../components/Contact';
import { MapPin, Phone, Building2, Mail, User } from 'lucide-react';
import { motion } from 'motion/react';

const ContactPage = () => {
  return (
    <div className="pt-20 overflow-hidden">
      <h1 className="sr-only">Contactez la Fondation Mwinda</h1>
      <ContactComponent />
      
      {/* Map or Locations Section */}
      <section className="bg-brand-blue text-white py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Nos Bureaux en RDC</h2>
            <div className="w-20 h-1 bg-brand-primary mx-auto rounded-full mb-6"></div>
            <p className="text-gray-300 text-lg">Retrouvez nos équipes locales dans les principales villes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center max-w-4xl mx-auto">
            {[
              { city: 'Kinshasa', address: 'BADARA II, N’sele', phone: '+243 821 142 302', type: 'Siège Social' },
              { city: 'Mbuji-Mayi', address: 'Mbuji-Mayi, Kasaï-Oriental', phone: '+243 897 742 007', email: 'mbuji-mayi@fondationmwinda.com', rep: 'Henry Lumbu', type: 'Antenne Régionale' },
            ].map((loc, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white/5 p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-white/10 group"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                    <Building2 size={24} />
                  </div>
                  <span className="bg-white/10 text-gray-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">{loc.type}</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-brand-primary transition-colors">{loc.city}</h3>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3 text-gray-400">
                    <MapPin size={18} className="text-brand-primary shrink-0 mt-1" />
                    <p>{loc.address}</p>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400">
                    <Phone size={18} className="text-brand-primary shrink-0" />
                    <p className="font-bold text-white">{loc.phone}</p>
                  </div>
                  {loc.email && (
                    <div className="flex items-center gap-3 text-gray-400">
                      <Mail size={18} className="text-brand-primary shrink-0" />
                      <p>{loc.email}</p>
                    </div>
                  )}
                  {loc.rep && (
                    <div className="flex items-center gap-3 text-gray-400">
                      <User size={18} className="text-brand-primary shrink-0" />
                      <p>{loc.rep}</p>
                    </div>
                  )}
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
