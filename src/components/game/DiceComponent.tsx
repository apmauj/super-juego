'use client';

import React from 'react';
import { useGameStore } from '@/lib/game-store';

// Dice face dots pattern
const DICE_DOTS: Record<number, [number, number][]> = {
  1: [[50, 50]],
  2: [[25, 25], [75, 75]],
  3: [[25, 25], [50, 50], [75, 75]],
  4: [[25, 25], [75, 25], [25, 75], [75, 75]],
  5: [[25, 25], [75, 25], [50, 50], [25, 75], [75, 75]],
  6: [[25, 25], [75, 25], [25, 50], [75, 50], [25, 75], [75, 75]],
};

export function DiceComponent() {
  const { diceValue, isDiceRolling, phase, rollDice, players, currentPlayerIndex } = useGameStore();
  const currentPlayer = players[currentPlayerIndex];
  const canRoll = phase === 'ROLLING_DICE' && !isDiceRolling;

  return (
    <div className="dice-section">
      {/* Current player indicator */}
      {currentPlayer && (
        <div className="dice-player-name" style={{ color: currentPlayer.hero.color }}>
          TURNO DE: {currentPlayer.name} {currentPlayer.hero.emoji}
        </div>
      )}

      {/* Dice display */}
      <div className={`dice-container ${isDiceRolling ? 'dice-rolling' : ''} ${canRoll ? 'dice-ready' : ''}`}>
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          className="dice-svg"
        >
          {/* Dice body */}
          <rect
            x="5"
            y="5"
            width="90"
            height="90"
            rx="16"
            fill="white"
            stroke={currentPlayer?.hero.color || '#FF6B35'}
            strokeWidth="4"
          />

          {/* Inner shadow */}
          <rect
            x="10"
            y="10"
            width="80"
            height="80"
            rx="12"
            fill="#f8f8f8"
            stroke="#eee"
            strokeWidth="1"
          />

          {/* Dots */}
          {diceValue && DICE_DOTS[diceValue]?.map(([cx, cy], i) => (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r="8"
              fill={currentPlayer?.hero.color || '#333'}
              className="dice-dot"
              style={{ animationDelay: `${i * 0.05}s` }}
            />
          ))}

          {/* Question mark when no value */}
          {!diceValue && (
            <text
              x="50"
              y="62"
              textAnchor="middle"
              fontSize="40"
              fill={currentPlayer?.hero.color || '#999'}
              fontWeight="bold"
            >
              ?
            </text>
          )}
        </svg>
      </div>

      {/* Roll button */}
      <button
        className={`roll-button ${canRoll ? 'roll-button-ready' : ''}`}
        onClick={rollDice}
        disabled={!canRoll}
        style={{
          backgroundColor: canRoll ? currentPlayer?.hero.color : '#ccc',
        }}
      >
        {isDiceRolling ? '🎲 RODANDO...' : '🎲 ¡TIRAR DADO!'}
      </button>

      {/* Dice value display */}
      {diceValue && !isDiceRolling && phase === 'WAITING_ANSWER' && (
        <div className="dice-result" style={{ color: currentPlayer?.hero.color }}>
          ¡SACASTE {diceValue}!
        </div>
      )}
    </div>
  );
}
