import { useNavigate } from 'react-router-dom';
import {
  CurrencyDollarIcon,
  PhotoIcon,
  FaceSmileIcon,
  TagIcon,
} from '@heroicons/react/24/solid';

const games = [
  {
    id: 1,
    title: 'Guess the Price',
    description: 'Estimate baby item costs',
    icon: CurrencyDollarIcon,
    accentBg: 'linear-gradient(135deg, #93c5fd, #bfdbfe)',
    iconColor: '#2563eb',
    glowColor: 'rgba(59,130,246,0.35)',
    borderHover: '#3b82f6',
    path: '/game1',
  },
  {
    id: 2,
    title: 'Guess the Baby',
    description: 'Identify the manager',
    icon: PhotoIcon,
    accentBg: 'linear-gradient(135deg, #f9a8d4, #fbcfe8)',
    iconColor: '#db2777',
    glowColor: 'rgba(236,72,153,0.35)',
    borderHover: '#ec4899',
    path: '/game2',
  },
  {
    id: 3,
    title: 'Caption This',
    description: 'Write funny captions',
    icon: FaceSmileIcon,
    accentBg: 'linear-gradient(135deg, #fcd34d, #fde68a)',
    iconColor: '#d97706',
    glowColor: 'rgba(245,158,11,0.35)',
    borderHover: '#f59e0b',
    path: '/game3',
  },
  {
    id: 4,
    title: 'Match the Logos',
    description: 'Connect brands to slogans',
    icon: TagIcon,
    accentBg: 'linear-gradient(135deg, #6ee7b7, #a7f3d0)',
    iconColor: '#059669',
    glowColor: 'rgba(16,185,129,0.35)',
    borderHover: '#10b981',
    path: '/game4',
  },
];

export default function GameSelection({ playerName }) {
  const navigate = useNavigate();

  return (
    <div className="page-bg" style={{ position: 'relative' }}>
      <div className="blob-blue" />
      <div className="blob-purple" />

      <div style={{ maxWidth: '860px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* ── Header ── */}
        <div style={{ textAlign: 'center', marginBottom: '3rem', paddingTop: '1rem' }}>
          <h1 className="title-glow" style={{ marginBottom: '1rem' }}>
            Christiaan's Baby Boy Shower Games
          </h1>

          <p style={{ color: '#94a3b8', fontSize: '1rem', marginBottom: '1rem' }}>
            Welcome, <strong style={{ color: '#e2e8f0' }}>{playerName}</strong>!
          </p>

          {/* Online badge */}
          <span className="online-badge">
            <span className="pulse-dot" />
            Answers hidden until the end!
          </span>
        </div>

        {/* ── 2 × 2 Game Tile Grid ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1.5rem',
          marginBottom: '2.5rem',
        }}>
          {games.map((game) => {
            const Icon = game.icon;
            return (
              <button
                key={game.id}
                onClick={() => navigate(game.path)}
                style={{
                  background: 'rgba(15, 23, 42, 0.7)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '24px',
                  padding: '2.5rem 2rem',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
                  transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out, border-color 0.3s ease-out',
                  minHeight: '220px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-6px) scale(1.02)';
                  e.currentTarget.style.boxShadow = `0 20px 48px rgba(0,0,0,0.55), 0 0 40px ${game.glowColor}`;
                  e.currentTarget.style.borderColor = game.borderHover + '60';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.5)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                }}
              >
                {/* Coloured icon circle */}
                <div style={{
                  width: '72px',
                  height: '72px',
                  borderRadius: '50%',
                  background: game.accentBg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.1rem',
                  boxShadow: `0 4px 20px ${game.glowColor}`,
                }}>
                  <Icon style={{ width: '36px', height: '36px', color: game.iconColor }} />
                </div>

                {/* Title */}
                <h2 style={{
                  fontFamily: "'Fredoka', sans-serif",
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: '#f1f5f9',
                  marginBottom: '0.4rem',
                }}>
                  {game.title}
                </h2>

                {/* Description */}
                <p style={{ color: '#94a3b8', fontSize: '0.9rem', margin: 0, lineHeight: 1.4 }}>
                  {game.description}
                </p>

                {/* Play prompt */}
                <div style={{
                  marginTop: '1.25rem',
                  padding: '0.45rem 1.2rem',
                  borderRadius: '9999px',
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.14)',
                  color: '#e2e8f0',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                }}>
                  Play Game →
                </div>
              </button>
            );
          })}
        </div>

        {/* ── Tip ── */}
        <div style={{
          background: 'rgba(15, 23, 42, 0.5)',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: '16px',
          padding: '1.1rem 1.5rem',
          textAlign: 'center',
          maxWidth: '600px',
          margin: '0 auto',
          backdropFilter: 'blur(8px)',
        }}>
          <p style={{ color: '#64748b', fontSize: '0.875rem', margin: 0 }}>
            💡 <strong style={{ color: '#94a3b8' }}>Pro tip:</strong> Don't worry about getting things right—this is just for fun!
          </p>
        </div>
      </div>
    </div>
  );
}
