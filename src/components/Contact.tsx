import React from 'react';
import { motion } from 'motion/react';
import { ADMINS } from '../constants';
import { Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24">

          {/* Left — Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-brand-dark">Contactez-nous</h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-12">
              Vous souhaitez nous soutenir, devenir partenaire ou en savoir plus ? Laissez-nous un message.
            </p>

            <form
              method="POST"
              data-netlify="true"
              name="contact-foundation"
              data-netlify-honeypot="bot-field"
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="contact-foundation" />
              <input type="hidden" name="subject" value="Nouveau message via le site Fondation Mwinda" />
              <p className="hidden">
                <label>Don't fill this out if you're human: <input name="bot-field" /></label>
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Nom complet</label>
                  <input
                    type="text"
                    name="nom_complet"
                    placeholder="Votre nom"
                    required
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="votre@email.com"
                    required
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Sujet</label>
                <input
                  type="text"
                  name="sujet"
                  placeholder="Comment pouvons-nous vous aider ?"
                  required
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Message</label>
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Votre message..."
                  required
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-dark text-white px-8 py-5 rounded-2xl font-bold hover:bg-brand-blue transition-all flex items-center justify-center gap-3 group"
              >
                Envoyer le message
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

          {/* Right — Info + Admins */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2"
          >
            {/* Contact info */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-brand-dark mb-6">Nos coordonnées</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-brand-dark mb-0.5">Siège Social</p>
                    <p className="text-gray-500 text-sm">Kinshasa, BADARA II, N'sele</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-blue/10 rounded-xl flex items-center justify-center text-brand-blue shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-brand-dark mb-0.5">Email</p>
                    <a href="mailto:contact@fondationmwinda.com" className="text-gray-500 text-sm hover:text-brand-primary transition-colors">
                      contact@fondationmwinda.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Admins */}
            <div>
              <h3 className="text-xl font-bold text-brand-dark mb-6">Nos Administrateurs</h3>
              <div className="space-y-3">
                {ADMINS.map((admin) => (
                  <div key={admin.id} className="flex items-center gap-4 p-3 rounded-2xl hover:bg-gray-50 transition-colors group">
                    <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 border-2 border-transparent group-hover:border-brand-primary transition-all">
                      <img
                        src={admin.photoUrl}
                        alt={admin.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-brand-dark text-sm group-hover:text-brand-primary transition-colors">{admin.name}</p>
                      <p className="text-brand-secondary text-xs font-bold uppercase tracking-widest">{admin.role}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-5 bg-gray-50 rounded-2xl border border-gray-100">
                <p className="text-xs text-gray-500 leading-relaxed">
                  La liste complète des administrateurs sur toute l'étendue du territoire est disponible sur demande auprès de notre secrétariat général.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
