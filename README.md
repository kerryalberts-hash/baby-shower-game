# 👶 Baby Shower Game

An interactive, real-time multiplayer baby shower game built with React and Firebase. Players compete in 4 fun games while answers stay hidden until the final leaderboard reveal.

**[Quick Start](./QUICKSTART.md) | [Full Setup Guide](./SETUP.md) | [Architecture](./PROJECT_SUMMARY.md)**

---

## 🎮 The Games

### 1️⃣ Guess the Price (💰)
Estimate the prices of 5 real baby items from South African retailers. Scoring: closest guess wins points.

### 2️⃣ Guess the Baby (👶)
Identify which of 6 baby photos belongs to your manager. Only 1 correct answer = 3 points.

### 3️⃣ Caption This (🤣)
Write funny captions for 2 hilarious baby photos. Winners voted by group during event.

### 4️⃣ Match the Logos (🏷️)
Connect 7 baby brand logos to their correct slogans. Full match = 7 points (1 per correct).

---

## ✨ Key Feature: Hidden Answers

- Players complete all 4 games **without seeing if they're right or wrong**
- No mid-game score reveals = maximum suspense
- **Only when final leaderboard loads** are all answers revealed simultaneously
- Perfect for office events where you want to keep the energy fun, not competitive until the very end

---

## 🚀 Get Started in 2 Minutes

### Prerequisites
- Node.js 16+
- Firebase account (free tier works)

### Quick Setup
```bash
# 1. Install
npm install

# 2. Create .env.local with Firebase credentials
cp .env.example .env.local
# Edit .env.local with your Firebase config

# 3. Run
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

**Full instructions:** See [QUICKSTART.md](./QUICKSTART.md)

---

## 📱 Features

✅ **Real-time Leaderboard** – Firebase syncs scores across all players' devices in real-time
✅ **Mobile Responsive** – Works perfectly on phones, tablets, and desktops
✅ **Beautiful Design** – Baby boy blue theme with smooth animations
✅ **Hidden Answers** – No scoring during gameplay, answers revealed only at the end
✅ **Score Breakdowns** – Click any player to see their detailed results + all correct answers
✅ **Instant Deploy** – One command to deploy to Netlify with auto-updates

---

## 🎨 Design System

| Element | Color | Font |
|---------|-------|------|
| Primary | #6BA3D4 (Sky Blue) | Fredoka One |
| Background | #FFF8F0 (Warm Cream) | Quicksand |
| Accent | #A8D8D8 (Soft Mint) | |
| Text | #2C3E50 (Charcoal) | |

---

## 🏗️ Architecture

```
MVP (Production Ready)
├── 4 Games (placeholder emoji assets)
├── Firebase Real-time Leaderboard
├── Score Calculation (0-15 points max)
└── Mobile Responsive UI

Optional Upgrades
├── Real product images (Baby City SA)
├── Real baby photos (90s-era)
├── Brand logo images
└── Custom scoring logic
```

---

## 📊 Scoring

| Game | Max Points | How It Works |
|------|-----------|-------------|
| Guess the Price | 5 | ±R100 = 1pt, ±R300 = 0.5pt |
| Guess the Baby | 3 | Correct = 3pts, Wrong = 0pts |
| Caption This | * | Group votes after event |
| Match Logos | 7 | 1pt per correct match |
| **Total** | **15** | Leaderboard ranking |

*Captions are scored by group vote during the event

---

## 🚀 Deploy to Netlify

### Option A: GitHub + Auto-Deploy
```bash
git init && git add . && git commit -m "Baby shower game"
git push origin main  # (after setting up GitHub repo)
# Then: netlify.com → "New site from Git" → Select repo
```

### Option B: Direct Upload
```bash
npm run build
# Drag 'dist' folder to netlify.com/drop
```

Netlify will ask for environment variables. Add your Firebase config:
- `VITE_FIREBASE_API_KEY`
- `VITE_FIREBASE_PROJECT_ID`
- ... (5 more Firebase vars)

See [SETUP.md](./SETUP.md) for detailed Firebase setup.

---

## 📝 MVP Includes

✅ All 4 games fully playable with emoji placeholders
✅ Firebase real-time database integration
✅ Live leaderboard with player rankings
✅ Score breakdown page (click player name on leaderboard)
✅ Responsive mobile design
✅ Tailwind CSS styling with custom theme
✅ Production build (npm run build works)
✅ Environment config template (.env.example)

---

## 🎯 What's Next (Optional)

### Upgrade Assets
The game works perfectly with emoji right now. To add real images:

1. **Product Images** – Replace 5 placeholder items with Baby City South Africa products
2. **Baby Photos** – Add 6 real 90s-era baby photos for the guessing game
3. **Caption Photos** – Add 2 genuinely funny real baby photos
4. **Logo Images** – Add brand logos instead of text

See [PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md) for file locations.

### Customize Scoring
Edit `src/components/Leaderboard.jsx` → `calculateScore()` function to adjust point values.

---

## 🐛 Troubleshooting

**"Module not found: firebase"**
```bash
npm install firebase
```

**"Firebase connection error"**
- Check `.env.local` has all 7 Firebase variables
- Verify Database URL ends in `.firebaseio.com`
- Restart dev server

**"Build failed"**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

Full troubleshooting guide: See [SETUP.md](./SETUP.md)

---

## 📂 Project Structure

```
baby-shower-game/
├── src/components/         # 7 React components (games + leaderboard)
├── src/App.jsx            # Main router
├── src/firebase.js        # Firebase config
├── .env.example           # Firebase config template
├── QUICKSTART.md          # 2-min setup
├── SETUP.md               # Full deployment guide
├── PROJECT_SUMMARY.md     # Architecture & customization
└── vite.config.js         # Vite build config
```

---

## 🛠️ Tech Stack

- **React 18** – UI components
- **Vite** – Fast build & dev server
- **Firebase Realtime Database** – Live score syncing
- **React Router** – Page navigation
- **Tailwind CSS v4** – Styling
- **Heroicons** – Icons (unused in MVP, available for upgrades)

---

## 💡 How It Works

1. Player enters name
2. Selects and plays each game (answers hidden!)
3. After finishing all 4 games, can view leaderboard
4. Leaderboard reveals:
   - Live rankings (updated in real-time as others submit)
   - Correct answers for all games
   - Detailed breakdown for each player
   - Comparison of all guesses

---

## 📞 Support

### Documentation
- [QUICKSTART.md](./QUICKSTART.md) – 2-minute setup
- [SETUP.md](./SETUP.md) – Firebase config + Netlify deployment
- [PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md) – Architecture, scoring, customization

### External Resources
- [Firebase Docs](https://firebase.google.com/docs/database)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Vite](https://vitejs.dev/)

---

## 📦 Version Info

- **Node:** 16+
- **React:** 18.x
- **Vite:** 8.x
- **Firebase:** 12.x
- **Tailwind:** v4

---

## 🎉 Ready to Play!

Everything is configured and ready to go. Just:

1. Add Firebase credentials (copy from Firebase Console)
2. Run `npm run dev` or deploy to Netlify
3. Share the link with your team
4. Have fun! 👶

**Questions?** Check [SETUP.md](./SETUP.md) or [PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md).

---

**Made with ❤️ for baby showers** 👶🎮🏆
