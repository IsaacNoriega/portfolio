import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-surface-border bg-surface-base">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
          <span>
            © 2026 Isaac Noriega. Diseñado con simplicidad y arquitecturas escalables.
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a href="#hero" className="hover:text-slate-400 transition-colors">
            Volver arriba
          </a>
        </div>
      </div>
    </footer>
  );
};
