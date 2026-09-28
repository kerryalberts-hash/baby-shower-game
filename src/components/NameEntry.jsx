import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NameEntry({ setPlayerName }) {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      setPlayerName(name.trim());
      navigate('/games');
    }
  };

  return (
    <div className="page-bg flex items-center justify-center px-4 py-6" style={{ minHeight: '100vh' }}>
      <div className="blob-blue" />
      <div className="blob-purple" />

      <div className="glass-card scale-in" style={{ maxWidth: '440px', width: '100%', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>👶</div>
          <h1 className="title-glow" style={{ marginBottom: '0.5rem' }}>
            Christiaan's Baby Boy Shower Games
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1rem', marginTop: '0.75rem' }}>
            Welcome, friend! Enter your name to play.
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div>
            <label htmlFor="name" style={{ display: 'block', color: '#94a3b8', fontWeight: 600, marginBottom: '0.5rem', fontSize: '0.9rem' }}>
              Your name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              style={{ width: '100%', padding: '0.85rem 1rem' }}
              autoFocus
            />
          </div>

          <button
            type="submit"
            disabled={!name.trim()}
            className="btn-primary"
            style={{ width: '100%' }}
          >
            Start Playing →
          </button>
        </form>

        <p style={{ textAlign: 'center', color: '#475569', fontSize: '0.8rem', marginTop: '1.5rem' }}>
          Get ready to test your baby knowledge!
        </p>
      </div>
    </div>
  );
}
