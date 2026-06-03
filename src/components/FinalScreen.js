'use client';

import { useEffect } from 'react';
import {
  createConfetti,
  createHeartFloats,
  playBirthdayMusic,
  createCrackerExplosion,
  createBalloons,
  startCrackerShow,
} from '@/utils/animations';

export default function FinalScreen({ onRestart }) {
  useEffect(() => {
    // Grand entrance
    createConfetti();
    createCrackerExplosion();
    playBirthdayMusic();

    // A second confetti wave for a fuller celebration
    const wave = setTimeout(createConfetti, 1400);

    // Ongoing ambient celebration (all return cleanup fns)
    const stopHearts = createHeartFloats();
    const stopBalloons = createBalloons();
    const stopCrackers = startCrackerShow();

    return () => {
      clearTimeout(wave);
      stopHearts && stopHearts();
      stopBalloons();
      stopCrackers();
    };
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center p-8 overflow-y-auto z-10">
      <div className="text-center">
        <div className="relative inline-block mb-8">
          {/* Soft glowing aura behind the title */}
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none"
            style={{
              width: '120%',
              height: '160%',
              background:
                'radial-gradient(ellipse at center, rgba(232,184,75,0.35) 0%, rgba(91,155,201,0.25) 40%, rgba(202,219,231,0) 72%)',
              filter: 'blur(28px)',
              animation: 'auraPulse 4s ease-in-out infinite',
            }}
          />
          <h1 className="text-5xl md:text-7xl font-black text-gradient-gold bg-clip-text text-transparent animate-shimmer">
            🎂 HAPPY BIRTHDAY SONALI 🎂✨
          </h1>
        </div>

        <p className="text-2xl md:text-3xl font-semibold text-purple/70 max-w-xl mx-auto mb-8 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
          Thank you for existing in this chaotic world 💙
        </p>

        <div
          className="mx-auto mb-12 w-full max-w-xs sm:max-w-sm rounded-3xl overflow-hidden border-4 border-pink/40 shadow-2xl shadow-pink/30 animate-slideUp"
          style={{ animationDelay: '0.45s' }}
        >
          <img
            src="/images/card-image.jpeg"
            alt="Sonali with her friend"
            className="w-full h-auto object-cover block"
          />
        </div>

        <button
          onClick={onRestart}
          className="mt-8 px-8 py-4 bg-gradient-to-r from-pink to-purple text-white font-bold rounded-xl uppercase tracking-wider transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-pink/40 active:-translate-y-0.5 animate-slideUp"
          style={{ animationDelay: '0.6s' }}
        >
          🔄 Start Over
        </button>
      </div>
    </div>
  );
}
