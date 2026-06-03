// Festive palette tuned to the soft-blue theme: navy, ocean, steel, gold, coral, rose, white
export const FESTIVE_COLORS = ['#1B4769', '#2F6B96', '#5B9BC9', '#E8B84B', '#F4A259', '#E27D9E', '#FFFFFF'];

export const createConfetti = () => {
  const confettiPieces = 60;
  const colors = FESTIVE_COLORS;

  for (let i = 0; i < confettiPieces; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'fixed pointer-events-none z-20';
    
    const color = colors[Math.floor(Math.random() * colors.length)];
    const x = Math.random() * window.innerWidth;
    const y = -10;
    
    const tx = (Math.random() - 0.5) * 300;
    const ty = window.innerHeight + 50;
    
    confetti.style.left = x + 'px';
    confetti.style.top = y + 'px';
    
    const piece = document.createElement('div');
    piece.style.width = '10px';
    piece.style.height = '10px';
    piece.style.backgroundColor = color;
    piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
    piece.style.animation = `confettiFall 3s ease-out forwards`;
    piece.style.setProperty('--tx', tx + 'px');
    piece.style.setProperty('--ty', ty + 'px');
    
    confetti.appendChild(piece);
    document.body.appendChild(confetti);
    
    setTimeout(() => confetti.remove(), 3000);
  }
};

export const createHeartFloats = () => {
  const interval = setInterval(() => {
    const heart = document.createElement('div');
    heart.className = 'fixed text-5xl pointer-events-none z-20';
    heart.textContent = '💙';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.top = window.innerHeight + 'px';
    heart.style.animation = `floatUp 4s ease-out forwards`;
    
    const floatX = (Math.random() - 0.5) * 100;
    heart.style.setProperty('--float-x', floatX + 'px');
    
    document.body.appendChild(heart);
    
    setTimeout(() => heart.remove(), 4000);
  }, 500);
  
  return () => clearInterval(interval);
};

export const playBirthdayMusic = () => {
  try {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const notes = [262, 262, 294, 262, 349, 330];
    const durations = [500, 500, 500, 500, 500, 1000];
    
    let time = audioContext.currentTime;
    notes.forEach((note, index) => {
      const osc = audioContext.createOscillator();
      const gain = audioContext.createGain();
      
      osc.connect(gain);
      gain.connect(audioContext.destination);
      
      osc.frequency.value = note;
      gain.gain.setValueAtTime(0.3, time);
      gain.gain.exponentialRampToValueAtTime(0.01, time + durations[index] / 1000);
      
      osc.start(time);
      osc.stop(time + durations[index] / 1000);
      
      time += (durations[index] + 100) / 1000;
    });
  } catch (err) {
    console.log('Audio context not available');
  }
};

export const createCrackerExplosion = () => {
  const burstPoints = [
    { x: window.innerWidth * 0.2, y: window.innerHeight * 0.2 },
    { x: window.innerWidth * 0.8, y: window.innerHeight * 0.2 },
    { x: window.innerWidth * 0.5, y: window.innerHeight * 0.1 },
    { x: window.innerWidth * 0.2, y: window.innerHeight * 0.8 },
    { x: window.innerWidth * 0.8, y: window.innerHeight * 0.8 }
  ];

  burstPoints.forEach((point, index) => {
    setTimeout(() => {
      createCrackerBurst(point.x, point.y);
    }, index * 150);
  });

  setTimeout(() => {
    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        createCrackerBurst(
          Math.random() * window.innerWidth,
          Math.random() * window.innerHeight * 0.5
        );
      }, i * 100);
    }
  }, 800);
};

