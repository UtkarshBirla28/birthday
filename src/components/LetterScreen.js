'use client';

export default function LetterScreen({ onContinue }) {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-between p-8 overflow-y-auto z-10">
      <div className="flex-1 flex items-center justify-center">
        <div className="bg-gradient-to-br from-purple/10 to-cyan/5 border-2 border-cyan/20 rounded-3xl p-12 md:p-16 max-w-2xl w-full backdrop-blur-custom animate-slideUp">
          <h2 className="font-serif text-4xl md:text-5xl text-cyan text-center mb-8 font-bold">
            Happy Birthday Sonu Somani! 🎉❤️
          </h2>

          <div className="font-serif text-lg md:text-xl leading-relaxed text-purple/80 space-y-4 text-left">
            <p>
              It&apos;s hard to believe that we&apos;ve been together since our school days and are still standing by each other&apos;s side today. From sharing classrooms, silly secrets, endless laughter, and countless memories, we&apos;ve grown up together, and I couldn&apos;t be more grateful for our friendship.
            </p>

            <p>
              Today, as we celebrate you, I want you to know how incredibly proud we are of the person you&apos;ve become. Your journey has been inspiring to watch. A special congratulations to CS Sonali Somani! 🏆✨ Your hard work, dedication, sacrifices, and those countless restless nights have finally paid off. This achievement is a testament to your determination and perseverance, and you truly deserve every bit of success that comes your way. We are beyond proud of you and all that you have accomplished.
            </p>

            <p>
              Thank you for being such a wonderful friend, for always being there, and for making life brighter with your presence. May this year bring you happiness, success, good health, and everything you&apos;ve been wishing for.
            </p>

            <p>
              And lastly, here&apos;s hoping you get permission for all our upcoming trips! 😄✈️ We have so many places to explore, stories to create, and memories to make together. After all these years of friendship, it&apos;s only fair that we add some unforgettable travel adventures to our collection of memories.
            </p>

            <p>
              Happy Birthday once again, Sonali! ❤️🥳
            </p>

            <p>
              May your smile never fade, your dreams keep growing, and your success continue to inspire everyone around you.
            </p>

            <p className="text-right font-bold text-lg pt-4">
              With lots of love,<br />
              Your forever friend ❤️
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={onContinue}
        className="mt-8 px-8 py-4 bg-gradient-to-r from-cyan to-purple text-white font-bold rounded-xl uppercase tracking-wider transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan/40 active:-translate-y-0.5"
      >
        To the Grand Finale ➜
      </button>
    </div>
  );
}
