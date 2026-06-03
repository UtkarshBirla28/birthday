'use client';

import { useState } from 'react';

const months = ['January', 'February', 'March', 'April', 'May', 'June', 
               'July', 'August', 'September', 'October', 'November', 'December'];
const CORRECT_MONTH = 11; // December

export default function LoadingScreen({ onUnlock }) {
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [shake, setShake] = useState(null);
  const [glitch, setGlitch] = useState(false);

  const handleMonthClick = (index) => {
    if (index === CORRECT_MONTH) {
      setGlitch(true);
      setTimeout(() => {
        onUnlock();
      }, 800);
    } else {
      setShake(index);
      setTimeout(() => setShake(null), 500);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-10">
      <div className="flex flex-col items-center justify-center text-center p-10 bg-gradient-to-br from-darkBg/95 to-darkBg2/95 rounded-3xl border-2 border-cyan/20 shadow-2xl max-w-md w-11/12 backdrop-blur-custom">
        
        <div className={`text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan to-purple bg-clip-text text-transparent mb-10 ${glitch ? 'animate-glitch' : 'animate-fadeInDown'}`}>
          Entering the Sonali World…
        </div>

        <div className="text-3xl font-bold text-pink mb-8 animate-pulse drop-shadow-lg">
          Access Restricted
        </div>

        <div className="text-lg text-gray-400 mb-8">
          To unlock this world… choose Ekta&apos;s birthday month.
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 gap-3 w-full mb-4">
          {months.map((month, index) => (
            <button
              key={index}
              onClick={() => handleMonthClick(index)}
              className={`py-3 px-4 rounded-lg font-semibold text-xs uppercase tracking-wider transition-all duration-300 ${
                shake === index ? 'animate-shake' : ''
              } ${
                selectedMonth === index && index === CORRECT_MONTH
                  ? 'border-green-400 bg-green-400/20 shadow-2xl shadow-green-400/50'
                  : 'border-2 border-cyan/30 bg-cyan/5 hover:border-cyan hover:bg-cyan/15 hover:shadow-lg hover:shadow-cyan/30 hover:-translate-y-0.5'
              }`}
            >
              {month.slice(0, 3)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
