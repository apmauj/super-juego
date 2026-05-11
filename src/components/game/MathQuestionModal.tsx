'use client';

import React, { useState } from 'react';
import { useGameStore } from '@/lib/game-store';
import { HeroCharacter } from './HeroCharacter';

export function MathQuestionModal() {
  const { currentQuestion, submitAnswer, players, currentPlayerIndex, phase } = useGameStore();
  const [wrongAnswer, setWrongAnswer] = useState<number | null>(null);

  const currentPlayer = players[currentPlayerIndex];

  if (!currentQuestion || phase !== 'WAITING_ANSWER') return null;

  const handleAnswer = (answer: number) => {
    if (answer === currentQuestion.correctAnswer) {
      setWrongAnswer(null);
      submitAnswer(answer);
    } else {
      setWrongAnswer(answer);
    }
  };

  // Use question identity as key to reset state when question changes
  const questionKey = `${currentQuestion.position}-${currentQuestion.diceResult}-${currentQuestion.correctAnswer}`;

  return (
    <div className="math-modal-overlay" key={questionKey}>
      <div className={`math-modal ${wrongAnswer !== null ? 'math-modal-shake' : ''}`}>
        {/* Hero display */}
        <div className="math-modal-hero">
          <HeroCharacter heroId={currentPlayer.hero.id} size={80} animated />
          <p className="math-modal-player" style={{ color: currentPlayer.hero.color }}>
            {currentPlayer.name}
          </p>
        </div>

        {/* Question */}
        <div className="math-modal-question">
          <h2 className="math-modal-title">¿A QUÉ CASILLA DEBES IR?</h2>
          <div className="math-modal-operation">
            <span className="math-part">{currentQuestion.position}</span>
            <span className="math-operator">+</span>
            <span className="math-part dice-part">{currentQuestion.diceResult}</span>
            <span className="math-operator">=</span>
            <span className="math-part math-unknown">?</span>
          </div>
          <p className="math-modal-hint">
            POSICIÓN: {currentQuestion.position} + DADO: {currentQuestion.diceResult}
          </p>
        </div>

        {/* Answer options */}
        <div className="math-modal-options">
          {currentQuestion.options.map((option, idx) => (
            <button
              key={`${option}-${idx}`}
              className={`math-option-btn ${wrongAnswer === option ? 'wrong-answer' : ''}`}
              onClick={() => handleAnswer(option)}
              style={{
                borderColor:
                  wrongAnswer === option
                    ? '#FF4444'
                    : currentPlayer.hero.color,
                animationDelay: `${idx * 0.1}s`,
              }}
            >
              {option}
            </button>
          ))}
        </div>

        {/* Encouragement on wrong answer */}
        {wrongAnswer !== null && (
          <div className="math-encouragement">
            <p>¡CASI! ¡INTENTA OTRA VEZ! 💪</p>
          </div>
        )}
      </div>
    </div>
  );
}
