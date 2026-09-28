import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import NameEntry from './components/NameEntry';
import GameSelection from './components/GameSelection';
import Game1Price from './components/Game1Price';
import Game2Photo from './components/Game2Photo';
import Game3Caption from './components/Game3Caption';
import Game4Logo from './components/Game4Logo';
import Leaderboard from './components/Leaderboard';

function App() {
  const [playerName, setPlayerName] = useState('');
  const [playerScores, setPlayerScores] = useState({
    game1Guesses: [],
    game2Guess: null,
    game3Captions: [],
    game4Matches: [],
  });

  return (
    <Router>
      <div className="min-h-screen bg-baby-cream font-body">
        <Routes>
          <Route
            path="/"
            element={<NameEntry setPlayerName={setPlayerName} />}
          />
          <Route
            path="/games"
            element={<GameSelection playerName={playerName} />}
          />
          <Route
            path="/game1"
            element={
              <Game1Price
                playerName={playerName}
                setPlayerScores={setPlayerScores}
              />
            }
          />
          <Route
            path="/game2"
            element={
              <Game2Photo
                playerName={playerName}
                setPlayerScores={setPlayerScores}
              />
            }
          />
          <Route
            path="/game3"
            element={
              <Game3Caption
                playerName={playerName}
                setPlayerScores={setPlayerScores}
              />
            }
          />
          <Route
            path="/game4"
            element={
              <Game4Logo
                playerName={playerName}
                setPlayerScores={setPlayerScores}
              />
            }
          />
          <Route
            path="/leaderboard"
            element={<Leaderboard />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
