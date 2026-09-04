import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../../data/portfolioData';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { Icon } from '../ui/Icon';

export const Contact: React.FC = () => {
  return (
    <section id="contacto" className="max-w-4xl mx-auto px-6 py-24 text-center relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeading
          badge="Contacto Profesional"
          title="¿Hablamos de tu próximo proyecto o equipo?"
          description="Disponible para roles de tiempo completo, prácticas profesionales y proyectos freelance."
          layout="centered"
        />
      </motion.div>

      {/* Main Direct Channels */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mt-8 flex flex-wrap justify-center gap-4"
      >
        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
          <Button
            href={profileData.whatsappUrl}
            variant="emerald"
            size="lg"
            icon="chat"
            iconPosition="left"
            target="_blank"
            className="px-6 py-3 shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)]"
          >
            WhatsApp Directo: {profileData.phone}
          </Button>
        </motion.div>

        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
          <Button
            href={`mailto:${profileData.email}`}
            variant="secondary"
            size="lg"
            icon="mail"
            iconPosition="left"
            className="px-6 py-3 text-slate-200 hover:border-brand-500/50"
          >
            {profileData.email}
          </Button>
        </motion.div>
      </motion.div>

      {/* Social / Resource Links */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-12 pt-8 border-t border-surface-border flex flex-wrap justify-center items-center gap-6 text-xs text-slate-400"
      >
        <motion.a
          whileHover={{ y: -2, color: '#ffffff' }}
          href={profileData.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors flex items-center gap-1.5"
        >
          <Icon name="terminal" className="text-sm text-brand-400" />
          <span>GitHub</span>
        </motion.a>

        <motion.a
          whileHover={{ y: -2, color: '#ffffff' }}
          href={profileData.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors flex items-center gap-1.5"
        >
          <Icon name="badge" className="text-sm text-brand-400" />
          <span>LinkedIn</span>
        </motion.a>

        <motion.a
          whileHover={{ y: -2, color: '#ffffff' }}
          href={profileData.cvUrl}
          download="CV_Isaac_Noriega.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
        >
          <Icon name="description" className="text-sm text-brand-400" />
          <span>Descargar CV (PDF)</span>
        </motion.a>
      </motion.div>
    </section>
  );
};
