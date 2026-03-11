import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { EVENTS } from '../constants';
import { Calendar, MapPin, X, Clock, CheckCircle } from 'lucide-react';

const FOM_LOGO_FALLBACK = '/images/fom-logo-vertical.webp';

const EventRow = ({ event, index }: { event: any; index: number; key?: string }) => {
  const [zoomed, setZoomed] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.06 }}
        className="flex gap-6 md:gap-10 bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all group"
      >
        {/* Flyer — 4:5 ratio */}
        <div
          className="shrink-0 w-28 md:w-40 bg-gray-100 overflow-hidden cursor-pointer relative"
          style={{ aspectRatio: '4/5' }}
          onClick={() => setZoomed(true)}
          title="Agrandir"
        >
          {event.flyer ? (
            <img
              src={event.flyer}
              alt={event.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-50 p-3">
              <img
                src={FOM_LOGO_FALLBACK}
                alt="Fondation Mwinda"
                className="w-full h-full object-contain opacity-70"
                loading="lazy"
              />
            </div>
          )}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-white/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-gray-700 text-xs font-bold">
              +
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col justify-center py-5 pr-6">
          <div className="flex items-center gap-2 text-brand-blue text-xs font-bold mb-2">
            <Calendar size={13} />
            <span>{event.date}</span>
          </div>
          <h3 className="text-lg md:text-xl font-bold text-brand-dark mb-2 leading-snug group-hover:text-brand-primary transition-colors">
            {event.title}
          </h3>
          <div className="flex items-center gap-1.5 text-gray-500 text-sm mb-3">
            <MapPin size={13} className="text-brand-primary shrink-0" />
            <span>{event.location}</span>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">{event.description}</p>
        </div>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {zoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6"
            onClick={() => setZoomed(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 280, damping: 24 }}
              className="relative flex flex-col items-center"
              style={{ maxHeight: '95vh' }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setZoomed(false)}
                className="absolute -top-3 -right-3 z-10 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
              >
                <X size={18} />
              </button>
              <img
                src={event.flyer || FOM_LOGO_FALLBACK}
                alt={event.title}
                className="rounded-2xl shadow-2xl object-contain"
                style={{ maxHeight: '85vh', maxWidth: '90vw' }}
              />
              <div className="mt-3 text-center text-white">
                <p className="font-bold">{event.title}</p>
                <p className="text-sm text-gray-400">{event.date} — {event.location}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Events = () => {
  const upcoming = EVENTS.filter((e) => e.status === 'upcoming');
  const past = EVENTS.filter((e) => e.status === 'past');

  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      {/* Header */}
      <section className="py-16 px-6 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-transparent pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Nos Evenements</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Rejoignez-nous lors de nos prochaines activites et decouvrez nos evenements passes.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-20">

        {/* Section: A venir */}
        {upcoming.length > 0 && (
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="flex items-center gap-2 bg-brand-blue/10 text-brand-blue px-4 py-2 rounded-full text-sm font-bold">
                <Clock size={15} /> Evenements a venir
              </div>
              <div className="h-px bg-gray-100 flex-grow"></div>
              <span className="text-gray-400 text-sm">{upcoming.length} evenement{upcoming.length > 1 ? 's' : ''}</span>
            </div>
            <div className="space-y-4">
              {upcoming.map((event, i) => (
                <EventRow key={event.id} event={event} index={i} />
              ))}
            </div>
          </div>
        )}

        {/* Section: Passes */}
        {past.length > 0 && (
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="flex items-center gap-2 bg-gray-100 text-gray-500 px-4 py-2 rounded-full text-sm font-bold">
                <CheckCircle size={15} /> Evenements passes
              </div>
              <div className="h-px bg-gray-100 flex-grow"></div>
              <span className="text-gray-400 text-sm">{past.length} evenement{past.length > 1 ? 's' : ''}</span>
            </div>
            <div className="space-y-4">
              {past.map((event, i) => {
                const year = event.date.trim().split(' ').pop();
                const prevYear = i > 0 ? past[i - 1].date.trim().split(' ').pop() : null;
                const showYear = year !== prevYear;
                return (
                  <React.Fragment key={event.id}>
                    {showYear && (
                      <div className="flex items-center gap-4 pt-4 pb-2">
                        <div className="text-3xl font-black text-brand-dark/10 tracking-tight select-none">{year}</div>
                        <div className="h-px bg-gray-100 flex-grow"></div>
                      </div>
                    )}
                    <EventRow event={event} index={i} />
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Events;
