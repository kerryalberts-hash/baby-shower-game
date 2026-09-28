import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { submitPlayerScore } from '../firebase';

const brands = [
  { id: 1, name: 'Pampers', logo: 'https://res.cloudinary.com/dngnuara5/image/upload/v1790597377/Pampers_logo_glynee.png', slogan: 'Swaddlers' },
  { id: 2, name: 'Huggies', logo: 'https://res.cloudinary.com/dngnuara5/image/upload/v1790597377/Huggies_logo_d2ftkn.webp', slogan: 'Little Snugglers' },
  { id: 3, name: "Johnson's Baby", logo: 'https://res.cloudinary.com/dngnuara5/image/upload/v1790597378/Johnsons-Baby-logo_sw1qcj.png', slogan: 'Gentle & Caring' },
  { id: 4, name: 'Sudocrem', logo: 'https://res.cloudinary.com/dngnuara5/image/upload/v1790597376/Sudocrem_logo_qlahea.jpg', slogan: 'Healing Nappy Rash' },
  { id: 5, name: 'NAN', logo: 'https://res.cloudinary.com/dngnuara5/image/upload/v1790597379/Nan_logo_fnbjlz.jpg', slogan: 'Pro Follow-up' },
  { id: 6, name: 'Nido', logo: 'https://res.cloudinary.com/dngnuara5/image/upload/v1790597377/Nido_logo_xasxmj.jpg', slogan: 'Growing Strong' },
  { id: 7, name: 'Bepanthen', logo: 'https://res.cloudinary.com/dngnuara5/image/upload/v1790597376/Bepanthen_logo_lhb3fn.avif', slogan: 'Care & Comfort' },
];

const slogans = [
  'Swaddlers',
  'Little Snugglers',
  'Gentle & Caring',
  'Healing Nappy Rash',
  'Pro Follow-up',
  'Growing Strong',
  'Care & Comfort',
];

function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function Game4Logo({ playerName, setPlayerScores }) {
  const [matches, setMatches] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [shuffledSlogans] = useState(shuffleArray(slogans));
  const navigate = useNavigate();

  const handleSelectSlogan = (brandId, slogan) => {
    setMatches((prev) => ({
      ...prev,
      [brandId]: slogan,
    }));
  };

  const allMatched = brands.every((brand) => matches[brand.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (allMatched) {
      setSubmitted(true);

      const matchArray = brands.map((brand) => ({
        brandId: brand.id,
        brandName: brand.name,
        selectedSlogan: matches[brand.id],
      }));

      setPlayerScores((prev) => ({
        ...prev,
        game4Matches: matchArray,
      }));

      await submitPlayerScore({
        name: playerName,
        game4Matches: matchArray,
      });

      setTimeout(() => {
        navigate('/leaderboard');
      }, 1500);
    }
  };

  if (submitted) {
    return (
      <div className="page-bg" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem 1rem" }}>
        <div className="card scale-in text-center" style={{ maxWidth: '360px' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✓</div>
          <p style={{ color: '#e2e8f0', fontWeight: 600, fontSize: '1.1rem' }}>All games complete!</p>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginTop: '0.5rem' }}>
            Showing your leaderboard...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="page-bg" style={{ minHeight: '100vh', padding: '2rem 1rem' }}>
      <div style={{ maxWidth: '640px', margin: '0 auto' }}>
        <div className="mb-8">
          <h1 className="text-baby-blue mb-4">Match the Logos</h1>
          <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
            Select the correct slogan for each baby brand
          </p>
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${(Object.keys(matches).length / brands.length) * 100}%` }} />
          </div>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
          {brands.map((brand) => (
            <div key={brand.id} className="card scale-in">
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                <img
                  src={brand.logo}
                  alt={brand.name}
                  style={{
                    width: '80px',
                    height: '80px',
                    objectFit: 'contain',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    padding: '8px',
                    borderRadius: '12px',
                    flexShrink: 0,
                  }}
                />
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', color: '#e2e8f0', fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.5rem' }}>
                    Match slogan for {brand.name}
                  </label>
                  <select
                    value={matches[brand.id] || ''}
                    onChange={(e) => handleSelectSlogan(brand.id, e.target.value)}
                    style={{ width: '100%', padding: '0.75rem 1rem', boxSizing: 'border-box' }}
                  >
                    <option value="">Select a slogan...</option>
                    {shuffledSlogans.map((slogan) => (
                      <option key={slogan} value={slogan}>
                        {slogan}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          ))}

          <button
            type="submit"
            disabled={!allMatched}
            className="btn-primary"
            style={{ width: '100%', maxWidth: '360px', display: 'block', margin: '1.5rem auto 0' }}
          >
            Submit Matches
          </button>
        </form>
      </div>
    </div>
  );
}
