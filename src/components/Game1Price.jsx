import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { submitPlayerScore } from '../firebase';

const products = [
  {
    id: 1,
    name: 'Graco LiteRider Stroller',
    correctPrice: 1850,
    image: 'https://res.cloudinary.com/dngnuara5/image/upload/v1790597379/Greco_lite_ryder_stoller_zpu3m1.jpg',
    hint: 'Lightweight, foldable pram for newborns',
  },
  {
    id: 2,
    name: 'Chicco Car Seat',
    correctPrice: 1500,
    image: 'https://res.cloudinary.com/dngnuara5/image/upload/v1790597379/Chicco_car_seat_gwcz3h.jpg',
    hint: 'Rear-facing infant car seat with ISOFIX base',
  },
  {
    id: 3,
    name: 'Baby Bassinet',
    correctPrice: 1200,
    image: 'https://res.cloudinary.com/dngnuara5/image/upload/v1790597379/Baby_bassinet_ayd5al.jpg',
    hint: 'Cosy bedside sleeping basket for newborns',
  },
  {
    id: 4,
    name: 'Electric Sterilizer',
    correctPrice: 450,
    image: 'https://res.cloudinary.com/dngnuara5/image/upload/v1790597381/Electric_sterilizer_lppiir.jpg',
    hint: 'Steam sterilizer for bottles & dummies',
  },
  {
    id: 5,
    name: 'Wooden High Chair',
    correctPrice: 1450,
    image: 'https://res.cloudinary.com/dngnuara5/image/upload/v1790597379/baby_high_chair_i8un2p.jpg',
    hint: 'Adjustable solid-wood feeding chair',
  },
];

export default function Game1Price({ playerName, setPlayerScores }) {
  const [currentItem, setCurrentItem] = useState(0);
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmitGuess = (e) => {
    e.preventDefault();
    if (currentGuess.trim()) {
      const newGuesses = [...guesses, parseInt(currentGuess)];
      setGuesses(newGuesses);
      setCurrentGuess('');
      setSubmitted(true);

      setTimeout(() => {
        if (currentItem < products.length - 1) {
          setCurrentItem(currentItem + 1);
          setSubmitted(false);
        }
      }, 1500);
    }
  };

  const handleNext = async () => {
    if (guesses.length === products.length) {
      setPlayerScores((prev) => ({
        ...prev,
        game1Guesses: guesses,
      }));

      await submitPlayerScore({
        name: playerName,
        game1Guesses: guesses,
      });

      navigate('/games');
    }
  };

  const product = products[currentItem];
  const progress = ((currentItem + (submitted ? 1 : 0)) / products.length) * 100;

  return (
    <div className="page-bg" style={{ minHeight: '100vh', padding: '2rem 1rem' }}>
      <div style={{ maxWidth: '640px', margin: '0 auto' }}>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-baby-blue mb-4">Guess the Price</h1>
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>
          <p className="text-baby-text text-sm mt-2">
            Item {currentItem + 1} of {products.length}
          </p>
        </div>

        {!submitted ? (
          <div className="card scale-in">
            {/* Product image */}
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: '220px',
                  height: '220px',
                  objectFit: 'cover',
                  borderRadius: '12px',
                  margin: '0 auto',
                  display: 'block',
                }}
              />
            </div>

            {/* Product info */}
            <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
              <h2 className="text-baby-blue mb-2" style={{ fontSize: '1.4rem' }}>
                {product.name}
              </h2>
              <p style={{ color: '#64748b', fontSize: '0.9rem' }}>{product.hint}</p>
              <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginTop: '0.5rem' }}>
                How much does this cost in South African Rands (R)?
              </p>
            </div>

            {/* Constrained form */}
            <form
              onSubmit={handleSubmitGuess}
              style={{ maxWidth: '360px', margin: '0 auto' }}
            >
              <div style={{ marginBottom: '1rem' }}>
                <label
                  style={{
                    display: 'block',
                    color: '#94a3b8',
                    fontWeight: 600,
                    marginBottom: '0.5rem',
                    fontSize: '0.9rem',
                  }}
                >
                  Your guess (R)
                </label>
                <input
                  type="number"
                  value={currentGuess}
                  onChange={(e) => setCurrentGuess(e.target.value)}
                  placeholder="e.g., 1500"
                  style={{ width: '100%', padding: '0.85rem 1rem', boxSizing: 'border-box' }}
                  autoFocus
                />
              </div>

              <button
                type="submit"
                className="btn-primary"
                disabled={!currentGuess.trim()}
                style={{ width: '100%' }}
              >
                Submit Guess
              </button>
            </form>
          </div>
        ) : (
          <div className="card scale-in text-center">
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✓</div>
            <p style={{ color: '#e2e8f0', fontWeight: 600, fontSize: '1.1rem' }}>
              Price submitted!
            </p>
            <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginTop: '0.5rem' }}>
              {currentItem < products.length - 1
                ? 'Moving to next item...'
                : 'All guesses recorded!'}
            </p>
          </div>
        )}

        {guesses.length === products.length && (
          <div style={{ marginTop: '2rem' }}>
            <button onClick={handleNext} className="btn-success" style={{ width: '100%', maxWidth: '360px', display: 'block', margin: '0 auto' }}>
              Continue to Game Selection →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
