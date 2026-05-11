'use client';

import React, { useMemo } from 'react';
import { useGameStore } from '@/lib/game-store';
import {
  getSquarePosition,
  getSquareTypeColor,
  getSquareTypeEmoji,
  getSquareTypeLabel,
  SQUARES_PER_ROW,
  BOARD_SIZE,
} from '@/lib/game-constants';
import { HeroToken } from './HeroCharacter';

export function GameBoard() {
  const { board, players, currentPlayerIndex } = useGameStore();

  // Calculate board dimensions
  const totalRows = Math.ceil(BOARD_SIZE / SQUARES_PER_ROW);

  // Get which players are on which square
  const playersBySquare = useMemo(() => {
    const map: Record<number, typeof players> = {};
    players.forEach((p) => {
      if (p.position > 0) {
        if (!map[p.position]) map[p.position] = [];
        map[p.position].push(p);
      }
    });
    return map;
  }, [players]);

  return (
    <div className="game-board-container">
      <div className="game-board-frame">
        {/* Start indicator */}
        <div className="board-start-label">🚀 INICIO</div>

        <div
          className="game-board-grid"
          style={{
            gridTemplateRows: `repeat(${totalRows}, 1fr)`,
            gridTemplateColumns: `repeat(${SQUARES_PER_ROW}, 1fr)`,
          }}
        >
          {board.map((square) => {
            const pos = getSquarePosition(square.number);
            const playersOnSquare = playersBySquare[square.number] || [];
            const isFinish = square.type === 'FINISH';
            const isSpecial = square.type !== 'NORMAL';

            return (
              <div
                key={square.number}
                className={`board-square ${isFinish ? 'finish-square' : ''} ${isSpecial ? 'special-square' : ''}`}
                style={{
                  gridRow: totalRows - pos.row,
                  gridColumn: pos.col + 1,
                  backgroundColor: getSquareTypeColor(square.type),
                  borderColor: isFinish ? '#4CAF50' : isSpecial ? '#FFD700' : '#ddd',
                }}
              >
                {/* Square number */}
                <span className="square-number">{square.number}</span>

                {/* Square type indicator */}
                {getSquareTypeEmoji(square.type) && (
                  <span className="square-emoji">{getSquareTypeEmoji(square.type)}</span>
                )}

                {getSquareTypeLabel(square.type) && (
                  <span className="square-label">{getSquareTypeLabel(square.type)}</span>
                )}

                {/* Player tokens */}
                {playersOnSquare.length > 0 && (
                  <div className="square-players">
                    {playersOnSquare.map((p, idx) => (
                      <div
                        key={p.id}
                        className="square-player-token"
                        style={{
                          transform: `translate(${(idx % 2) * 14 - 7}px, ${Math.floor(idx / 2) * 14 - 4}px)`,
                        }}
                      >
                        <HeroToken
                          heroId={p.hero.id}
                          size={24}
                          isCurrentPlayer={players.indexOf(p) === currentPlayerIndex}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Finish indicator */}
        <div className="board-finish-label">🏁 META</div>
      </div>
    </div>
  );
}
