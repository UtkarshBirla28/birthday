'use client';

export default function LetterScreen({ onContinue }) {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-between p-8 overflow-y-auto z-10">
      <div className="flex-1 flex items-center justify-center">
        <div className="bg-gradient-to-br from-purple/10 to-cyan/5 border-2 border-cyan/20 rounded-3xl p-12 md:p-16 max-w-2xl w-full backdrop-blur-custom animate-slideUp">
          <h2 className="font-serif text-4xl md:text-5xl text-cyan text-center mb-8 font-bold">
            A small note from me…
          </h2>

          <div className="font-serif text-lg md:text-xl leading-relaxed text-purple/80 space-y-4">
            <p>Dear Sonali,</p>

            <p>
              25 years of existence and you&apos;re still the most chaotic yet incredible human I know. You light up rooms, you inspire people, you make everyone around you feel special.
            </p>

            <p>
              From late-night coding sessions to your adorable sarcasm, from being brilliant to being hilarious – you&apos;re a perfect blend of talent, beauty, and weirdness.
            </p>

            <p>
              Thank you for being you. Thank you for making life colorful.
            </p>

            <p>
              Happy 25th! 💙
            </p>

            <p className="text-right font-bold text-lg pt-4">
              With love ✨
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={onContinue}
        className="mt-8 px-8 py-4 bg-gradient-to-r from-cyan to-purple text-black font-bold rounded-xl uppercase tracking-wider transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan/50 active:-translate-y-0.5"
      >
        To the Grand Finale ➜
      </button>
    </div>
  );
}
