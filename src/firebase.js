import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, onValue, query, orderByChild } from 'firebase/database';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);

export const submitPlayerScore = async (playerData) => {
  const scoresRef = ref(database, 'players');
  return push(scoresRef, {
    ...playerData,
    timestamp: new Date().toISOString(),
  });
};

export const getPlayerScores = (callback) => {
  const scoresRef = ref(database, 'players');
  onValue(scoresRef, (snapshot) => {
    const data = snapshot.val();
    if (data) {
      const players = Object.entries(data).map(([key, value]) => ({
        id: key,
        ...value,
      }));
      callback(players);
    } else {
      callback([]);
    }
  });
};
