import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Heart, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} id="home" className="relative h-screen flex items-center overflow-hidden bg-brand-dark">
      {/* Parallax Background */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <img 
          src="https://lh3.googleusercontent.com/d/1JblNyNsqAEKlTIKhpe_oeZRiWzMqhfx7" 
          alt="Enfants souriants en RDC" 
          className="w-full h-full object-cover scale-110"
          referrerPolicy="no-referrer"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/60 to-transparent" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-brand-accent mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
              <span className="text-sm font-medium tracking-wide uppercase">Fondation Mwinda (FOM)</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-bold leading-tight mb-8 tracking-tight">
              L'humain <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">au cœur de</span> <br />
              <span className="text-brand-primary italic font-serif">l'action.</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-lg border-l-2 border-brand-primary/50 pl-6">
              Nous œuvrons pour la protection, l'éducation et la santé des populations les plus vulnérables en République Démocratique du Congo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/projects" className="group relative px-8 py-4 bg-brand-primary text-white rounded-full font-bold overflow-hidden shadow-lg shadow-brand-primary/25 hover:shadow-brand-primary/40 transition-all">
                <div className="absolute inset-0 w-full h-full bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                <span className="relative flex items-center gap-2">
                  Nos Projets <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              
              <Link to="/contact" className="group px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-full font-bold hover:bg-white/10 transition-all flex items-center gap-2">
                <Heart size={20} className="text-brand-primary group-hover:scale-110 transition-transform" />
                <span>Faire un don</span>
              </Link>
            </div>
          </motion.div>

          {/* Floating Stats Card - Creative Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="hidden lg:block relative"
          >
            <div className="absolute inset-0 bg-brand-blue/20 blur-3xl rounded-full"></div>
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl grid grid-cols-2 gap-8">
              {[
                { label: 'Régions', value: '16' },
                { label: 'Pays', value: '6' },
                { label: 'Impact', value: '4K+' },
                { label: 'Années', value: '10+' },
              ].map((stat, i) => (
                <div key={i} className="text-center p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
                  <div className="text-4xl font-bold text-white mb-1 font-display">{stat.value}</div>
                  <div className="text-xs text-brand-accent uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
