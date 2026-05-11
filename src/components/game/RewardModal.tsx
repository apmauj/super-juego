'use client';

import React, { useState, useEffect } from 'react';
import { useGameStore } from '@/lib/game-store';

export function RewardModal() {
  const { lastReward, dismissReward, players, currentPlayerIndex } = useGameStore();
  const [animatePoints, setAnimatePoints] = useState(false);

  const currentPlayer = players[currentPlayerIndex];

  useEffect(() => {
    if (lastReward) {
      setTimeout(() => setAnimatePoints(true), 200);
    } else {
      setAnimatePoints(false);
    }
  }, [lastReward]);

  if (!lastReward) return null;

  return (
    <div className="reward-overlay">
      <div className="reward-modal">
        {/* Sparkle effects */}
        <div className="reward-sparkles">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="reward-sparkle"
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
                animationDelay: `${Math.random() * 1}s`,
                fontSize: `${16 + Math.random() * 16}px`,
              }}
            >
              ✨
            </div>
          ))}
        </div>

        {/* Reward type icon */}
        <div className="reward-icon">
          {lastReward.type === 'x5' && '⭐'}
          {lastReward.type === 'x10' && '🏆'}
          {lastReward.type === 'bonus' && lastReward.item?.emoji}
          {lastReward.type === 'finish' && '🏁'}
        </div>

        {/* Message */}
        <h2 className="reward-message">{lastReward.message}</h2>

        {/* Points animation */}
        {lastReward.points > 0 && (
          <div className={`reward-points ${animatePoints ? 'reward-points-animate' : ''}`}>
            +{lastReward.points} PUNTOS
          </div>
        )}

        {/* Item display */}
        {lastReward.item && (
          <div className="reward-item">
            <span className="reward-item-emoji">{lastReward.item.emoji}</span>
            <span className="reward-item-name">{lastReward.item.name}</span>
          </div>
        )}

        {/* Player indicator */}
        {currentPlayer && (
          <p className="reward-player" style={{ color: currentPlayer.hero.color }}>
            {currentPlayer.name}
          </p>
        )}

        {/* Continue button */}
        <button
          className="reward-continue-btn"
          onClick={dismissReward}
          style={{ backgroundColor: currentPlayer?.hero.color || '#FF6B35' }}
        >
          ¡CONTINUAR! →
        </button>
      </div>
    </div>
  );
}
