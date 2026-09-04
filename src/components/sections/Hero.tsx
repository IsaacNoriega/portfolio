import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../../data/portfolioData';
import { Button } from '../ui/Button';
import { CodePreview } from './CodePreview';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="max-w-6xl mx-auto px-6 py-16 md:py-24 border-b border-surface-border relative"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Bio & Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="lg:col-span-7 space-y-8"
        >
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]"
            >
              {profileData.headlineMain}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-indigo-300 to-brand-400 bg-[length:200%_auto] animate-gradient-x">
                {profileData.headlineGradient}
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-400 leading-relaxed font-normal"
            >
              {profileData.summary}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Button
                href="#proyectos"
                variant="primary"
                size="lg"
                icon="arrow_forward"
                iconPosition="right"
                className="shadow-[0_0_20px_rgba(99,102,241,0.25)] hover:shadow-[0_0_25px_rgba(99,102,241,0.45)]"
              >
                Ver Proyectos Seleccionados
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Button
                href={`mailto:${profileData.email}`}
                variant="secondary"
                size="lg"
                icon="mail"
                iconPosition="left"
              >
                Iniciar Conversación
              </Button>
            </motion.div>
          </motion.div>

          {/* Quick Metrics Ribbon */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="pt-6 grid grid-cols-3 gap-6 border-t border-surface-border/60"
          >
            {profileData.metrics.map((metric) => (
              <motion.div
                key={metric.label}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="group cursor-default"
              >
                <div className="text-2xl font-bold text-white tracking-tight group-hover:text-brand-300 transition-colors">
                  {metric.value}
                </div>
                <div className="text-xs text-slate-400 mt-0.5 group-hover:text-slate-300 transition-colors">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column: Code Card with Ambient Floating & Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="lg:col-span-5 relative group"
        >
          {/* Subtle Ambient Backlight */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-600/30 to-indigo-600/20 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition duration-700 -z-10" />

          {/* Floating Motion Wrapper */}
          <motion.div
            animate={{ y: [0, -7, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <CodePreview />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
