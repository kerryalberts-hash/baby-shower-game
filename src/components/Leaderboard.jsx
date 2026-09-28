import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getPlayerScores } from '../firebase';

export default function Leaderboard() {
  const [players, setPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = getPlayerScores((playerList) => {
      const sortedPlayers = playerList
        .map((player) => ({
          ...player,
          totalScore: calculateScore(player),
        }))
        .sort((a, b) => b.totalScore - a.totalScore);
      setPlayers(sortedPlayers);
    });

    return () => unsubscribe?.();
  }, []);

  const calculateScore = (player) => {
    let score = 0;

    if (player.game1Guesses && Array.isArray(player.game1Guesses)) {
      const correctPrices = [1850, 1500, 1200, 450, 1450];
      player.game1Guesses.forEach((guess, index) => {
        const diff = Math.abs(guess - correctPrices[index]);
        if (diff <= 100) score += 1;
        else if (diff <= 300) score += 0.5;
      });
    }

    if (player.game2Guess === 6) score += 3;

    if (
      player.game4Matches &&
      Array.isArray(player.game4Matches)
    ) {
      const correctMatches = {
        1: 'Swaddlers',
        2: 'Little Snugglers',
        3: 'Gentle & Caring',
        4: 'Healing Nappy Rash',
        5: 'Pro Follow-up',
        6: 'Growing Strong',
        7: 'Care & Comfort',
      };

      player.game4Matches.forEach((match) => {
        if (match.selectedSlogan === correctMatches[match.brandId]) {
          score += 1;
        }
      });
    }

    return Math.round(score * 10) / 10;
  };

  const getMedal = (index) => {
    const medals = ['🥇', '🥈', '🥉'];
    return medals[index] || '  ';
  };

  if (selectedPlayer) {
    return (
      <div className="page-bg" style={{ minHeight: '100vh', padding: '2rem 1rem' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <button
            onClick={() => setSelectedPlayer(null)}
            style={{ marginBottom: '1.5rem', color: '#3b82f6', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1rem' }}
          >
            ← Back to Leaderboard
          </button>

          <div className="card scale-in">
            <h2 style={{ color: '#3b82f6', marginBottom: '1.5rem', fontSize: '1.5rem', fontWeight: 700 }}>
              {selectedPlayer.name}'s Results
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <h3 style={{ color: '#3b82f6', fontWeight: 600, marginBottom: '1rem', fontSize: '1rem' }}>
                  Game 1: Guess the Price
                </h3>
                {selectedPlayer.game1Guesses ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem' }}>
                    <p style={{ color: '#e2e8f0' }}>
                      Item 1 (Graco Stroller): Guessed R{selectedPlayer.game1Guesses[0]}, Correct: R1850
                    </p>
                    <p style={{ color: '#e2e8f0' }}>
                      Item 2 (Chicco Car Seat): Guessed R{selectedPlayer.game1Guesses[1]}, Correct: R1500
                    </p>
                    <p style={{ color: '#e2e8f0' }}>
                      Item 3 (Bassinet): Guessed R{selectedPlayer.game1Guesses[2]}, Correct: R1200
                    </p>
                    <p style={{ color: '#e2e8f0' }}>
                      Item 4 (Sterilizer): Guessed R{selectedPlayer.game1Guesses[3]}, Correct: R450
                    </p>
                    <p style={{ color: '#e2e8f0' }}>
                      Item 5 (High Chair): Guessed R{selectedPlayer.game1Guesses[4]}, Correct: R1450
                    </p>
                  </div>
                ) : (
                  <p style={{ color: '#64748b' }}>Not played</p>
                )}
              </div>

              <div>
                <h3 style={{ color: '#3b82f6', fontWeight: 600, marginBottom: '1rem', fontSize: '1rem' }}>
                  Game 2: Guess the Baby
                </h3>
                {selectedPlayer.game2PhotoId !== undefined ? (
                  <p style={{ color: '#e2e8f0' }}>
                    You selected Photo #{selectedPlayer.game2PhotoId} •{' '}
                    {selectedPlayer.game2PhotoId === 6 ? '✓ Correct!' : '✗ Incorrect'}
                  </p>
                ) : (
                  <p style={{ color: '#64748b' }}>Not played</p>
                )}
              </div>

              <div>
                <h3 style={{ color: '#3b82f6', fontWeight: 600, marginBottom: '1rem', fontSize: '1rem' }}>
                  Game 3: Caption This
                </h3>
                {selectedPlayer.game3Captions && selectedPlayer.game3Captions.length > 0 ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
                    <p style={{ color: '#e2e8f0' }}>
                      <span style={{ fontWeight: 600 }}>Photo 1:</span> "{selectedPlayer.game3Captions[0]}"
                    </p>
                    <p style={{ color: '#e2e8f0' }}>
                      <span style={{ fontWeight: 600 }}>Photo 2:</span> "{selectedPlayer.game3Captions[1]}"
                    </p>
                    <p style={{ color: '#64748b', fontSize: '0.8rem', marginTop: '0.5rem' }}>
                      💡 Winners will be announced after group vote!
                    </p>
                  </div>
                ) : (
                  <p style={{ color: '#64748b' }}>Not played</p>
                )}
              </div>

              <div>
                <h3 style={{ color: '#3b82f6', fontWeight: 600, marginBottom: '1rem', fontSize: '1rem' }}>
                  Game 4: Match the Logos
                </h3>
                {selectedPlayer.game4Matches && Array.isArray(selectedPlayer.game4Matches) ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem' }}>
                    {selectedPlayer.game4Matches.map((match, idx) => {
                      const correctMatches = {
                        1: 'Swaddlers',
                        2: 'Little Snugglers',
                        3: 'Gentle & Caring',
                        4: 'Healing Nappy Rash',
                        5: 'Pro Follow-up',
                        6: 'Growing Strong',
                        7: 'Care & Comfort',
                      };
                      const isCorrect = match.selectedSlogan === correctMatches[match.brandId];
                      return (
                        <p key={idx} style={{ color: '#e2e8f0' }}>
                          {match.brandName}: {match.selectedSlogan}{' '}
                          {isCorrect ? '✓' : '✗'} (Correct: {correctMatches[match.brandId]})
                        </p>
                      );
                    })}
                  </div>
                ) : (
                  <p style={{ color: '#64748b' }}>Not played</p>
                )}
              </div>
            </div>

            <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              <p style={{ fontSize: '1.2rem', fontWeight: 700, color: '#3b82f6' }}>
                Total Score: {selectedPlayer.totalScore}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-bg" style={{ minHeight: '100vh', padding: '2rem 1rem' }}>
      <div style={{ maxWidth: '640px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏆</div>
          <h1 className="title-glow" style={{ marginBottom: '0.5rem' }}>Final Leaderboard</h1>
          <p style={{ color: '#94a3b8', fontSize: '1rem' }}>Here are the results!</p>
        </div>

        <div className="card scale-in" style={{ marginBottom: '2rem' }}>
          {players.length === 0 ? (
            <p style={{ textAlign: 'center', color: '#94a3b8' }}>
              No players yet. Start a new game to see scores!
            </p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {players.map((player, index) => (
                <button
                  key={player.id}
                  onClick={() => setSelectedPlayer(player)}
                  style={{
                    width: '100%',
                    padding: '1.25rem',
                    borderRadius: '12px',
                    background: 'rgba(15, 23, 42, 0.5)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(15, 23, 42, 0.7)';
                    e.currentTarget.style.borderColor = 'rgba(59,130,246,0.5)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(59,130,246,0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(15, 23, 42, 0.5)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: 1 }}>
                    <span style={{ fontSize: '1.75rem' }}>{getMedal(index)}</span>
                    <div>
                      <p style={{ color: '#e2e8f0', fontWeight: 600, fontSize: '1rem' }}>
                        #{index + 1} {player.name}
                      </p>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <p style={{ color: '#3b82f6', fontSize: '1.3rem', fontWeight: 700 }}>
                      {player.totalScore}
                    </p>
                    <p style={{ color: '#94a3b8', fontSize: '0.75rem' }}>points</p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>

        <button
          onClick={() => navigate('/')}
          className="btn-primary"
          style={{ width: '100%' }}
        >
          ← Play Again
        </button>
      </div>
    </div>
  );
}
