import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { experienceData, ExperienceItem } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';

const categories = [
  'Todos',
  'Freelance Experience',
  'Professional Practice',
  'Personal Projects',
  'Academic Projects',
] as const;

export const Experience: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Todos');

  const filteredItems =
    activeCategory === 'Todos'
      ? experienceData.items
      : experienceData.items.filter(
          (item: ExperienceItem) => item.category === activeCategory
        );

  return (
    <section
      id="experiencia"
      className="max-w-6xl mx-auto px-6 py-20 border-b border-surface-border relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeading
          badge={experienceData.sectionBadge}
          title={experienceData.title}
          description="Experiencia práctica en el desarrollo de plataformas SaaS, arquitecturas cloud y soluciones móviles."
        />
      </motion.div>

      {/* Interactive Sliding Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 mb-12">
        {categories.map((cat) => {
          const isSelected = activeCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`relative text-xs font-medium px-4 py-2 rounded-lg transition-colors duration-200 select-none ${
                isSelected
                  ? 'text-white font-semibold'
                  : 'text-slate-400 hover:text-white bg-surface-card hover:bg-surface-muted border border-surface-border'
              }`}
            >
              {isSelected && (
                <motion.span
                  layoutId="activeTabPill"
                  className="absolute inset-0 bg-brand-600 rounded-lg shadow-[0_0_15px_rgba(99,102,241,0.4)]"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          );
        })}
      </div>

      {/* Timeline */}
      <div className="space-y-10 relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:w-0.5 before:bg-surface-border before:-translate-x-1/2">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              key={`${item.role}-${item.category}`}
              className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6 group"
            >
              {/* Left side: Period, Category, Role & Company */}
              <div className="md:w-5/12 md:text-right space-y-1.5 pl-10 md:pl-0">
                <div className="flex items-center gap-2 md:justify-end flex-wrap">
                  <Badge
                    variant={
                      item.category === 'Freelance Experience'
                        ? 'brand'
                        : item.category === 'Professional Practice'
                        ? 'indigo'
                        : 'surface'
                    }
                    className="text-[11px]"
                  >
                    {item.category}
                  </Badge>
                  <span
                    className={`text-xs font-mono ${
                      item.active ? 'text-brand-400 font-semibold' : 'text-slate-500'
                    }`}
                  >
                    {item.period}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-brand-300 transition-colors flex items-center md:justify-end gap-1.5">
                  {item.repoUrl ? (
                    <a
                      href={item.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline hover:text-brand-400 inline-flex items-center gap-1.5"
                      title={`Ver repositorio de ${item.role}`}
                    >
                      <span>{item.role}</span>
                      <span className="material-symbols-outlined text-sm opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                        open_in_new
                      </span>
                    </a>
                  ) : (
                    <span>{item.role}</span>
                  )}
                </h3>
                <p className="text-xs md:text-sm text-slate-400 font-medium">
                  {item.company}
                </p>
              </div>

              {/* Timeline node */}
              <div
                className={`absolute left-4 md:left-1/2 -translate-x-1/2 rounded-full bg-surface-base z-10 transition-transform duration-300 group-hover:scale-125 ${
                  item.active
                    ? 'w-4 h-4 border-2 border-brand-500 shadow-[0_0_12px_rgba(99,102,241,0.6)]'
                    : 'w-3.5 h-3.5 border-2 border-slate-600 group-hover:border-brand-400'
                }`}
              />

              {/* Right side: Bullet details card */}
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="pl-10 md:pl-0 md:w-5/12 text-xs md:text-sm text-slate-300 space-y-2 bg-surface-card/50 backdrop-blur-sm border border-surface-border/70 rounded-xl p-4 md:p-5 group-hover:border-brand-500/40 group-hover:shadow-[0_8px_25px_rgba(99,102,241,0.1)] transition-all duration-300"
              >
                {item.bullets.map((bullet, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-2 leading-relaxed">
                    <span className="text-brand-400 select-none shrink-0 leading-5">▹</span>
                    <span>{bullet}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};
