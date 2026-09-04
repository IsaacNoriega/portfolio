import React from 'react';
import { Icon } from './Icon';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'emerald' | 'muted' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: string;
  iconPosition?: 'left' | 'right';
  className?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  className = '',
  target,
  rel,
  onClick,
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 gap-2 select-none';

  const sizeClasses = {
    sm: 'text-xs px-3 py-1.5 rounded-lg',
    md: 'text-sm px-4 py-2.5 rounded-lg',
    lg: 'text-sm md:text-base px-5 py-3 rounded-lg',
  };

  const variantClasses = {
    primary: 'bg-brand-600 hover:bg-brand-500 text-white shadow-sm',
    secondary: 'bg-surface-card hover:bg-surface-muted text-slate-300 hover:text-white border border-surface-border',
    emerald: 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm',
    muted: 'bg-surface-muted hover:bg-surface-border text-slate-200 border border-surface-border',
    ghost: 'text-slate-400 hover:text-white hover:bg-surface-muted/50',
  };

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const iconElement = icon ? <Icon name={icon} className="text-sm" /> : null;

  const content = (
    <>
      {icon && iconPosition === 'left' && iconElement}
      <span>{children}</span>
      {icon && iconPosition === 'right' && iconElement}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={combinedClasses}>
      {content}
    </button>
  );
};
