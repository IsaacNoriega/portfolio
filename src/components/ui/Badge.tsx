import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'brand' | 'indigo' | 'surface' | 'mono' | 'outline' | 'pulse';
  className?: string;
  pulseColor?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'surface',
  className = '',
  pulseColor = 'bg-emerald-400',
}) => {
  const baseClasses = 'inline-flex items-center text-xs font-medium rounded transition-colors';

  const variants = {
    brand: 'px-2.5 py-1 rounded bg-surface-muted text-brand-400 border border-surface-border font-mono',
    indigo: 'px-2.5 py-1 rounded bg-surface-muted text-indigo-400 border border-surface-border font-mono',
    surface: 'px-2.5 py-1 rounded bg-surface-base text-slate-400 border border-surface-border font-mono',
    mono: 'px-2 py-0.5 rounded bg-surface-base text-slate-400 border border-surface-border font-mono text-[11px]',
    outline: 'px-3 py-1 rounded-full bg-surface-card border border-surface-border text-xs text-slate-300',
    pulse: 'px-3 py-1 rounded-full bg-surface-card border border-surface-border text-xs text-slate-300 font-medium gap-2',
  };

  if (variant === 'pulse') {
    return (
      <div className={`${baseClasses} ${variants.pulse} ${className}`}>
        <span className={`w-1.5 h-1.5 rounded-full ${pulseColor} animate-pulse shrink-0`}></span>
        <span>{children}</span>
      </div>
    );
  }

  return (
    <span className={`${baseClasses} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};
