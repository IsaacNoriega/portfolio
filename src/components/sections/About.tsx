import React from 'react';
import { motion } from 'framer-motion';
import { aboutData } from '../../data/portfolioData';
import { Card } from '../ui/Card';
import { Icon } from '../ui/Icon';

export const About: React.FC = () => {
  return (
    <section
      id="sobre-mi"
      className="max-w-6xl mx-auto px-6 py-20 border-b border-surface-border relative"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Heading & Summary */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-4 lg:sticky lg:top-28"
        >
          <span className="text-xs uppercase font-mono tracking-wider text-brand-400 font-semibold block mb-2">
            {aboutData.sectionBadge}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            {aboutData.title}
          </h2>
          <p className="text-sm text-slate-400 mt-4 leading-relaxed">
            {aboutData.description}
          </p>
        </motion.div>

        {/* Right Column: 4 Principle Cards with Staggered Entrance & Interactive Hover */}
        <div className="lg:col-span-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {aboutData.highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="h-full"
              >
                <Card
                  className="p-6 space-y-3 h-full group hover:border-brand-500/40 hover:shadow-[0_8px_30px_rgba(99,102,241,0.12)] transition-all duration-300"
                  hover={false}
                >
                  <div className="w-10 h-10 rounded-lg bg-surface-muted flex items-center justify-center text-brand-400 group-hover:scale-110 group-hover:bg-brand-500/10 group-hover:text-brand-300 transition-all duration-300">
                    <Icon name={item.icon} className="text-xl" />
                  </div>
                  <h3 className="text-base font-semibold text-white group-hover:text-brand-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
