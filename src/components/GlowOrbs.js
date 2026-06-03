'use client';

export default function GlowOrbs() {
  return (
    <>
      {/* Glow Orb 1 - Cyan */}
      <div className="fixed w-96 h-96 bg-cyan rounded-full filter blur-3xl opacity-30 -top-20 -left-20 z-0 pointer-events-none animate-float" />

      {/* Glow Orb 2 - Purple */}
      <div 
        className="fixed w-full h-full bg-gradient-to-br from-darkBg to-darkBg2 -bottom-40 -right-40 z-0 pointer-events-none"
        style={{
          width: '500px',
          height: '500px',
          background: '#9d4edd',
          borderRadius: '50%',
          filter: 'blur(80px)',
          opacity: 0.3,
          animation: 'float 10s ease-in-out infinite'
        }}
      />
    </>
  );
}
