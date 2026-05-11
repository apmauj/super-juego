'use client';

import React, { useEffect, useState } from 'react';
import { useGameStore } from '@/lib/game-store';
import { HeroCharacter } from './HeroCharacter';

export function EndScreen() {
  const { players, resetGame, showConfetti } = useGameStore();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowContent(true), 300);
  }, []);

  // Sort players: finished first (by finish order), then by score
  const rankedPlayers = [...players].sort((a, b) => {
    if (a.hasFinished && !b.hasFinished) return -1;
    if (!a.hasFinished && b.hasFinished) return 1;
    if (a.hasFinished && b.hasFinished) return a.finishOrder - b.finishOrder;
    return b.score - a.score;
  });

  const medals = ['🥇', '🥈', '🥉', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣'];

  return (
    <div className="end-screen">
      {/* Confetti */}
      {showConfetti && (
        <div className="confetti-container">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="confetti-piece"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
                backgroundColor: ['#FF69B4', '#FFD700', '#4A90D9', '#4CAF50', '#FF6B35', '#9C27B0', '#FF4444'][
                  Math.floor(Math.random() * 7)
                ],
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            />
          ))}
        </div>
      )}

      <div className={`end-content ${showContent ? 'fade-in' : 'fade-out'}`}>
        <h1 className="end-title">¡FIN DE LA PARTIDA!</h1>

        {/* Rankings */}
        <div className="end-rankings">
          {rankedPlayers.map((player, idx) => (
            <div
              key={player.id}
              className="end-rank-card"
              style={{
                borderColor: player.hero.color,
                animationDelay: `${idx * 0.2}s`,
              }}
            >
              <div className="end-rank-medal">{medals[idx]}</div>
              <div className="end-rank-hero">
                <HeroCharacter heroId={player.hero.id} size={80} animated />
              </div>
              <div className="end-rank-info">
                <p className="end-rank-name" style={{ color: player.hero.color }}>
                  {player.name}
                </p>
                <p className="end-rank-pos">
                  {player.hasFinished ? `${player.finishOrder}° EN LLEGAR` : `CASILLA ${player.position}`}
                </p>
              </div>
              <div className="end-rank-stats">
                <div className="end-stat-row">
                  <span>⭐ PUNTOS:</span>
                  <span className="end-stat-val">{player.score}</span>
                </div>
                <div className="end-stat-row">
                  <span>✓ CORRECTAS:</span>
                  <span className="end-stat-val">{player.correctAnswers}</span>
                </div>
                <div className="end-stat-row">
                  <span>✗ ERRORES:</span>
                  <span className="end-stat-val">{player.totalAttempts - player.correctAnswers}</span>
                </div>
                <div className="end-stat-row">
                  <span>📊 PRECISIÓN:</span>
                  <span className="end-stat-val">
                    {player.totalAttempts > 0
                      ? Math.round((player.correctAnswers / player.totalAttempts) * 100)
                      : 0}
                    %
                  </span>
                </div>
                <div className="end-stat-row">
                  <span>🎲 TIRADAS:</span>
                  <span className="end-stat-val">{player.diceRolls}</span>
                </div>
                {player.inventory.length > 0 && (
                  <div className="end-stat-row">
                    <span>🎒 OBJETOS:</span>
                    <span className="end-stat-val">
                      {player.inventory.map((item) => item.emoji).join(' ')}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Play again button */}
        <button className="end-play-again" onClick={resetGame}>
          ¡JUGAR DE NUEVO! 🔄
        </button>
      </div>
    </div>
  );
}
