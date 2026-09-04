import React, { useState } from 'react';
import { profileData, navLinks } from '../../data/portfolioData';
import { Button } from '../ui/Button';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface-base/80 backdrop-blur-md border-b border-surface-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#hero"
          className="flex items-center gap-2.5 font-semibold text-slate-100 hover:text-white transition-colors group"
        >
          <span className="w-2 h-2 rounded-full bg-brand-500 group-hover:scale-125 transition-transform shrink-0" />
          <span className="text-sm tracking-tight truncate">
            {profileData.name}{' '}
            <span className="text-slate-500 font-normal hidden sm:inline">
              {profileData.titleSuffix}
            </span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-400 font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-slate-100 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions & Mobile menu toggle */}
        <div className="flex items-center gap-3">
          <a
            href={profileData.cvUrl}
            download="CV_Isaac_Noriega.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs md:text-sm font-medium px-3.5 py-2 rounded-lg bg-surface-card hover:bg-surface-muted text-slate-300 hover:text-white border border-surface-border transition-colors"
          >
            <span className="material-symbols-outlined text-sm text-brand-400">description</span>
            <span>CV</span>
          </a>

          <Button
            href={`mailto:${profileData.email}`}
            variant="primary"
            size="sm"
            className="text-xs md:text-sm px-4 py-2"
          >
            Contactar
          </Button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-400 hover:text-white p-1.5 rounded-lg border border-surface-border bg-surface-card"
            aria-label="Abrir menú"
          >
            <span className="material-symbols-outlined text-xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-surface-border bg-surface-base/95 backdrop-blur-md px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-slate-300 hover:text-white py-1.5 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={profileData.cvUrl}
            download="CV_Isaac_Noriega.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-brand-400 hover:text-brand-300 py-1.5 transition-colors font-medium border-t border-surface-border pt-3"
          >
            <span className="material-symbols-outlined text-sm">description</span>
            <span>Descargar CV (PDF)</span>
          </a>
        </div>
      )}
    </header>
  );
};
