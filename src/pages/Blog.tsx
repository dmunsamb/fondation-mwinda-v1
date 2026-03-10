import React from 'react';
import { motion } from 'motion/react';
import { BLOG_POSTS } from '../constants';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Notre Blog</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Suivez nos dernières actualités, nos actions sur le terrain et les histoires inspirantes de notre communauté.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group flex flex-col"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="text-brand-primary font-bold text-sm mb-3">{new Date(post.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                <h3 className="text-2xl font-bold text-brand-dark mb-4 group-hover:text-brand-blue transition-colors">{post.title}</h3>
                <p className="text-gray-600 mb-6 line-clamp-3 flex-grow">{post.excerpt}</p>
                <Link to={`/blog`} className="inline-flex items-center gap-2 text-brand-dark font-bold hover:text-brand-primary transition-colors mt-auto">
                  Lire la suite <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
