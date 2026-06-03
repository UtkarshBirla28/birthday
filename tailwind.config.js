/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Aesthetic light-blue theme.
        // Token names kept for compatibility; values remapped to an elegant blue palette.
        cyan: '#1B4769',    // deep navy — headings, primary accent, borders
        purple: '#2F6B96',  // ocean blue — body text & gradients (readable on light bg)
        pink: '#3D7EA6',    // soft steel blue — secondary accent
        gold: '#B8860B',    // rich antique gold — warm celebratory accent
        darkBg: '#CADBE7',  // page background (soft powder blue)
        darkBg2: '#E3EEF5', // lighter background tint
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        floatUp: 'floatUp 4s ease-out forwards',
        bounce: 'bounce 1s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
        slideUp: 'slideUp 0.8s ease-out',
        slideUpDelay: 'slideUp 1s ease-out',
        fadeInDown: 'fadeInDown 0.8s ease-out',
        fadeInUp: 'fadeInUp 0.8s ease-out',
        glitch: 'glitch 0.5s ease-out',
        shake: 'shake 0.5s ease-out',
        popIn: 'popIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) backwards',
        confettiFall: 'confettiFall 3s ease-out forwards',
        pulse: 'pulse 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        floatUp: {
          'from': { opacity: '1', transform: 'translateY(0) translateX(0) rotate(0deg)' },
          'to': { opacity: '0', transform: 'translateY(-300px) translateX(var(--float-x)) rotate(360deg)' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-30px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        slideUp: {
          'from': { opacity: '0', transform: 'translateY(40px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUpDelay: {
          'from': { opacity: '0', transform: 'translateY(40px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          'from': { opacity: '0', transform: 'translateY(-30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        glitch: {
          '0%': { clipPath: 'polygon(0 0, 100% 0, 100% 20%, 0 20%)', transform: 'translateX(-2px)' },
          '25%': { clipPath: 'polygon(0 30%, 100% 30%, 100% 50%, 0 50%)', transform: 'translateX(2px)' },
          '50%': { clipPath: 'polygon(0 60%, 100% 60%, 100% 80%, 0 80%)', transform: 'translateX(-2px)' },
          '100%': { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', transform: 'translateX(0)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-10px)' },
          '75%': { transform: 'translateX(10px)' },
        },
        popIn: {
          'from': { opacity: '0', transform: 'scale(0.3) rotateZ(-180deg)' },
          'to': { opacity: '1', transform: 'scale(1) rotateZ(0deg)' },
        },
        confettiFall: {
          'from': { opacity: '1', transform: 'translate(0, 0) rotate(0deg)' },
          'to': { opacity: '0', transform: 'translate(var(--tx), var(--ty)) rotate(720deg)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
      },
    },
  },
  plugins: [],
}
