'use client';

import React, { useEffect, useState } from 'react';
import { useGameStore } from '@/lib/game-store';
import { HeroCharacter } from './HeroCharacter';

const DICE_DOTS: Record<number, [number, number][]> = {
  1: [[50, 50]],
  2: [[25, 25], [75, 75]],
  3: [[25, 25], [50, 50], [75, 75]],
  4: [[25, 25], [75, 25], [25, 75], [75, 75]],
  5: [[25, 25], [75, 25], [50, 50], [25, 75], [75, 75]],
  6: [[25, 25], [75, 25], [25, 50], [75, 50], [25, 75], [75, 75]],
};

export function MathQuestionModal() {
  const { currentQuestion, submitAnswer, players, currentPlayerIndex, phase } = useGameStore();
  const [wrongAnswer, setWrongAnswer] = useState<number | null>(null);
  const [isRolling, setIsRolling] = useState(false);

  const currentPlayer = players[currentPlayerIndex];
  const isPenalty = currentQuestion?.operation === 'sub';

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
  const questionKey = `${currentQuestion.position}-${currentQuestion.diceResult}-${currentQuestion.correctAnswer}-${currentQuestion.operation}`;

  useEffect(() => {
    if (!isPenalty) {
      setIsRolling(false);
      return;
    }
    setIsRolling(true);
    const timer = setTimeout(() => setIsRolling(false), 700);
    return () => clearTimeout(timer);
  }, [questionKey, isPenalty]);

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
          <h2 className="math-modal-title">
            {isPenalty ? '¡MALA SUERTE! ¿CUÁNTO DEBES RETROCEDER?' : '¿A QUÉ CASILLA DEBES IR?'}
          </h2>
          {isPenalty && (
            <div className={`math-modal-dice ${isRolling ? 'math-dice-rolling' : ''}`}>
              <svg width="64" height="64" viewBox="0 0 100 100" className="dice-svg">
                <rect x="5" y="5" width="90" height="90" rx="16" fill="white" stroke="#FF6B35" strokeWidth="4" />
                <rect x="10" y="10" width="80" height="80" rx="12" fill="#f8f8f8" stroke="#eee" strokeWidth="1" />
                {!isRolling && currentQuestion.diceResult && DICE_DOTS[currentQuestion.diceResult]?.map(([cx, cy], i) => (
                  <circle key={i} cx={cx} cy={cy} r="7" fill="#FF6B35" className="dice-dot" />
                ))}
                {isRolling && (
                  <text x="50" y="62" textAnchor="middle" fontSize="38" fill="#FF6B35" fontWeight="bold">?</text>
                )}
              </svg>
            </div>
          )}
          <div className="math-modal-operation">
            <span className="math-part">{currentQuestion.position}</span>
            <span className="math-operator">{isPenalty ? '-' : '+'}</span>
            <span className="math-part dice-part">{currentQuestion.diceResult}</span>
            <span className="math-operator">=</span>
            <span className="math-part math-unknown">?</span>
          </div>
          <p className="math-modal-hint">
            {isPenalty
              ? `POSICIÓN: ${currentQuestion.position} - DADO: ${currentQuestion.diceResult}`
              : `POSICIÓN: ${currentQuestion.position} + DADO: ${currentQuestion.diceResult}`}
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
