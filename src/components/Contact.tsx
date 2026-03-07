import React from 'react';
import { motion } from 'motion/react';
import { ADMINS } from '../constants';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-light -skew-x-12 translate-x-1/4 z-0"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl z-0"></div>

      <div className="section-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Form & Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-brand-dark">Contactez-nous</h2>
            <p className="text-gray-600 text-lg mb-12 leading-relaxed">
              Vous souhaitez nous soutenir, devenir partenaire ou simplement en savoir plus ? N'hésitez pas à nous laisser un message.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex gap-6 group">
                <div className="w-14 h-14 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1 text-brand-dark">Siège Social</h4>
                  <p className="text-gray-500">Zone de santé de Bipemba, Mbuji-Mayi, RDC</p>
                </div>
              </div>
              <div className="flex gap-6 group">
                <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary shrink-0 group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1 text-brand-dark">Email</h4>
                  <p className="text-gray-500">contact@fondationmwinda.com</p>
                </div>
              </div>
            </div>

            <form className="space-y-6 bg-white p-8 rounded-[2rem] shadow-xl shadow-gray-100 border border-gray-50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-4">Nom complet</label>
                  <input 
                    type="text" 
                    placeholder="Votre nom" 
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-4">Email</label>
                  <input 
                    type="email" 
                    placeholder="votre@email.com" 
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-4">Sujet</label>
                <input 
                  type="text" 
                  placeholder="Comment pouvons-nous vous aider ?" 
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-4">Message</label>
                <textarea 
                  rows={5} 
                  placeholder="Votre message..." 
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all resize-none"
                ></textarea>
              </div>
              <button className="w-full bg-brand-dark text-white px-10 py-5 rounded-2xl font-bold hover:bg-brand-blue transition-all flex items-center justify-center gap-3 group shadow-lg shadow-brand-dark/20">
                Envoyer le message <Send size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

          {/* Admin List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold mb-10">Nos Administrateurs</h3>
            <div className="space-y-8">
              {ADMINS.map((admin, index) => (
                <motion.div 
                  key={admin.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-6 p-4 rounded-3xl hover:bg-gray-50 transition-colors group"
                >
                  <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 border-2 border-transparent group-hover:border-brand-primary transition-all">
                    <img 
                      src={admin.photoUrl} 
                      alt={admin.name} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold group-hover:text-brand-primary transition-colors">{admin.name}</h4>
                    <p className="text-brand-secondary font-medium uppercase text-xs tracking-widest">{admin.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 p-8 bg-brand-primary/5 rounded-3xl border border-brand-primary/10">
              <h4 className="font-bold mb-4">Note importante</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                La liste complète des administrateurs sur toute l'étendue du territoire est disponible sur demande auprès de notre secrétariat général.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