const createCrackerBurst = (x, y) => {
  const particleCount = 30;
  const colors = FESTIVE_COLORS;

  for (let i = 0; i < particleCount; i++) {
    const cracker = document.createElement('div');
    cracker.className = 'fixed pointer-events-none z-30';
    cracker.style.left = x + 'px';
    cracker.style.top = y + 'px';

    const particle = document.createElement('div');
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    particle.style.width = '12px';
    particle.style.height = '12px';
    particle.style.backgroundColor = randomColor;
    particle.style.borderRadius = '50%';
    particle.style.position = 'absolute';

    const angle = (i / particleCount) * Math.PI * 2;
    const velocity = 4 + Math.random() * 8;
    const tx = Math.cos(angle) * velocity * 100;
    const ty = Math.sin(angle) * velocity * 100;

    particle.style.animation = `crackerExplode 1.5s ease-out forwards`;
    particle.style.setProperty('--cracker-x', tx + 'px');
    particle.style.setProperty('--cracker-y', ty + 'px');

    cracker.appendChild(particle);
    document.body.appendChild(cracker);

    setTimeout(() => cracker.remove(), 1500);
  }

  for (let i = 0; i < 15; i++) {
    const spark = document.createElement('div');
    spark.className = 'fixed pointer-events-none z-30';
    spark.style.left = x + 'px';
    spark.style.top = y + 'px';

    const particle = document.createElement('div');
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const size = (3 + Math.random() * 4) + 'px';
    particle.style.width = size;
    particle.style.height = size;
    particle.style.backgroundColor = randomColor;
    particle.style.borderRadius = '50%';
    particle.style.position = 'absolute';

    const angle = Math.random() * Math.PI * 2;
    const sparkX = Math.cos(angle) * (50 + Math.random() * 150);
    const sparkY = Math.sin(angle) * (50 + Math.random() * 150) + (100 + Math.random() * 300);

    particle.style.animation = `sparkFall 2s ease-out forwards`;
    particle.style.setProperty('--spark-x', sparkX + 'px');
    particle.style.setProperty('--spark-fall', sparkY + 'px');

    spark.appendChild(particle);
    document.body.appendChild(spark);

    setTimeout(() => spark.remove(), 2000);
  }
};

/* Localized celebration when something is revealed — a burst at (x, y)
   plus a quick puff of confetti rising from the same spot. */
export const createConfettiBurst = (x, y) => {
  createCrackerBurst(x, y);

  const pieces = 24;
  for (let i = 0; i < pieces; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'fixed pointer-events-none z-30';
    confetti.style.left = x + 'px';
    confetti.style.top = y + 'px';

    const piece = document.createElement('div');
    const color = FESTIVE_COLORS[Math.floor(Math.random() * FESTIVE_COLORS.length)];
    const size = 6 + Math.random() * 6;
    piece.style.width = size + 'px';
    piece.style.height = size + 'px';
    piece.style.backgroundColor = color;
    piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    piece.style.position = 'absolute';

    const angle = (Math.random() * Math.PI) - Math.PI; // upward fan
    const dist = 80 + Math.random() * 160;
    const tx = Math.cos(angle) * dist;
    const ty = Math.sin(angle) * dist - 40; // bias upward

    piece.style.animation = `crackerExplode ${1 + Math.random()}s ease-out forwards`;
    piece.style.setProperty('--cracker-x', tx + 'px');
    piece.style.setProperty('--cracker-y', ty + 'px');

    confetti.appendChild(piece);
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 2000);
  }
};

/* Gently rising balloons & party emojis. Returns a cleanup fn. */
export const createBalloons = () => {
  const emojis = ['🎈', '🎉', '💙', '✨', '🎊', '🥳'];
  const interval = setInterval(() => {
    const el = document.createElement('div');
    el.className = 'fixed pointer-events-none z-20';
    el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    el.style.fontSize = 28 + Math.random() * 28 + 'px';
    el.style.left = Math.random() * window.innerWidth + 'px';
    el.style.top = window.innerHeight + 20 + 'px';
    el.style.setProperty('--sway', (Math.random() - 0.5) * 120 + 'px');

    const duration = 7 + Math.random() * 5;
    el.style.animation = `balloonRise ${duration}s ease-in forwards`;

    document.body.appendChild(el);
    setTimeout(() => el.remove(), duration * 1000);
  }, 900);

  return () => clearInterval(interval);
};

/* Recurring cracker show for the finale. Returns a cleanup fn. */
export const startCrackerShow = () => {
  const interval = setInterval(() => {
    const x = window.innerWidth * (0.15 + Math.random() * 0.7);
    const y = window.innerHeight * (0.1 + Math.random() * 0.35);
    createCrackerBurst(x, y);
  }, 2600);

  return () => clearInterval(interval);
};
