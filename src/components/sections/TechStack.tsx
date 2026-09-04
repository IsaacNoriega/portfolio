import React from 'react';
import { motion } from 'framer-motion';
import { techStackData } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Icon } from '../ui/Icon';

export const TechStack: React.FC = () => {
  return (
    <section
      id="stack"
      className="max-w-6xl mx-auto px-6 py-20 border-b border-surface-border relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeading
          badge={techStackData.sectionBadge}
          title={techStackData.title}
          description={techStackData.description}
          layout="split"
        />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {techStackData.categories.map((cat, catIdx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: catIdx * 0.08 }}
            whileHover={{ y: -6 }}
            className="h-full"
          >
            <Card
              className="p-6 space-y-4 h-full group hover:border-brand-500/40 hover:shadow-[0_8px_30px_rgba(99,102,241,0.12)] transition-all duration-300"
              hover={false}
            >
              <div className="flex items-center gap-2.5 text-white font-semibold text-sm">
                <div className="w-8 h-8 rounded-lg bg-surface-muted flex items-center justify-center text-brand-400 group-hover:bg-brand-500/10 group-hover:scale-110 transition-all duration-300">
                  <Icon name={cat.icon} className="text-lg" />
                </div>
                <span className="group-hover:text-brand-300 transition-colors">
                  {cat.title}
                </span>
              </div>

              <div className="space-y-2 pt-1">
                {cat.items.map((tech) => (
                  <motion.div
                    key={tech.name}
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.15 }}
                    className="flex items-center justify-between text-xs py-1.5 px-2.5 rounded bg-surface-base/90 border border-surface-border text-slate-300 hover:border-brand-500/40 hover:text-white transition-all cursor-default"
                  >
                    <span>{tech.name}</span>
                    <span className="font-mono text-slate-400 text-[11px] font-medium">{tech.tag}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
