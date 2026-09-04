import React from 'react';
import { motion } from 'framer-motion';
import { SecondaryProject } from '../../data/portfolioData';
import { Badge } from '../ui/Badge';
import { Icon } from '../ui/Icon';

interface SecondaryProjectCardProps {
  project: SecondaryProject;
}

export const SecondaryProjectCard: React.FC<SecondaryProjectCardProps> = ({
  project,
}) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="bg-surface-card border border-surface-border rounded-xl p-6 flex flex-col justify-between space-y-4 hover:border-brand-500/40 hover:shadow-[0_8px_30px_rgba(99,102,241,0.1)] transition-all duration-300 group"
    >
      <div className="space-y-2">
        <span className="text-xs font-mono text-slate-400 font-medium">
          {project.category}
        </span>
        <h4 className="text-base font-bold text-white group-hover:text-brand-300 transition-colors">
          {project.title}
        </h4>
        <p className="text-xs text-slate-300 leading-relaxed">
          {project.description}
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex flex-wrap gap-1.5">
          {project.techs.map((tech) => (
            <Badge key={tech} variant="mono" className="hover:border-brand-500/30 transition-colors">
              {tech}
            </Badge>
          ))}
        </div>

        <a
          href={project.linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Ver detalles del proyecto ${project.title}`}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-brand-400 hover:text-brand-300 transition-colors"
        >
          <span>Ver detalles</span>
          <span className="transform group-hover:translate-x-1 transition-transform duration-200">
            <Icon name="arrow_forward" className="text-sm" />
          </span>
        </a>
      </div>
    </motion.div>
  );
};
