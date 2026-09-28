import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { submitPlayerScore } from '../firebase';

const photos = [
  { id: 1, image: 'https://res.cloudinary.com/dngnuara5/image/upload/v1790597619/baby-boy-1_ep4w6i.jpg', description: 'Baby boy 1' },
  { id: 2, image: 'https://res.cloudinary.com/dngnuara5/image/upload/v1790597619/baby-boy-2_are8wu.webp', description: 'Baby boy 2' },
  { id: 3, image: 'https://res.cloudinary.com/dngnuara5/image/upload/v1790597619/baby-boy-3_jlydys.webp', description: 'Baby boy 3' },
  { id: 4, image: 'https://res.cloudinary.com/dngnuara5/image/upload/v1790597619/baby-boy-4_fbhs2z.jpg', description: 'Baby boy 4' },
  { id: 5, image: 'https://res.cloudinary.com/dngnuara5/image/upload/v1790597618/baby-boy-5_y8aore.webp', description: 'Baby boy 5' },
  { id: 6, image: 'https://res.cloudinary.com/dngnuara5/image/upload/v1790597620/baby-boy-6_gltnfy.jpg', description: 'Baby boy 6 (The manager)' },
];

export default function Game2Photo({ playerName, setPlayerScores }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSelectPhoto = (photoId) => {
    setSelectedPhoto(photoId);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedPhoto) {
      setSubmitted(true);

      setPlayerScores((prev) => ({
        ...prev,
        game2PhotoId: selectedPhoto,
      }));

      await submitPlayerScore({
        name: playerName,
        game2PhotoId: selectedPhoto,
      });

      setTimeout(() => {
        navigate('/games');
      }, 1500);
    }
  };

  if (submitted) {
    return (
      <div className="page-bg" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem 1rem' }}>
        <div className="card scale-in text-center" style={{ maxWidth: '360px' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✓</div>
          <p style={{ color: '#e2e8f0', fontWeight: 600, fontSize: '1.1rem' }}>
            Answer submitted!
          </p>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginTop: '0.5rem' }}>
            Redirecting to game selection...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="page-bg" style={{ minHeight: '100vh', padding: '2rem 1rem' }}>
      <div style={{ maxWidth: '640px', margin: '0 auto' }}>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-baby-blue mb-4">Guess the Baby</h1>
          <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
            Which photo is our manager, Christiaan, as a baby?
          </p>
        </div>

        {/* Photo grid - 2 columns, 3 rows */}
        <form onSubmit={handleSubmit}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1rem',
            marginBottom: '2rem',
          }}>
            {photos.map((photo) => (
              <button
                key={photo.id}
                type="button"
                onClick={() => handleSelectPhoto(photo.id)}
                style={{
                  padding: 0,
                  border: selectedPhoto === photo.id ? '3px solid #3b82f6' : '2px solid rgba(255,255,255,0.1)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  background: 'transparent',
                  transition: 'all 0.2s ease',
                  opacity: selectedPhoto === null || selectedPhoto === photo.id ? 1 : 0.5,
                  transform: selectedPhoto === photo.id ? 'scale(1.02)' : 'scale(1)',
                  aspectRatio: '4/5',
                  minHeight: '200px',
                }}
                onMouseEnter={(e) => {
                  if (selectedPhoto === null || selectedPhoto === photo.id) {
                    e.currentTarget.style.opacity = '1';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(59,130,246,0.3)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedPhoto === null) {
                    e.currentTarget.style.opacity = '1';
                    e.currentTarget.style.boxShadow = 'none';
                  } else if (selectedPhoto !== photo.id) {
                    e.currentTarget.style.opacity = '0.5';
                  }
                }}
              >
                <img
                  src={photo.image}
                  alt={photo.description}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '12px',
                    display: 'block',
                  }}
                />
              </button>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <p style={{ color: selectedPhoto ? '#e2e8f0' : '#64748b', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
              {selectedPhoto ? `Selected photo #${selectedPhoto}` : 'Click a photo to select'}
            </p>
          </div>

          <button
            type="submit"
            disabled={!selectedPhoto}
            className="btn-primary"
            style={{ width: '100%', maxWidth: '360px', display: 'block', margin: '0 auto' }}
          >
            Submit Answer
          </button>
        </form>
      </div>
    </div>
  );
}
