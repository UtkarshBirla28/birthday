'use client';

import { useEffect } from 'react';
import { createConfetti, createHeartFloats, playBirthdayMusic } from '@/utils/animations';

export default function FinalScreen({ onRestart }) {
  useEffect(() => {
    createConfetti();
    createHeartFloats();
    playBirthdayMusic();
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center p-8 overflow-y-auto z-10">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-black text-gradient-gold bg-clip-text text-transparent mb-8 animate-shimmer drop-shadow-2xl">
          🎂 HAPPY BIRTHDAY SONALI 🎂✨
        </h1>

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
          className="mt-8 px-8 py-4 bg-gradient-to-r from-pink to-purple text-black font-bold rounded-xl uppercase tracking-wider transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-pink/50 active:-translate-y-0.5 animate-slideUp"
          style={{ animationDelay: '0.6s' }}
        >
          🔄 Start Over
        </button>
      </div>
    </div>
  );
}
