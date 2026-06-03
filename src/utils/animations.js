export const createConfetti = () => {
  const confettiPieces = 50;
  const colors = ['#00d9ff', '#9d4edd', '#ff006e', '#ffd60a'];
  
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
  const colors = ['#00d9ff', '#9d4edd', '#ff006e', '#ffd60a', '#00ff00', '#ff3333'];

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
