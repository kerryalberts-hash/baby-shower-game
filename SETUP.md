# Baby Shower Game - Setup Guide

A fun, interactive React-based game for your baby shower event with 4 games, live leaderboard, and real-time score syncing.

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm
- A Firebase account (free tier works great)

### 1. Clone & Install
```bash
npm install
```

### 2. Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project (or use existing)
3. Enable **Realtime Database**
   - Click "Create Database"
   - Choose "Start in test mode" (fine for office event)
   - Choose a region (preferably close to your location)

4. In **Project Settings**, copy your Firebase config:
   - Click your project name → Project settings
   - Under "Your apps", select your web app
   - Copy the config object

5. Create a `.env.local` file in the project root:
```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_DATABASE_URL=https://your-project-id.firebaseio.com
```

### 3. Run Locally
```bash
npm run dev
```
Visit `http://localhost:5173` in your browser.

### 4. Build & Deploy to Netlify

#### Option A: GitHub + Netlify (Recommended)
1. Initialize git and push to GitHub:
```bash
git init
git add .
git commit -m "Initial commit: Baby shower game"
git branch -M main
git remote add origin https://github.com/your-username/baby-shower-game.git
git push -u origin main
```

2. Go to [Netlify](https://netlify.com)
3. Click "New site from Git" → Connect GitHub
4. Select your repository
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Add environment variables:
   - Go to **Site settings** → **Build & deploy** → **Environment**
   - Paste all your Firebase config variables

8. Deploy! Netlify will auto-deploy on every git push.

#### Option B: Direct Netlify Deploy
```bash
npm run build
```
Drag the `dist/` folder to [Netlify Drop](https://app.netlify.com/drop)

---

## 📱 Games Overview

### Game 1: Guess the Price (💰)
- Players guess prices of 5 real baby items from Baby City South Africa
- Prices are compared with actual prices
- Scoring: ±R100 = 1 point, ±R300 = 0.5 points

### Game 2: Guess the Baby (👶)
- 6 baby photos shown
- Players select which one is the manager
- 1 correct = 3 points

### Game 3: Caption This (🤣)
- 2 funny baby photos
- Players write captions
- Scored by group vote during event
- All captions shown on leaderboard

### Game 4: Match the Logos (🏷️)
- 7 baby brand logos paired with slogans
- Full matches: 7 points (1 per correct match)

---

## 🎯 How It Works

1. **Game Flow:**
   - Players enter their name
   - Select & play each game
   - **Answers hidden during gameplay** ✨
   - After all 4 games → Leaderboard unlocks
   - All answers revealed together on final leaderboard

2. **Real-Time Syncing:**
   - Firebase Realtime Database stores all scores
   - Multiple devices see live leaderboard updates
   - Perfect for projecting scores on a screen

3. **Scoring System:**
   - Game 1 (Price Guessing): 0-5 points
   - Game 2 (Baby Photo): 0 or 3 points
   - Game 3 (Captions): Voted by group
   - Game 4 (Logo Matching): 0-7 points
   - **Total: Up to 15 points**

---

## 🖼️ Asset Management

### Products (Game 1)
Currently using placeholder items. To add real products from Baby City:

1. Edit `src/components/Game1Price.jsx`
2. Replace the `products` array with:
```javascript
const products = [
  {
    id: 1,
    name: 'Product Name',
    correctPrice: 1850, // in Rand
    image: '/products/product1.jpg', // or emoji
  },
  // ... 4 more items
];
```

3. Save product images to `public/products/`

### Baby Photos (Game 2)
Replace the emoji placeholders in `src/components/Game2Photo.jsx` with real images:
```javascript
<img src="/slideshow/baby1.jpg" alt="Baby 1" />
```

### Caption Photos (Game 3)
Edit `src/components/Game3Caption.jsx` to add photo images instead of emoji.

### Brand Logos (Game 4)
Logos are text-based in the current MVP. To add images:
1. Create a `logos` object instead of just brand names
2. Display `<img src={logo.image} alt={logo.name} />`

---

## 🔧 Customization

### Colors
Edit `tailwind.config.js` to change the baby blue/pink theme:
```javascript
'baby-blue': '#6BA3D4',    // Primary blue
'baby-cream': '#FFF8F0',   // Background
'baby-mint': '#A8D8D8',    // Accent
```

### Fonts
Google Fonts are imported in `src/App.css`. Change to your preference:
```css
@import url('https://fonts.googleapis.com/css2?family=FONT_NAME&display=swap');
```

### Scoring
Edit `src/components/Leaderboard.jsx` `calculateScore()` function to adjust point values.

---

## 🐛 Troubleshooting

### Firebase Connection Error
- Check `.env.local` has all 7 Firebase variables
- Ensure Database URL is correct (ends in `.firebaseio.com`)
- Restart dev server after changing `.env.local`

### Styles Not Loading
```bash
npm run build
npm run preview
```
If preview works but dev doesn't, clear node_modules and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Scores Not Saving
- Check Firebase Database Rules are set to test mode (allow read/write)
- Check browser console for errors (F12 → Console)
- Ensure `.env.local` is NOT in `.gitignore` for local dev (but add to deployment secrets on Netlify)

---

## 📦 Deploying Updates

Once deployed to Netlify:
```bash
git add .
git commit -m "Update: Add real baby photos"
git push origin main
```
Netlify automatically rebuilds and deploys!

---

## 🎉 During the Event

1. **Before event:** Test on multiple devices (mobile + laptop)
2. **Start:** Share leaderboard link with everyone
3. **During:** Players access on their phones, submit answers
4. **After all games:** Project the final leaderboard on a screen
5. **Optional:** Share screenshot of leaderboard in team chat

---

## 📞 Support

For issues or customizations, check:
- React Router docs: https://reactrouter.com/
- Tailwind CSS: https://tailwindcss.com/docs
- Firebase: https://firebase.google.com/docs/database

Enjoy your baby shower game! 👶🎉
