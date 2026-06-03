# Sonali's 25th Birthday Website 🎂✨

A beautiful, interactive cinematic birthday website built with Next.js 14 + Tailwind CSS. Perfect for Vercel deployment!

## 📋 Project Structure

```
sonali-birthday-nextjs/
├── src/
│   ├── app/
│   │   ├── layout.js          # Main layout
│   │   ├── page.js            # Main page
│   │   └── globals.css        # Global styles
│   ├── components/
│   │   ├── LoadingScreen.js   # Access restricted screen
│   │   ├── WelcomeScreen.js   # Welcome & attributes
│   │   ├── MemoryLane.js      # Memory cards & unlocks
│   │   ├── PauseScreen.js     # Pause/reflection screen
│   │   ├── AchievementScreen.js # Trophy screen
│   │   ├── LetterScreen.js    # Handwritten letter
│   │   ├── FinalScreen.js     # Happy Birthday screen
│   │   ├── ParticleBackground.js # Particle effects
│   │   └── GlowOrbs.js        # Background glow effects
│   └── utils/
│       ├── animations.js      # Animation utilities
│       └── imageConfig.js     # Image paths configuration
├── public/
│   └── images/               # Your image files go here
│       ├── memory-1.jpg
│       ├── memory-2.jpg
│       ├── memory-3.jpg
│       ├── memory-4.jpg
│       ├── memory-5.jpg
│       ├── memory-6.jpg
│       ├── he-version.jpg
│       ├── weirdest-version.jpg
│       ├── achievement-1.jpg
│       ├── achievement-2.jpg
│       ├── achievement-3.jpg
│       └── achievement-4.jpg
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
├── tsconfig.json
└── .gitignore
```

## 🖼️ Adding Your Images

### Image Requirements:

1. **Memory Lane (6 images)**
   - Files: `memory-1.jpg`, `memory-2.jpg`, ... `memory-6.jpg`
   - Size: 300x300px (square)
   - Location: `public/images/`

2. **HE Version (1 image)**
   - File: `he-version.jpg`
   - Size: 300x250px
   - Location: `public/images/`

3. **Weirdest Version (1 image)**
   - File: `weirdest-version.jpg`
   - Size: 300x250px
   - Location: `public/images/`

4. **Biggest Achievement (4 images)**
   - Files: `achievement-1.jpg`, `achievement-2.jpg`, `achievement-3.jpg`, `achievement-4.jpg`
   - Size: 250x250px (square)
   - Location: `public/images/`

### Steps to Add Images:

1. Navigate to `public/images/` directory
2. Replace placeholder images with your own photos
3. **IMPORTANT**: Keep the exact filenames as listed above
4. Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`

## 🚀 Setup & Run Locally

### Prerequisites:
- Node.js 18+ installed
- npm or yarn

### Installation:

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Visit http://localhost:3000
```

### Building:

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 🔧 Configuration

### Customize the Correct Birthday Month:

Edit `src/components/LoadingScreen.js`:

```javascript
const CORRECT_MONTH = 11; // December (0-indexed: 0=January, 11=December)
```

### Customize Image Paths:

Edit `src/utils/imageConfig.js`:

```javascript
export const IMAGE_PATHS = {
  memoryLane: [
    '/images/memory-1.jpg',
    // ... more paths
  ],
  // ... other paths
};
```

### Customize Tailwind Colors:

Edit `tailwind.config.js` to change primary colors (cyan, purple, pink, gold)

## 📦 Dependencies

All dependencies are **latest stable versions**:

- `next@14.0.0` - React framework
- `react@18.2.0` - UI library
- `tailwindcss@3.4.1` - CSS framework
- `postcss@8.4.32` - CSS processing
- `autoprefixer@10.4.16` - CSS vendor prefixing

## 🌐 Deploy to Vercel

### Option 1: Using Vercel CLI (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow the prompts
```

### Option 2: Connect GitHub to Vercel

1. Push your code to GitHub
2. Go to https://vercel.com/new
3. Select "Import Git Repository"
4. Select your repository
5. Click "Deploy"

### Option 3: Manual Upload

1. Go to https://vercel.com
2. Create account (if needed)
3. Click "Add New..."
4. Click "Project"
5. Upload the entire folder

## ✅ Pre-Deployment Checklist

- [ ] All images added to `public/images/`
- [ ] Image filenames match exactly as specified
- [ ] Correct birthday month set in LoadingScreen.js
- [ ] `npm run build` runs without errors
- [ ] Test locally with `npm run dev`
- [ ] Check responsive design on mobile

## 🎨 Features

✨ **Smooth Animations** - Tailwind CSS animations
🎆 **Particle Effects** - Canvas-based particle system
💫 **Confetti & Crackers** - Celebration effects
🔊 **Birthday Music** - Web Audio API synth
📱 **Fully Responsive** - Works on all devices
🎭 **Multiple Screens** - 7 unique interactive screens
🎯 **Unlock Mechanics** - Month-based access control
🌈 **Glowing UI** - Neon effects with Tailwind

## 🐛 Troubleshooting

### Images not showing?
- Check if files are in `public/images/`
- Verify filenames match exactly
- Check browser console for 404 errors

### Build fails?
- Run `npm install` again
- Delete `node_modules` and `.next` folder
- Run `npm run build` again

### Deployment issues?
- Ensure `next.config.js` is present
- Check Vercel build logs
- Verify all environment variables are set

## 📝 Environment Variables

No environment variables needed for basic functionality. Optional:

```bash
# .env.local (for custom configurations)
NEXT_PUBLIC_API_URL=your_api_url
```

## 🎉 Ready to Deploy!

Your birthday website is production-ready. Just:

1. Add your images to `public/images/`
2. Run `npm run build`
3. Deploy to Vercel with `vercel`

That's it! Your cinematic birthday experience is live! 🚀

## 📞 Support

For issues with:
- **Next.js**: https://nextjs.org/docs
- **Tailwind**: https://tailwindcss.com/docs
- **Vercel**: https://vercel.com/docs

---

**Happy 25th Birthday, Sonali!** 🎂✨💙
