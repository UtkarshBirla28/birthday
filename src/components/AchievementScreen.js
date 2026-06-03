'use client';

import { useEffect, useState } from 'react';
import { createCrackerExplosion } from '@/utils/animations';
import { IMAGE_PATHS, PLACEHOLDER_IMAGES } from '@/utils/imageConfig';

export default function AchievementScreen({ onContinue }) {
  const [imageErrors, setImageErrors] = useState({});

  useEffect(() => {
    createCrackerExplosion();
  }, []);

  const getImageUrl = (index) => {
    if (imageErrors[`achievement-${index}`]) {
      return PLACEHOLDER_IMAGES.achievement[index];
    }
    return IMAGE_PATHS.achievement[index];
  };

  const handleImageError = (index) => {
    setImageErrors(prev => ({ ...prev, [`achievement-${index}`]: true }));
  };

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-between p-8 z-10">
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="bg-gradient-to-br from-cyan/10 to-purple/10 border-2 border-cyan/30 rounded-3xl p-12 max-w-2xl w-full backdrop-blur-custom animate-slideUp">
          <div className="text-6xl md:text-7xl text-center mb-6 animate-bounce">🏆</div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gradient-gold mb-2">
            BIGGEST ACHIEVEMENT UNLOCKED
          </h1>
          
          <p className="text-center text-gray-300 italic mb-8">
            CS Sonali Somani
          </p>

          {/* Image Gallery */}
          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
            {IMAGE_PATHS.achievement.map((_, index) => (
              <div
                key={index}
                className="aspect-square rounded-xl border-2 border-cyan/30 overflow-hidden animate-popIn"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <img
                  src={getImageUrl(index)}
                  alt={`Achievement ${index + 1}`}
                  onError={() => handleImageError(index)}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={onContinue}
        className="px-8 py-4 bg-gradient-to-r from-cyan to-purple text-black font-bold rounded-xl uppercase tracking-wider transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan/50 active:-translate-y-0.5"
      >
        Next ➜
      </button>
    </div>
  );
}
