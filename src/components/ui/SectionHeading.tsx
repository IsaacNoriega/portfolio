import React from 'react';

interface SectionHeadingProps {
  badge: string;
  title: string;
  description?: string;
  layout?: 'default' | 'split' | 'centered';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  description,
  layout = 'default',
  className = '',
}) => {
  if (layout === 'centered') {
    return (
      <div className={`space-y-4 max-w-xl mx-auto text-center ${className}`}>
        <span className="text-xs uppercase font-mono tracking-wider text-brand-400 font-semibold block">
          {badge}
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          {title}
        </h2>
        {description && (
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            {description}
          </p>
        )}
      </div>
    );
  }

  if (layout === 'split') {
    return (
      <div className={`flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 ${className}`}>
        <div>
          <span className="text-xs uppercase font-mono tracking-wider text-brand-400 font-semibold block mb-2">
            {badge}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            {title}
          </h2>
        </div>
        {description && (
          <p className="text-sm text-slate-400 max-w-md">
            {description}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className={`max-w-2xl mb-12 ${className}`}>
      <span className="text-xs uppercase font-mono tracking-wider text-brand-400 font-semibold block mb-2">
        {badge}
      </span>
      <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="text-sm text-slate-400 mt-4 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
