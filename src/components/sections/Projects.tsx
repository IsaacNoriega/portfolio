import React from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';
import { FeaturedProjectCard } from './FeaturedProjectCard';
import { SecondaryProjectCard } from './SecondaryProjectCard';

export const Projects: React.FC = () => {
  return (
    <section
      id="proyectos"
      className="max-w-6xl mx-auto px-6 py-20 border-b border-surface-border relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeading
          badge={projectsData.sectionBadge}
          title={projectsData.title}
          description={projectsData.description}
          layout="split"
        />
      </motion.div>

      <div className="space-y-6">
        {/* Featured Projects */}
        {projectsData.featured.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
          >
            <FeaturedProjectCard project={project} />
          </motion.div>
        ))}

        {/* 3 Column Grid for Secondary Projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {projectsData.secondary.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className="h-full"
            >
              <SecondaryProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
