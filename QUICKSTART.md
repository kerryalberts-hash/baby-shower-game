# Quick Start Guide

## ⚡ 2-Minute Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Firebase (Required)
- Go to https://console.firebase.google.com/
- Create a new Firebase project
- Enable **Realtime Database** (test mode)
- Copy your Firebase config (Project Settings → Your Apps)

### 3. Create `.env.local`
Copy the template and fill in your Firebase details:
```bash
cp .env.example .env.local
# Edit .env.local and paste your Firebase config
```

### 4. Run Locally
```bash
npm run dev
```
Opens at `http://localhost:5173`

---

## 🧪 Testing the Game

### Test Flow
1. **Name entry:** Type a name, click start
2. **Game 1:** Guess 5 prices (any numbers work for testing)
3. **Game 2:** Click a baby photo
4. **Game 3:** Write 2 captions
5. **Game 4:** Match all 7 logos to slogans
6. **Leaderboard:** See your score + all answers revealed

### Test Multiple Players
Open the app in 2 browser windows (or on 2 devices on same WiFi):
- Player 1 submits answers
- Player 2 submits answers
- Both go to leaderboard
- Leaderboard shows both scores in real-time ✨

---

## 🚀 Deploy to Netlify

### Option A: GitHub + Netlify (Recommended)
```bash
# 1. Push to GitHub
git init
git add .
git commit -m "Baby shower game MVP"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/baby-shower-game.git
git push -u origin main

# 2. Go to netlify.com
# - Click "New site from Git"
# - Connect your GitHub repo
# - Build command: npm run build
# - Publish directory: dist
# - Add env vars: Firebase config
# - Done! Auto-deploys on every push
```

### Option B: Direct Upload
```bash
npm run build
# Drag the 'dist' folder to https://app.netlify.com/drop
```

---

## 📦 Build & Preview

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 🎯 What Each Game Does

| Game | Players Do | Code Location |
|------|-----------|--------|
| **Guess the Price** | Enter 5 prices in Rands | `src/components/Game1Price.jsx` |
| **Guess the Baby** | Click which photo is manager | `src/components/Game2Photo.jsx` |
| **Caption This** | Write 2 funny captions | `src/components/Game3Caption.jsx` |
| **Match Logos** | Select correct slogan for each brand | `src/components/Game4Logo.jsx` |

---

## 🎨 Current MVP Status

✅ **Works Out of the Box:**
- All 4 games playable
- Firebase real-time leaderboard
- Mobile responsive
- Answers hidden during gameplay
- Full score calculations

⏳ **Optional Upgrades (Not Required):**
- Replace emoji placeholders with real product images
- Add real baby photos instead of emoji
- Add brand logos instead of text
- Customize colors/fonts

---

## 🐛 Troubleshooting

**"Firebase is undefined"**
→ Check `.env.local` exists with all 7 Firebase variables. Restart dev server.

**"Build failed"**
→ `rm -rf node_modules && npm install`, then `npm run build`

**"Page won't load"**
→ Check browser console (F12) for errors. Clear browser cache.

---

## 📝 Files You'll Need to Update for "Production"

1. **Product images** → `src/components/Game1Price.jsx` + `public/products/`
2. **Baby photos** → `src/components/Game2Photo.jsx` + `public/slideshow/`
3. **Caption photos** → `src/components/Game3Caption.jsx` + `public/captions/`
4. **Logo images** → `src/components/Game4Logo.jsx` + `public/logos/`

For now, the game works perfectly with placeholder emoji! 👶

---

## ✨ You're Done!

The game is **ready to play** immediately. Just need:
1. Firebase account (free)
2. `.env.local` file with Firebase credentials
3. Run `npm run dev`

Questions? See `SETUP.md` for detailed guide or `PROJECT_SUMMARY.md` for architecture overview.

**Have fun! 🎉**
