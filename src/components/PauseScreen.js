'use client';

export default function PauseScreen({ onContinue }) {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-between p-8 z-10">
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="bg-gradient-to-br from-cyan/15 to-purple/15 border-2 border-cyan/30 rounded-3xl p-16 max-w-xl w-full text-center backdrop-blur-custom">
          <div className="text-6xl md:text-7xl font-black text-cyan mb-6 animate-fadeInDown">
            Wait…
          </div>

          <div className="text-3xl md:text-4xl font-bold text-purple/70 mb-8 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            You know what?
          </div>

          <div className="text-3xl md:text-4xl font-bold text-gradient-gold animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            I think you look beautiful in blue 💙
          </div>
        </div>
      </div>

      <button
        onClick={onContinue}
        className="px-8 py-4 bg-gradient-to-r from-cyan to-purple text-black font-bold rounded-xl uppercase tracking-wider transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan/50 active:-translate-y-0.5"
      >
        Continue ➜
      </button>
    </div>
  );
}
