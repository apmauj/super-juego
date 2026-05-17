'use client';

import React, { useMemo } from 'react';
import { useGameStore } from '@/lib/game-store';
import {
  getSquarePosition,
  getSquareTypeColor,
  getSquareTypeEmoji,
  getSquareTypeLabel,
  PENALTY_EMOJI,
  SQUARES_PER_ROW,
  TOTAL_ROWS,
  BOARD_SIZE,
} from '@/lib/game-constants';
import { HeroToken } from './HeroCharacter';

export function GameBoard() {
  const { board, players, currentPlayerIndex } = useGameStore();

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

  // Build a 2D grid: grid[row][col] = square
  // Row 0 = top = squares 1-10, Row 9 = bottom = squares 91-100
  const grid = useMemo(() => {
    const g: (typeof board[0] | null)[][] = Array.from({ length: TOTAL_ROWS }, () =>
      Array(SQUARES_PER_ROW).fill(null)
    );
    board.forEach((square) => {
      const pos = getSquarePosition(square.number);
      g[pos.row][pos.col] = square;
    });
    return g;
  }, [board]);

  return (
    <div className="game-board-container">
      <div className="game-board-frame">
        {/* Start indicator */}
        <div className="board-start-label">🚀 INICIO</div>

        <div className="game-board-grid-10x10">
          {/* Render row by row from top (row 0) to bottom (row 9) */}
          {grid.map((row, rowIdx) => (
            <div key={rowIdx} className="board-row">
              {/* Row number indicator on the side */}
              <div className="board-row-indicator">
                {rowIdx === 0 && <span>1→</span>}
                {rowIdx === 1 && <span>←20</span>}
                {rowIdx === 2 && <span>21→</span>}
                {rowIdx === 3 && <span>←40</span>}
                {rowIdx === 4 && <span>41→</span>}
                {rowIdx === 5 && <span>←60</span>}
                {rowIdx === 6 && <span>61→</span>}
                {rowIdx === 7 && <span>←80</span>}
                {rowIdx === 8 && <span>81→</span>}
                {rowIdx === 9 && <span>←100</span>}
              </div>
              {row.map((square, colIdx) => {
                if (!square) return <div key={colIdx} className="board-square-empty" />;

                const playersOnSquare = playersBySquare[square.number] || [];
                const isFinish = square.type === 'FINISH';
                const isSpecial = square.type !== 'NORMAL';
                const isStart = square.number === 1;
                const isPenalty = Boolean(square.isPenalty);

                return (
                  <div
                    key={square.number}
                    className={`board-square-10 ${isFinish ? 'finish-square' : ''} ${isSpecial ? 'special-square' : ''} ${isStart ? 'start-square' : ''} ${isPenalty ? 'penalty-square' : ''}`}
                    style={{
                      backgroundColor: getSquareTypeColor(square.type),
                    }}
                  >
                    {/* Square number */}
                    <span className="sq10-number">{square.number}</span>

                    {/* Square type indicator */}
                    {getSquareTypeEmoji(square.type) && (
                      <span className="sq10-emoji">{getSquareTypeEmoji(square.type)}</span>
                    )}

                    {isPenalty && (
                      <span className="sq10-penalty-emoji">{PENALTY_EMOJI}</span>
                    )}

                    {getSquareTypeLabel(square.type) && (
                      <span className="sq10-label">{getSquareTypeLabel(square.type)}</span>
                    )}

                    {/* Start / Finish labels */}
                    {isStart && <span className="sq10-special-label">INICIO</span>}
                    {isFinish && <span className="sq10-special-label">META</span>}

                    {/* Player tokens */}
                    {playersOnSquare.length > 0 && (
                      <div className="sq10-players">
                        {playersOnSquare.map((p, idx) => (
                          <div
                            key={p.id}
                            className="sq10-player-token"
                            style={{
                              transform: `translate(${(idx % 2) * 16 - 8}px, ${Math.floor(idx / 2) * 16 - 4}px)`,
                            }}
                          >
                            <HeroToken
                              heroId={p.hero.id}
                              size={22}
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
          ))}
        </div>

        {/* Finish indicator */}
        <div className="board-finish-label">🏁 META</div>
      </div>
    </div>
  );
}
