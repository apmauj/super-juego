'use client';

import React from 'react';
import { useGameStore } from '@/lib/game-store';
import { HeroCharacter } from './HeroCharacter';

export function GameHUD() {
  const { players, currentPlayerIndex, phase, messages } = useGameStore();
  const currentPlayer = players[currentPlayerIndex];

  if (!currentPlayer) return null;

  return (
    <div className="game-hud">
      {/* Current player info */}
      <div className="hud-player-info" style={{ borderColor: currentPlayer.hero.color }}>
        <div className="hud-player-avatar">
          <HeroCharacter heroId={currentPlayer.hero.id} size={50} />
        </div>
        <div className="hud-player-details">
          <p className="hud-player-name" style={{ color: currentPlayer.hero.color }}>
            {currentPlayer.name}
          </p>
          <p className="hud-player-position">
            CASILLA: {currentPlayer.position}
          </p>
        </div>
      </div>

      {/* Score and stats */}
      <div className="hud-stats">
        <div className="hud-stat">
          <span className="hud-stat-icon">⭐</span>
          <span className="hud-stat-value">{currentPlayer.score}</span>
        </div>
        <div className="hud-stat">
          <span className="hud-stat-icon">✓</span>
          <span className="hud-stat-value">{currentPlayer.correctAnswers}/{currentPlayer.totalAttempts}</span>
        </div>
        <div className="hud-stat">
          <span className="hud-stat-icon">🎲</span>
          <span className="hud-stat-value">{currentPlayer.diceRolls}</span>
        </div>
      </div>

      {/* Inventory */}
      {currentPlayer.inventory.length > 0 && (
        <div className="hud-inventory">
          <p className="hud-inventory-label">OBJETOS:</p>
          <div className="hud-inventory-items">
            {currentPlayer.inventory.map((item, idx) => (
              <span key={idx} className="hud-inventory-item" title={item.name}>
                {item.emoji}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* All players mini status */}
      <div className="hud-all-players">
        {players.map((p, idx) => (
          <div
            key={p.id}
            className={`hud-player-chip ${idx === currentPlayerIndex ? 'hud-player-chip-active' : ''}`}
            style={{ borderColor: p.hero.color }}
          >
            <span>{p.hero.emoji}</span>
            <span className="hud-chip-pos">{p.position}</span>
          </div>
        ))}
      </div>

      {/* Message log */}
      {messages.length > 0 && (
        <div className="hud-messages">
          {messages.slice(0, 2).map((msg, idx) => (
            <div key={msg.timestamp + idx} className={`hud-message hud-message-${msg.type}`}>
              {msg.text}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
