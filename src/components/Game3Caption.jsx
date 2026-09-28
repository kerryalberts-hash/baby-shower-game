import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { submitPlayerScore } from '../firebase';

const photos = [
  { id: 1, image: 'https://res.cloudinary.com/dngnuara5/image/upload/v1790597378/Messy_eating_moment_woipnl.jpg', description: 'Messy eating moment' },
  { id: 2, image: 'https://res.cloudinary.com/dngnuara5/image/upload/v1790597378/Baby_nap_time_flet6j.jpg', description: 'Baby nap time' },
];

export default function Game3Caption({ playerName, setPlayerScores }) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [captions, setCaptions] = useState(['', '']);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const currentPhoto = photos[currentPhotoIndex];
  const currentCaption = captions[currentPhotoIndex];

  const handleCaptionChange = (e) => {
    const newCaptions = [...captions];
    newCaptions[currentPhotoIndex] = e.target.value;
    setCaptions(newCaptions);
  };

  const handleNext = () => {
    if (currentPhotoIndex < photos.length - 1) {
      setCurrentPhotoIndex(currentPhotoIndex + 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (captions.every((c) => c.trim())) {
      setSubmitted(true);

      setPlayerScores((prev) => ({
        ...prev,
        game3Captions: captions,
      }));

      await submitPlayerScore({
        name: playerName,
        game3Captions: captions,
      });

      setTimeout(() => {
        navigate('/games');
      }, 1500);
    }
  };

  if (submitted) {
    return (
      <div className="page-bg" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem 1rem" }}>
        <div className="card scale-in text-center max-w-md">
          <div className="text-4xl mb-4">✓</div>
          <p className="text-baby-text font-semibold text-lg">Captions submitted!</p>
          <p className="text-baby-text text-sm mt-2 opacity-75">
            Redirecting to game selection...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="page-bg" style={{ minHeight: '100vh', padding: '2rem 1rem' }}>
      <div style={{ maxWidth: '640px', margin: '0 auto' }}>
        <div className="mb-8">
          <h1 className="text-baby-blue mb-4">Caption This</h1>
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${((currentPhotoIndex + 1) / photos.length) * 100}%` }} />
          </div>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginTop: '0.5rem' }}>
            Photo {currentPhotoIndex + 1} of {photos.length}
          </p>
        </div>

        <div className="card scale-in">
          <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
            <img
              src={currentPhoto.image}
              alt={currentPhoto.description}
              style={{
                width: '100%',
                maxWidth: '280px',
                height: '200px',
                objectFit: 'cover',
                borderRadius: '12px',
                margin: '0 auto 1rem',
                display: 'block',
              }}
            />
            <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>{currentPhoto.description}</p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (currentPhotoIndex < photos.length - 1) {
                handleNext();
              } else {
                handleSubmit(e);
              }
            }}
            style={{ maxWidth: '360px', margin: '0 auto' }}
          >
            <div style={{ marginBottom: '1rem' }}>
              <label style={{
                display: 'block',
                color: '#94a3b8',
                fontWeight: 600,
                marginBottom: '0.5rem',
                fontSize: '0.9rem',
              }}>
                Write a funny caption
              </label>
              <textarea
                value={currentCaption}
                onChange={handleCaptionChange}
                placeholder="Be funny! Make us laugh..."
                rows="4"
                style={{ width: '100%', padding: '0.85rem 1rem', boxSizing: 'border-box' }}
                autoFocus
              />
            </div>

            <button
              type="submit"
              disabled={!currentCaption.trim()}
              className="btn-primary"
              style={{ width: '100%' }}
            >
              {currentPhotoIndex < photos.length - 1 ? 'Next Photo →' : 'Submit Captions'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
