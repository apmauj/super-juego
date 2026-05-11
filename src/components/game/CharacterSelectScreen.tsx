'use client';

import React, { useState, useMemo } from 'react';
import { useGameStore } from '@/lib/game-store';
import { HEROES } from '@/lib/game-constants';
import { HeroId } from '@/lib/game-types';
import { HeroCharacter } from './HeroCharacter';

export function CharacterSelectScreen() {
  const { playerCount, players, addPlayer, startGame } = useGameStore();
  const [currentPlayerSetup, setCurrentPlayerSetup] = useState(players.length);
  const [selectedHero, setSelectedHero] = useState<HeroId | null>(null);
  const [playerName, setPlayerName] = useState('');
  const [showNameInput, setShowNameInput] = useState(false);

  const usedHeroes = useMemo(
    () => players.map((p) => p.hero.id),
    [players]
  );

  const isAllPlayersSet = players.length >= playerCount;

  const handleSelectHero = (heroId: HeroId) => {
    if (usedHeroes.includes(heroId)) return;
    setSelectedHero(heroId);
    setShowNameInput(true);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase();
    setPlayerName(value);
  };

  const handleConfirmPlayer = () => {
    if (!selectedHero || !playerName.trim()) return;
    addPlayer(playerName.trim(), selectedHero);
    setSelectedHero(null);
    setPlayerName('');
    setShowNameInput(false);
    setCurrentPlayerSetup((prev) => prev + 1);
  };

  const handleStartGame = () => {
    startGame();
  };

  return (
    <div className="char-select-screen">
      <div className="char-select-content">
        {/* Header */}
        <h1 className="char-select-title">¡ELIGE TU HÉROE!</h1>

        {/* Progress indicator */}
        <div className="player-progress">
          <div className="player-progress-bar">
            {Array.from({ length: playerCount }, (_, i) => (
              <div
                key={i}
                className={`player-progress-dot ${i < players.length ? 'completed' : i === players.length ? 'current' : ''}`}
              >
                {i < players.length ? '✓' : i + 1}
              </div>
            ))}
          </div>
          <p className="player-progress-text">
            JUGADOR {Math.min(players.length + 1, playerCount)} DE {playerCount}
          </p>
        </div>

        {/* Already set players */}
        {players.length > 0 && (
          <div className="confirmed-players">
            {players.map((p) => (
              <div key={p.id} className="confirmed-player-chip" style={{ borderColor: p.hero.color }}>
                <span>{p.hero.emoji}</span>
                <span className="confirmed-player-name">{p.name}</span>
              </div>
            ))}
          </div>
        )}

        {!isAllPlayersSet ? (
          <>
            {/* Hero selection grid */}
            {!showNameInput ? (
              <div className="hero-grid">
                {HEROES.map((hero) => {
                  const isUsed = usedHeroes.includes(hero.id);
                  return (
                    <button
                      key={hero.id}
                      className={`hero-card ${isUsed ? 'used' : ''} ${selectedHero === hero.id ? 'selected' : ''}`}
                      style={{
                        borderColor: isUsed ? '#ccc' : hero.color,
                        backgroundColor: isUsed ? '#f5f5f5' : hero.bgColor,
                      }}
                      onClick={() => !isUsed && handleSelectHero(hero.id)}
                      disabled={isUsed}
                    >
                      <div className="hero-card-avatar">
                        <HeroCharacter heroId={hero.id} size={100} animated={!isUsed} />
                      </div>
                      <p className="hero-card-name" style={{ color: isUsed ? '#999' : hero.borderColor }}>
                        {hero.name}
                      </p>
                      <p className="hero-card-emoji">{hero.emoji}</p>
                      {isUsed && <div className="hero-card-used">OCUPADO</div>}
                    </button>
                  );
                })}
              </div>
            ) : (
              /* Name input section */
              <div className="name-input-section">
                <div className="selected-hero-preview">
                  <HeroCharacter heroId={selectedHero!} size={150} animated />
                </div>
                <p className="name-input-label" style={{ color: HEROES.find((h) => h.id === selectedHero)?.color }}>
                  {HEROES.find((h) => h.id === selectedHero)?.name}
                </p>
                <div className="name-input-wrapper">
                  <input
                    type="text"
                    className="name-input"
                    value={playerName}
                    onChange={handleNameChange}
                    placeholder="ESCRIBE TU NOMBRE"
                    maxLength={12}
                    autoFocus
                    style={{ borderColor: HEROES.find((h) => h.id === selectedHero)?.color }}
                  />
                </div>
                <div className="name-input-buttons">
                  <button
                    className="btn-back"
                    onClick={() => {
                      setShowNameInput(false);
                      setSelectedHero(null);
                      setPlayerName('');
                    }}
                  >
                    ← VOLVER
                  </button>
                  <button
                    className="btn-confirm"
                    onClick={handleConfirmPlayer}
                    disabled={!playerName.trim()}
                    style={{
                      backgroundColor: playerName.trim()
                        ? HEROES.find((h) => h.id === selectedHero)?.color
                        : '#ccc',
                    }}
                  >
                    ¡LISTO! ✓
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          /* All players set - start game */
          <div className="start-game-section">
            <div className="all-players-ready">
              <p className="ready-text">¡TODOS LISTOS!</p>
              <div className="ready-heroes">
                {players.map((p) => (
                  <div key={p.id} className="ready-hero" style={{ borderColor: p.hero.color }}>
                    <HeroCharacter heroId={p.hero.id} size={80} animated />
                    <p className="ready-hero-name" style={{ color: p.hero.color }}>{p.name}</p>
                  </div>
                ))}
              </div>
            </div>
            <button className="start-game-button" onClick={handleStartGame}>
              <span>¡COMENZAR PARTIDA!</span>
              <span className="start-game-emoji">🎮</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
