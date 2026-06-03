'use client';

import { useEffect, useState } from 'react';
import { createConfetti } from '@/utils/animations';

const attributes = [
  { emoji: '📚', title: 'A Bookworm', subtitle: 'if you remember 👀' },
  { emoji: '✨', title: 'Very Talented', subtitle: 'how can we forget' },
  { emoji: '🎓', title: 'CS', subtitle: 'girl boss energy' },
  { emoji: '💙', title: 'Cute', subtitle: 'understatement' },
  { emoji: '💫', title: 'Cutest', subtitle: 'of course' }
];

export default function WelcomeScreen({ onContinue }) {
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    createConfetti();
    setShowCards(true);
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center overflow-y-auto p-6 z-10">
      <div className="text-4xl md:text-6xl font-black text-gradient bg-clip-text text-transparent mb-8 animate-shimmer">
        YAYYY ✨
      </div>

      <div className="text-2xl md:text-3xl font-light text-purple/70 mb-12">
        Welcome to Sonali&apos;s 25th Birthday
      </div>

      <div className="mb-8">
        <p className="text-xl text-purple/60 mb-8">She is…</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
          {attributes.map((attr, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-cyan/10 to-purple/10 border-2 border-cyan/20 rounded-2xl p-8 text-center backdrop-blur-custom transition-all duration-300 hover:-translate-y-2 hover:border-cyan hover:shadow-2xl hover:shadow-cyan/30 ${
                showCards ? `animate-slideUp` : ''
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="text-5xl mb-3">{attr.emoji}</div>
              <div className="text-2xl font-bold text-gradient mb-2">{attr.title}</div>
              <div className="text-xs text-gray-400 italic">{attr.subtitle}</div>
            </div>
          ))}

          {/* Locked Card */}
          <div
            className={`bg-gradient-to-br from-pink/10 to-purple/10 border-2 border-dashed border-pink/30 rounded-2xl p-8 text-center backdrop-blur-custom ${
              showCards ? `animate-slideUp` : ''
            }`}
            style={{ animationDelay: `${attributes.length * 150}ms` }}
          >
            <div className="text-5xl mb-3">🔐</div>
            <div className="text-2xl font-bold text-gradient-gold mb-2">Secret Compliment</div>
            <div className="text-xs text-gray-400 italic">Bribe with fancy parties 😌</div>
          </div>
        </div>
      </div>

      <button
        onClick={onContinue}
        className="mt-8 px-10 py-4 bg-gradient-to-r from-cyan to-purple text-black font-bold text-lg rounded-xl uppercase tracking-wider transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan/50 active:-translate-y-0.5"
      >
        Continue to Memory Lane
      </button>
    </div>
  );
}
