# Next Steps - Baby Shower Game

Your game is built and ready! Here's what to do next:

---

## 🎯 Immediate (This is essential)

### 1. Set Up Firebase
**Time: 5 minutes**

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project (or use an existing one)
3. Enable **Realtime Database**
4. Copy your Firebase config from **Project Settings → Your Apps**
5. Create `.env.local` file in the project root:

```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_DATABASE_URL=https://your-project-id.firebaseio.com
```

### 2. Test Locally
**Time: 2 minutes**

```bash
npm install
npm run dev
```

Open http://localhost:5173 and play through all 4 games on different players to test.

### 3. Deploy to Netlify
**Time: 10 minutes**

```bash
# Push to GitHub (create repo first if needed)
git init
git add .
git commit -m "Baby shower game MVP"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/baby-shower-game.git
git push -u origin main

# Then go to netlify.com:
# - Click "New site from Git"
# - Connect GitHub
# - Select your repo
# - Build command: npm run build
# - Publish dir: dist
# - Add environment variables (paste Firebase config)
# - Deploy!
```

**Result:** You'll get a shareable link like `baby-shower-game-abc123.netlify.app`

---

## 📸 Optional (Nice to have, but not required)

### 4. Add Real Product Images (Game 1)
**Time: 20 minutes**

1. Research 5 baby items on [babycity.co.za](https://babycity.co.za/)
2. Save product images to `public/products/product1.jpg`, `product2.jpg`, etc.
3. Edit `src/components/Game1Price.jsx`:
   - Replace emoji with `<img src="/products/product1.jpg" />`
   - Update product names and prices

Example:
```javascript
const products = [
  {
    id: 1,
    name: 'Graco LiteRider Stroller',
    correctPrice: 1850,
    image: '/products/product1.jpg',
  },
  // ... 4 more
];
```

### 5. Add Real Baby Photos (Game 2)
**Time: 30 minutes**

1. Find 6 real 90s-era baby photos from [Unsplash](https://unsplash.com/?q=baby+vintage) or [Pexels](https://pexels.com/)
2. Save to `public/slideshow/baby1.jpg` through `baby6.jpg`
3. Edit `src/components/Game2Photo.jsx`:
   - Replace emoji placeholders with real images
   - **Note:** One of these 6 should be the manager's actual photo (you'll provide this later)

Example:
```javascript
<img src="/slideshow/baby1.jpg" alt="Baby 1" className="w-full rounded-lg" />
```

### 6. Add Funny Caption Photos (Game 3)
**Time: 15 minutes**

1. Find 2 genuinely funny baby photos from [Unsplash](https://unsplash.com/) or [Pexels](https://pexels.com/)
2. Save to `public/captions/photo1.jpg` and `photo2.jpg`
3. Edit `src/components/Game3Caption.jsx` to replace emoji with images

### 7. Add Brand Logos (Game 4)
**Time: 30 minutes**

1. Find logos for: Pampers, Huggies, Johnson's Baby, Sudocream, NAN, Nido, Bepanthen
2. Save to `public/logos/`
3. Edit `src/components/Game4Logo.jsx` to display logo images instead of text names

---

## 🎨 Optional Customization

### 8. Change Colors
Edit `tailwind.config.js` to change the baby blue theme:
```javascript
'baby-blue': '#YOUR_COLOR',
'baby-cream': '#YOUR_COLOR',
'baby-mint': '#YOUR_COLOR',
```

### 9. Adjust Scoring
Edit `src/components/Leaderboard.jsx` → `calculateScore()` function to change point values.

### 10. Add More Games
Follow the Game 1-4 pattern to add a 5th game. See [PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md) for architecture.

---

## 📋 Pre-Event Checklist

Before your event:

- [ ] Firebase is working (test with `npm run dev`)
- [ ] Netlify deployment is live with shareable link
- [ ] Tested on mobile + desktop
- [ ] Tested with 2+ players simultaneously (Firebase syncing works)
- [ ] Manager's actual baby photo ready (if upgrading to real photos)
- [ ] Real product images added (if upgrading)
- [ ] Share the Netlify link with team

---

## 🚀 During the Event

1. **Before start:** Share the Netlify link with everyone
2. **Instructions:** "Complete all 4 games - don't worry about getting things right!"
3. **Game time:** Players use their phones/laptops to play
4. **After games:** "Check the leaderboard to see answers!"
5. **Optional:** Project the leaderboard on a screen to see live rankings

---

## 📞 Help & Resources

**Getting stuck?**

1. **Deployment issues?** → See [SETUP.md](./SETUP.md)
2. **Want to customize?** → See [PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md)
3. **Need quick answers?** → See [QUICKSTART.md](./QUICKSTART.md)
4. **Firebase help?** → https://firebase.google.com/docs/database
5. **React help?** → https://react.dev/

---

## 💡 Pro Tips

1. **Test with real players first** - Play all 4 games yourself before the event
2. **Firebase test mode is fine** - The free tier is perfect for small office events
3. **Share the link early** - Let people access it on their own devices
4. **Keep scores hidden** - Don't project leaderboard until everyone finishes
5. **Have fun!** - The goal is entertainment, not competition

---

## 📝 Timeline Suggestions

- **Week 1:** Set up Firebase, test locally
- **Week 2:** Deploy to Netlify, add real photos (if upgrading)
- **Week 3:** Final testing, create event link
- **Event day:** Share link, play, enjoy leaderboard reveal! 🎉

---

## ✨ You're All Set!

Everything is ready to go. The only thing you absolutely need to do is:

1. **Set up Firebase** (5 min)
2. **Create `.env.local`** (2 min)  
3. **Deploy to Netlify** (10 min)

Total: ~17 minutes to a live game!

After that, everything else is optional upgrades. The game works perfectly with emoji placeholders right now.

---

**Questions?** Check the documentation files or reach out. Enjoy your baby shower game! 👶🎉
