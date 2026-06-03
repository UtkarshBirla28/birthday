// Configure your image paths here
// Place your images in: public/images/

export const IMAGE_PATHS = {
  // Memory Lane - 6 images (300x300)
  memoryLane: [
    '/images/memory-1.jpeg',
    '/images/memory-2.jpeg',
    '/images/memory-3.jpeg',
    '/images/memory-4.jpeg',
    '/images/memory-5.jpeg',
    '/images/memory-6.jpeg',
  ],

  // HE Version - 1 large image (300x250)
  heVersion: '/images/he-version.jpeg',

  // Weirdest Version - 1 large image (300x250)
  weirdestVersion: '/images/weirdest-version.jpeg',

  // Biggest Achievement - 4 images (250x250)
  achievement: [
    '/images/achievement-1.jpeg',
    '/images/achievement-2.jpeg',
    '/images/achievement-3.jpeg',
    '/images/achievement-4.jpeg',
  ],
};

// Fallback to placeholder images if local images not found
export const PLACEHOLDER_IMAGES = {
  memoryLane: Array(6).fill(null).map((_, i) => `https://picsum.photos/300/300?random=${i + 1}`),
  heVersion: 'https://picsum.photos/300/250?random=7',
  weirdestVersion: 'https://picsum.photos/300/250?random=8',
  achievement: Array(4).fill(null).map((_, i) => `https://picsum.photos/250/250?random=${i + 15}`),
};
