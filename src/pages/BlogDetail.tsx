import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { BLOG_POSTS } from '../constants';
import { ArrowLeft, Calendar } from 'lucide-react';

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const post = BLOG_POSTS.find(p => p.id === id);

  if (!post) {
    return (
      <div className="pt-32 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Article introuvable</h1>
          <Link to="/blog" className="text-brand-primary font-bold hover:underline">← Retour au blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 bg-white min-h-screen">
      {/* Hero Image */}
      <div className="w-full h-72 md:h-96 overflow-hidden bg-gray-100">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Article Content — centered, max-w-2xl */}
      <div className="max-w-2xl mx-auto px-6 py-16">
        {/* Back link */}
        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-brand-primary transition-colors text-sm font-bold mb-10 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Retour au blog
          </Link>
        </motion.div>

        {/* Date */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-2 text-brand-primary font-bold text-sm mb-4"
        >
          <Calendar size={14} />
          {new Date(post.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-3xl md:text-4xl font-bold text-brand-dark leading-tight mb-10"
        >
          {post.title}
        </motion.h1>

        {/* Divider */}
        <div className="w-12 h-0.5 bg-brand-primary mb-12"></div>

        {/* Body */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          {(post.body as any[]).map((block: any, i: number) => {
            if (block.type === 'paragraph') {
              return (
                <p key={i} className="text-gray-600 leading-relaxed text-lg">
                  {block.text}
                </p>
              );
            }
            if (block.type === 'section') {
              return (
                <div key={i} className="pt-4">
                  <h2 className="text-xl font-bold text-brand-dark mb-3">{block.title}</h2>
                  <p className="text-gray-600 leading-relaxed text-lg">{block.text}</p>
                </div>
              );
            }
            if (block.type === 'list') {
              return (
                <div key={i} className="pt-2">
                  {block.title && <h3 className="text-lg font-bold text-brand-dark mb-4">{block.title}</h3>}
                  <ul className="space-y-3">
                    {block.items.map((item: string, j: number) => (
                      <li key={j} className="flex items-start gap-3 text-gray-600">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-primary shrink-0"></div>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            }
            if (block.type === 'quote') {
              return (
                <blockquote key={i} className="border-l-4 border-brand-primary pl-6 py-2 my-8">
                  <p className="text-gray-700 italic text-lg leading-relaxed">{block.text}</p>
                </blockquote>
              );
            }
            return null;
          })}
        </motion.div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-100 flex items-center justify-between">
          <Link to="/blog" className="inline-flex items-center gap-2 text-brand-primary font-bold hover:underline">
            <ArrowLeft size={16} /> Tous les articles
          </Link>
          <Link to="/soutenez-nous" className="bg-brand-primary text-white px-6 py-3 rounded-full font-bold hover:bg-brand-blue transition-colors text-sm">
            Soutenir la FOM
          </Link>
        </div>

        {/* Related articles */}
        {BLOG_POSTS.filter(p => p.id !== post.id).length > 0 && (
          <div className="mt-16">
            <h3 className="text-lg font-bold text-brand-dark mb-6">Autres articles</h3>
            <ul className="space-y-3">
              {BLOG_POSTS.filter(p => p.id !== post.id).map(other => (
                <li key={other.id}>
                  <Link
                    to={`/blog/${other.id}`}
                    className="flex items-start gap-3 group"
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-primary shrink-0"></span>
                    <span className="text-gray-600 group-hover:text-brand-primary transition-colors leading-snug">
                      {other.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogDetail;
