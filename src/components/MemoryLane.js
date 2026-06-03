'use client';

import { useState } from 'react';
import { IMAGE_PATHS, PLACEHOLDER_IMAGES } from '@/utils/imageConfig';

export default function MemoryLane({ onContinue }) {
  const [imageErrors, setImageErrors] = useState({});

  const getImageUrl = (index, source = 'memory') => {
    const key = `${source}-${index}`;
    if (imageErrors[key]) {
      if (source === 'memory') return PLACEHOLDER_IMAGES.memoryLane[index];
      if (source === 'he') return PLACEHOLDER_IMAGES.heVersion;
      if (source === 'weird') return PLACEHOLDER_IMAGES.weirdestVersion;
      if (source === 'achievement') return PLACEHOLDER_IMAGES.achievement[index];
    }
    
    if (source === 'memory') return IMAGE_PATHS.memoryLane[index];
    if (source === 'he') return IMAGE_PATHS.heVersion;
    if (source === 'weird') return IMAGE_PATHS.weirdestVersion;
    if (source === 'achievement') return IMAGE_PATHS.achievement[index];
  };

  const handleImageError = (key) => {
    setImageErrors(prev => ({ ...prev, [key]: true }));
  };

  return (
    <div className="fixed inset-0 flex flex-col p-8 overflow-y-auto z-10">
      <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-12 text-center">
        Let&apos;s go to the memory lane…
      </h1>

      {/* Memory Lane Cards - 6 Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
        {IMAGE_PATHS.memoryLane.map((_, index) => (
          <div
            key={index}
            className="aspect-square rounded-2xl border-2 border-cyan/30 overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-3 hover:border-cyan hover:shadow-2xl hover:shadow-cyan/30 backdrop-blur-custom animate-slideUp"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <img
              src={getImageUrl(index, 'memory')}
              alt={`Memory ${index + 1}`}
              onError={() => handleImageError(`memory-${index}`)}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* HE Version Section */}
      <div className="bg-gradient-to-br from-cyan/5 to-purple/5 border-2 border-dashed border-cyan/20 rounded-3xl p-8 text-center mb-12 max-w-2xl mx-auto w-full">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-pink to-cyan bg-clip-text text-transparent mb-6">
          🔓 Unlock the HE Version of Sonali
        </h2>
        <div className="max-w-sm mx-auto rounded-xl overflow-hidden border-2 border-cyan/30">
          <img
            src={getImageUrl(0, 'he')}
            alt="HE Version"
            onError={() => handleImageError('he-0')}
            className="w-full h-64 object-cover"
          />
        </div>
      </div>

      {/* Weirdest Version Section */}
      <div className="bg-gradient-to-br from-cyan/5 to-purple/5 border-2 border-dashed border-cyan/20 rounded-3xl p-8 text-center mb-12 max-w-2xl mx-auto w-full">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-pink to-cyan bg-clip-text text-transparent mb-6">
          😂 Unlock the Weirdest Version
        </h2>
        <div className="max-w-sm mx-auto rounded-xl overflow-hidden border-2 border-cyan/30">
          <img
            src={getImageUrl(0, 'weird')}
            alt="Weirdest Version"
            onError={() => handleImageError('weird-0')}
            className="w-full h-64 object-cover object-[center_25%]"
          />
        </div>
      </div>

      <button
        onClick={onContinue}
        className="mx-auto px-8 py-4 bg-gradient-to-r from-cyan to-purple text-black font-bold rounded-xl uppercase tracking-wider transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan/50 active:-translate-y-0.5"
      >
        Next ➜
      </button>
    </div>
  );
}
