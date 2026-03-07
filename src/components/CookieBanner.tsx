import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Cookie } from 'lucide-react';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Show banner after a small delay
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
    // Initialize analytics here if needed
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 md:flex items-center justify-between gap-6">
            <div className="flex items-start gap-4 mb-6 md:mb-0">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary shrink-0">
                <Cookie size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-brand-dark mb-2">Nous respectons votre vie privée</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Nous utilisons des cookies pour améliorer votre expérience de navigation, diffuser des contenus personnalisés et analyser notre trafic. En cliquant sur "Tout accepter", vous consentez à notre utilisation des cookies.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <button
                onClick={handleDecline}
                className="px-6 py-2.5 rounded-full border border-gray-200 text-gray-600 font-medium hover:bg-gray-50 transition-colors text-sm"
              >
                Refuser
              </button>
              <button
                onClick={handleAccept}
                className="px-6 py-2.5 rounded-full bg-brand-primary text-white font-bold hover:bg-brand-dark transition-colors text-sm shadow-lg shadow-brand-primary/20"
              >
                Tout accepter
              </button>
            </div>
            
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 md:hidden"
              aria-label="Fermer"
            >
              <X size={20} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
