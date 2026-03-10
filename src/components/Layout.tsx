import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, Facebook, Twitter, Youtube, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { SOCIAL_LINKS } from '../constants';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'À Propos', href: '/about' },
    { name: 'Projets', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  const isHome = location.pathname === '/';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || !isHome ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md overflow-hidden group-hover:scale-105 transition-transform">
            <img 
              src="https://lh3.googleusercontent.com/d/1Lpg96Xt2DhjQ825VJU13nxpahPiRT7qm" 
              alt="Logo Fondation Mwinda" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className={`font-display text-xl font-bold ${scrolled || !isHome ? 'text-brand-dark' : 'text-white'}`}>
            Fondation Mwinda
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              className={`text-sm font-medium transition-colors hover:text-brand-primary ${scrolled || !isHome ? 'text-brand-dark' : 'text-white'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/soutenez-nous#faire-un-don" className="bg-brand-blue text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-brand-dark transition-colors flex items-center gap-2 shadow-sm shadow-brand-blue/20">
            <Heart size={16} />
            Faire un don
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-brand-primary" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} className={scrolled || !isHome ? 'text-brand-dark' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl py-8 px-6 flex flex-col gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-brand-dark hover:text-brand-primary"
              >
                {link.name}
              </Link>
            ))}
            <Link to="/soutenez-nous#faire-un-don" onClick={() => setIsOpen(false)} className="bg-brand-blue text-white px-6 py-3 rounded-full text-lg font-semibold flex items-center justify-center gap-2 shadow-lg shadow-brand-blue/20">
              <Heart size={20} />
              Faire un don
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md overflow-hidden">
              <img 
                src="https://lh3.googleusercontent.com/d/1Lpg96Xt2DhjQ825VJU13nxpahPiRT7qm" 
                alt="Logo Fondation Mwinda" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="font-display text-2xl font-bold">Fondation Mwinda</span>
          </Link>
          <p className="text-gray-400 max-w-md leading-relaxed mb-8">
            Une organisation humanitaire dédiée à l'amélioration des conditions de vie en République Démocratique du Congo à travers l'éducation, la santé et la protection.
          </p>
          <div className="flex gap-4">
            {SOCIAL_LINKS.map((social) => {
              const Icon = { Facebook, Twitter, Youtube, Instagram }[social.icon] as any;
              return (
                <a 
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-brand-primary hover:text-white transition-all"
                  title={social.name}
                >
                  {Icon && <Icon size={20} />}
                </a>
              );
            })}
          </div>
        </div>
        
        <div>
          <h4 className="font-display text-lg font-bold mb-6">Navigation</h4>
          <ul className="space-y-4 text-gray-400">
            <li><Link to="/" className="hover:text-brand-primary transition-colors">Accueil</Link></li>
            <li><Link to="/about" className="hover:text-brand-primary transition-colors">À Propos</Link></li>
            <li><Link to="/projects" className="hover:text-brand-primary transition-colors">Projets</Link></li>
            <li><Link to="/blog" className="hover:text-brand-primary transition-colors">Blog</Link></li>
            <li><Link to="/events" className="hover:text-brand-primary transition-colors">Événements</Link></li>
            <li><Link to="/soutenez-nous" className="hover:text-brand-primary transition-colors">Soutenez-nous</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-display text-lg font-bold mb-6">Contact</h4>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-brand-primary mt-1 shrink-0" /> 
              <span>Kinshasa, BADARA II, N’sele</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-brand-primary" /> 
              <span>+243 821 142 302</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-brand-primary" /> 
              <span>contact@fondationmwinda.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Fondation Mwinda (FOM). Tous droits réservés.</p>
      </div>
    </footer>
  );
};
