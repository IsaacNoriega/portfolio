import React from 'react';
import { motion } from 'framer-motion';
import { FeaturedProject } from '../../data/portfolioData';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

interface FeaturedProjectCardProps {
  project: FeaturedProject;
}

export const FeaturedProjectCard: React.FC<FeaturedProjectCardProps> = ({
  project,
}) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="bg-surface-card border border-surface-border rounded-xl p-6 md:p-8 hover:border-brand-500/50 hover:shadow-[0_12px_40px_rgba(99,102,241,0.15)] transition-all duration-300 relative group overflow-hidden"
    >
      {/* Subtle top edge glowing accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-500/0 group-hover:via-brand-500/60 to-transparent transition-all duration-500" />

      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        {/* Project info */}
        <div className="space-y-3 max-w-2xl">
          <div className="flex items-center gap-3">
            <Badge variant={project.tagColor === 'indigo' ? 'indigo' : 'brand'}>
              {project.tag}
            </Badge>
            <span className="text-xs text-slate-500 font-mono">{project.year}</span>
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-brand-300 transition-colors">
            {project.title}
          </h3>

          <p className="text-sm text-slate-300 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.techs.map((tech) => (
              <Badge key={tech} variant="surface" className="hover:border-brand-500/40 hover:text-slate-200 transition-colors">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        {project.codeUrl && (
          <div className="flex sm:flex-col gap-3 shrink-0">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
              <Button
                href={project.codeUrl}
                target="_blank"
                variant="muted"
                size="sm"
                icon="code"
                ariaLabel={`Ver código del proyecto ${project.title} en GitHub`}
                className="text-xs px-4 py-2.5 group-hover:border-brand-500/40"
              >
                Ver Código
              </Button>
            </motion.div>
          </div>
        )}
      </div>
    </motion.div>
  );
};
