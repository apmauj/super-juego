'use client';

import React from 'react';
import { useGameStore } from '@/lib/game-store';
import { WelcomeScreen } from '@/components/game/WelcomeScreen';
import { CharacterSelectScreen } from '@/components/game/CharacterSelectScreen';
import { GameBoard } from '@/components/game/GameBoard';
import { DiceComponent } from '@/components/game/DiceComponent';
import { GameHUD } from '@/components/game/GameHUD';
import { MathQuestionModal } from '@/components/game/MathQuestionModal';
import { RewardModal } from '@/components/game/RewardModal';
import { EndScreen } from '@/components/game/EndScreen';

export default function Home() {
  const { phase, soundEnabled, toggleSound, speechEnabled, toggleSpeech, resetGame, showConfetti } = useGameStore();

  // Setup screens
  if (phase === 'SETUP') {
    return (
      <div className="game-root">
        <WelcomeScreen />
      </div>
    );
  }

  if (phase === 'CHARACTER_SELECT') {
    return (
      <div className="game-root">
        <CharacterSelectScreen />
      </div>
    );
  }

  // End screen
  if (phase === 'FINISHED') {
    return (
      <div className="game-root">
        <EndScreen />
      </div>
    );
  }

  // Game screen (ROLLING_DICE, WAITING_ANSWER, MOVING, REWARD, NEXT_TURN)
  return (
    <div className="game-root">
      <div className="game-layout">
        {/* Header */}
        <header className="game-header">
          <h1 className="game-header-title">¡SÚPER HÉROES MATEMÁTICOS!</h1>
          <div className="game-header-controls">
            <button
              className="game-header-btn"
              onClick={toggleSound}
              title={soundEnabled ? 'APAGAR SONIDO' : 'ENCENDER SONIDO'}
            >
              {soundEnabled ? '🔊' : '🔇'}
            </button>
            <button
              className="game-header-btn"
              onClick={toggleSpeech}
              title={speechEnabled ? 'APAGAR VOZ' : 'ENCENDER VOZ'}
            >
              {speechEnabled ? '🗣️' : '🤐'}
            </button>
            <button
              className="game-header-btn"
              onClick={resetGame}
              title="VOLVER AL INICIO"
            >
              🏠
            </button>
          </div>
        </header>

        {/* Main content */}
        <main className="game-main">
          <div className="game-main-board">
            <GameBoard />
          </div>
          <div className="game-main-sidebar">
            <GameHUD />
            <DiceComponent />
          </div>
        </main>

        {/* Modals */}
        <MathQuestionModal />
        <RewardModal />
      </div>
    </div>
  );
}
