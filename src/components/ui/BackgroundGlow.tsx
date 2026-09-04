import React, { memo } from 'react';

export const BackgroundGlow: React.FC = memo(() => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Subtle tech dot grid with zero repaint cost */}
      <div className="absolute inset-0 bg-[radial-gradient(#1F293D_1px,transparent_1px)] [background-size:28px_28px] opacity-20" />

      {/* Top Brand Glow Orb: GPU CSS accelerated without heavy Gaussian blur overhead */}
      <div
        className="absolute -top-32 left-1/4 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.18)_0%,transparent_70%)] animate-orb-1 transform-gpu pointer-events-none"
      />

      {/* Indigo / Purple Ambient Orb */}
      <div
        className="absolute top-1/3 -right-28 w-[480px] h-[480px] rounded-full bg-[radial-gradient(circle_at_center,rgba(129,140,248,0.12)_0%,transparent_70%)] animate-orb-2 transform-gpu pointer-events-none"
      />

      {/* Emerald subtle bottom glow */}
      <div
        className="absolute bottom-32 -left-20 w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.09)_0%,transparent_70%)] animate-orb-3 transform-gpu pointer-events-none"
      />
    </div>
  );
});

BackgroundGlow.displayName = 'BackgroundGlow';
