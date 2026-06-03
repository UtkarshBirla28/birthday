'use client';

import { useState } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import WelcomeScreen from '@/components/WelcomeScreen';
import MemoryLane from '@/components/MemoryLane';
import PauseScreen from '@/components/PauseScreen';
import AchievementScreen from '@/components/AchievementScreen';
import LetterScreen from '@/components/LetterScreen';
import FinalScreen from '@/components/FinalScreen';
import ParticleBackground from '@/components/ParticleBackground';
import GlowOrbs from '@/components/GlowOrbs';

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState('loading');

  const screens = {
    loading: <LoadingScreen onUnlock={() => setCurrentScreen('welcome')} />,
    welcome: <WelcomeScreen onContinue={() => setCurrentScreen('memoryLane')} />,
    memoryLane: <MemoryLane onContinue={() => setCurrentScreen('pause')} />,
    pause: <PauseScreen onContinue={() => setCurrentScreen('achievement')} />,
    achievement: <AchievementScreen onContinue={() => setCurrentScreen('letter')} />,
    letter: <LetterScreen onContinue={() => setCurrentScreen('final')} />,
    final: <FinalScreen onRestart={() => setCurrentScreen('loading')} />,
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-darkBg via-darkBg2 to-darkBg overflow-hidden">
      {/* Background Effects */}
      <GlowOrbs />
      <ParticleBackground />

      {/* Screen Container */}
      <div className="fixed inset-0 transition-opacity duration-800 ease-in-out">
        {screens[currentScreen]}
      </div>
    </div>
  );
}
