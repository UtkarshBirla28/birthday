'use client';

export default function GlowOrbs() {
  return (
    <>
      {/* Soft white luminous orb — adds gentle light in the corner */}
      <div
        className="fixed rounded-full filter blur-3xl pointer-events-none z-0 -top-32 -left-24 animate-float"
        style={{
          width: '460px',
          height: '460px',
          background: 'radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(227,238,245,0) 70%)',
          opacity: 0.8,
        }}
      />

      {/* Soft sky-blue orb — quiet depth bottom-right */}
      <div
        className="fixed rounded-full pointer-events-none z-0 -bottom-40 -right-32"
        style={{
          width: '520px',
          height: '520px',
          background: 'radial-gradient(circle, rgba(123,168,201,0.45) 0%, rgba(123,168,201,0) 70%)',
          filter: 'blur(60px)',
          animation: 'float 12s ease-in-out infinite',
        }}
      />

      {/* Faint navy accent orb — barely-there tonal richness */}
      <div
        className="fixed rounded-full pointer-events-none z-0 top-1/3 right-1/4"
        style={{
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(27,71,105,0.12) 0%, rgba(27,71,105,0) 70%)',
          filter: 'blur(70px)',
          animation: 'float 9s ease-in-out infinite',
        }}
      />
    </>
  );
}
