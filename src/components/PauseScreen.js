'use client';

export default function PauseScreen({ onContinue }) {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-between p-6 md:p-8 overflow-y-auto z-10">
      <div className="flex-1 flex flex-col items-center justify-center w-full py-4">
        <div className="bg-gradient-to-br from-cyan/15 to-purple/15 border-2 border-cyan/30 rounded-3xl p-6 md:p-10 max-w-4xl w-full backdrop-blur-custom">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">

            {/* Text block */}
            <div className="flex-1 text-center md:text-left order-2 md:order-1">
              <div className="text-5xl md:text-6xl font-black text-cyan mb-4 animate-fadeInDown">
                Wait…
              </div>

              <div className="text-2xl md:text-3xl font-bold text-purple/70 mb-4 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                You know what?
              </div>

              <div className="text-2xl md:text-4xl font-bold text-gradient-gold animate-fadeInUp leading-snug" style={{ animationDelay: '0.4s' }}>
                I think you look beautiful in blue 💙
              </div>
            </div>

            {/* Portrait */}
            <div className="order-1 md:order-2 shrink-0 animate-slideUp" style={{ animationDelay: '0.3s' }}>
              <div className="relative group">
                {/* Soft glow halo */}
                <div
                  aria-hidden
                  className="absolute -inset-2 rounded-[1.75rem] bg-gradient-to-br from-cyan/40 to-purple/40 blur-xl opacity-60 transition-opacity duration-500 group-hover:opacity-90"
                />
                <div className="relative rounded-3xl overflow-hidden border-4 border-white/70 shadow-2xl shadow-cyan/30 animate-float">
                  <img
                    src="/images/blue-dress.jpeg"
                    alt="Sonali looking beautiful in blue"
                    className="block w-44 sm:w-52 md:w-60 h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <button
        onClick={onContinue}
        className="mt-6 px-8 py-4 bg-gradient-to-r from-cyan to-purple text-white font-bold rounded-xl uppercase tracking-wider transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan/40 active:-translate-y-0.5"
      >
        Continue ➜
      </button>
    </div>
  );
}
