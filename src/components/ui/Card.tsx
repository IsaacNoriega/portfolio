import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = true,
}) => {
  const hoverClass = hover
    ? 'hover:border-surface-borderLight transition-all duration-200'
    : '';

  return (
    <div
      className={`bg-surface-card border border-surface-border rounded-xl p-6 shadow-xl relative ${hoverClass} ${className}`}
    >
      {children}
    </div>
  );
};
