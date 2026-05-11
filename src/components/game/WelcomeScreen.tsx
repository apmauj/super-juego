'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useGameStore } from '@/lib/game-store';
import { HeroCharacter } from './HeroCharacter';

// Pre-defined star positions to avoid hydration mismatch with Math.random()
const STAR_POSITIONS = [
  { left: 12, top: 8, delay: 0.5, size: 18 },
  { left: 85, top: 15, delay: 1.2, size: 22 },
  { left: 23, top: 45, delay: 2.1, size: 14 },
  { left: 67, top: 72, delay: 0.8, size: 26 },
  { left: 45, top: 30, delay: 1.5, size: 16 },
  { left: 92, top: 55, delay: 2.5, size: 20 },
  { left: 8, top: 80, delay: 0.3, size: 24 },
  { left: 55, top: 90, delay: 1.8, size: 18 },
  { left: 78, top: 38, delay: 2.8, size: 12 },
  { left: 33, top: 62, delay: 0.7, size: 28 },
  { left: 15, top: 25, delay: 1.9, size: 16 },
  { left: 88, top: 88, delay: 2.3, size: 22 },
  { left: 42, top: 5, delay: 0.1, size: 20 },
  { left: 60, top: 50, delay: 1.4, size: 14 },
  { left: 5, top: 55, delay: 2.6, size: 24 },
  { left: 95, top: 25, delay: 0.9, size: 18 },
  { left: 30, top: 85, delay: 1.6, size: 20 },
  { left: 72, top: 12, delay: 2.0, size: 16 },
  { left: 50, top: 68, delay: 0.4, size: 26 },
  { left: 18, top: 95, delay: 1.1, size: 22 },
];

export function WelcomeScreen() {
  const { playerCount, setPlayerCount, setPhase, soundEnabled, toggleSound, speechEnabled, toggleSpeech } = useGameStore();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handlePlay = () => {
    setPhase('CHARACTER_SELECT');
  };

  return (
    <div className="welcome-screen">
      {/* Animated background stars - using deterministic positions */}
      <div className="stars-bg">
        {STAR_POSITIONS.map((star, i) => (
          <div
            key={i}
            className="floating-star"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              animationDelay: `${star.delay}s`,
              fontSize: `${star.size}px`,
            }}
          >
            ✦
          </div>
        ))}
      </div>

      <div className={`welcome-content ${showContent ? 'fade-in' : 'fade-out'}`}>
        {/* Title */}
        <div className="welcome-title-section">
          <h1 className="welcome-title">
            <span className="title-word" style={{ animationDelay: '0s' }}>¡SUPERHEROÍNAS</span>
            <span className="title-word" style={{ animationDelay: '0.2s' }}>Y</span>
            <span className="title-word" style={{ animationDelay: '0.3s' }}>SUPERHÉROES</span>
            <span className="title-word" style={{ animationDelay: '0.5s' }}>MATEMÁTICOS!</span>
          </h1>
          <p className="welcome-subtitle">¡AVANZA POR EL TABLERO RESOLVIENDO SUMAS!</p>
        </div>

        {/* Mini heroes display */}
        <div className="welcome-heroes">
          <div className="welcome-hero-float" style={{ animationDelay: '0s' }}>
            <HeroCharacter heroId="CAPITANA_ESTRELLA" size={70} animated />
          </div>
          <div className="welcome-hero-float" style={{ animationDelay: '0.3s' }}>
            <HeroCharacter heroId="RAYO_VELOZ" size={70} animated />
          </div>
          <div className="welcome-hero-float" style={{ animationDelay: '0.6s' }}>
            <HeroCharacter heroId="MEGA_BOT" size={70} animated />
          </div>
          <div className="welcome-hero-float" style={{ animationDelay: '0.9s' }}>
            <HeroCharacter heroId="ECO_VERDE" size={70} animated />
          </div>
          <div className="welcome-hero-float" style={{ animationDelay: '1.2s' }}>
            <HeroCharacter heroId="FLAMA_IGNEA" size={70} animated />
          </div>
          <div className="welcome-hero-float" style={{ animationDelay: '1.5s' }}>
            <HeroCharacter heroId="CRISTAL_POLAR" size={70} animated />
          </div>
          <div className="welcome-hero-float" style={{ animationDelay: '1.8s' }}>
            <HeroCharacter heroId="VELOCIBOT" size={70} animated />
          </div>
          <div className="welcome-hero-float" style={{ animationDelay: '2.1s' }}>
            <HeroCharacter heroId="AQUA_TORRENTE" size={70} animated />
          </div>
        </div>

        {/* Player count selector */}
        <div className="welcome-section">
          <h2 className="welcome-label">¿CUÁNTOS JUGADORES?</h2>
          <div className="player-count-buttons">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((count) => (
              <button
                key={count}
                className={`player-count-btn ${playerCount === count ? 'active' : ''}`}
                onClick={() => setPlayerCount(count)}
                aria-label={`${count} JUGADORES`}
              >
                <span className="player-count-number">{count}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Play button */}
        <button className="play-button" onClick={handlePlay}>
          <span className="play-button-text">¡JUGAR!</span>
          <span className="play-button-emoji">🚀</span>
        </button>

        {/* Settings */}
        <div className="welcome-settings">
          <button
            className={`setting-btn ${soundEnabled ? 'active' : ''}`}
            onClick={toggleSound}
            aria-label="SONIDO"
          >
            {soundEnabled ? '🔊' : '🔇'} SONIDO
          </button>
          <button
            className={`setting-btn ${speechEnabled ? 'active' : ''}`}
            onClick={toggleSpeech}
            aria-label="VOZ"
          >
            {speechEnabled ? '🗣️' : '🤐'} VOZ
          </button>
        </div>
      </div>
    </div>
  );
}
