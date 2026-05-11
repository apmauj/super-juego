'use client';

import React from 'react';
import { HeroId } from '@/lib/game-types';

interface HeroCharacterProps {
  heroId: HeroId;
  size?: number;
  className?: string;
  animated?: boolean;
}

// ==================== CAPITANA ESTRELLA (Pink/Star) ====================
const CapitanaEstrella = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Cape */}
    <path d="M70 80 L40 170 L100 150 L160 170 L130 80" fill="#D63384" opacity="0.8" />
    <path d="M75 85 L55 155 L100 140 L145 155 L125 85" fill="#C2185B" opacity="0.6" />
    {/* Body */}
    <ellipse cx="100" cy="115" rx="35" ry="45" fill="#FF69B4" />
    {/* Star emblem on chest */}
    <polygon points="100,88 105,100 118,100 108,108 112,120 100,113 88,120 92,108 82,100 95,100" fill="#FFD700" stroke="#FFA000" strokeWidth="1.5" />
    {/* Belt */}
    <rect x="72" y="130" width="56" height="8" rx="4" fill="#FFD700" />
    <circle cx="100" cy="134" r="5" fill="#FFA000" />
    {/* Head */}
    <circle cx="100" cy="55" r="32" fill="#FDBCB4" />
    {/* Hair */}
    <path d="M68 50 Q68 25 100 22 Q132 25 132 50 L130 40 Q125 30 100 28 Q75 30 70 40 Z" fill="#8B4513" />
    <path d="M68 50 Q65 42 72 38 Q68 55 72 65" fill="#8B4513" />
    <path d="M132 50 Q135 42 128 38 Q132 55 128 65" fill="#8B4513" />
    {/* Mask */}
    <path d="M75 48 Q78 38 100 36 Q122 38 125 48 L123 58 Q118 65 100 67 Q82 65 77 58 Z" fill="#FF1493" opacity="0.85" />
    {/* Eyes through mask */}
    <ellipse cx="88" cy="50" rx="7" ry="6" fill="white" />
    <ellipse cx="112" cy="50" rx="7" ry="6" fill="white" />
    <circle cx="89" cy="50" r="3.5" fill="#333" />
    <circle cx="113" cy="50" r="3.5" fill="#333" />
    <circle cx="90" cy="49" r="1.2" fill="white" />
    <circle cx="114" cy="49" r="1.2" fill="white" />
    {/* Smile */}
    <path d="M90 65 Q100 74 110 65" stroke="#C2185B" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    {/* Arms */}
    <path d="M65 100 L40 85 L38 95" stroke="#FDBCB4" strokeWidth="8" fill="none" strokeLinecap="round" />
    <path d="M135 100 L160 85 L162 95" stroke="#FDBCB4" strokeWidth="8" fill="none" strokeLinecap="round" />
    {/* Gloves */}
    <circle cx="38" cy="92" r="7" fill="#FF1493" />
    <circle cx="162" cy="92" r="7" fill="#FF1493" />
    {/* Legs */}
    <rect x="82" y="155" width="12" height="25" rx="6" fill="#FF69B4" />
    <rect x="106" y="155" width="12" height="25" rx="6" fill="#FF69B4" />
    {/* Boots */}
    <ellipse cx="88" cy="183" rx="10" ry="6" fill="#FF1493" />
    <ellipse cx="112" cy="183" rx="10" ry="6" fill="#FF1493" />
    {/* Star accessory on head */}
    <polygon points="100,18 103,25 110,25 104,30 106,37 100,33 94,37 96,30 90,25 97,25" fill="#FFD700" stroke="#FFA000" strokeWidth="1" />
  </svg>
);

// ==================== RAYO VELOZ (Yellow/Lightning) ====================
const RayoVeloz = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Speed lines */}
    <line x1="15" y1="90" x2="35" y2="90" stroke="#FFD700" strokeWidth="3" opacity="0.5" />
    <line x1="10" y1="110" x2="30" y2="110" stroke="#FFD700" strokeWidth="3" opacity="0.4" />
    <line x1="20" y1="130" x2="40" y2="130" stroke="#FFD700" strokeWidth="3" opacity="0.3" />
    {/* Cape (short, dynamic) */}
    <path d="M70 80 L50 140 L100 125 L150 140 L130 80" fill="#FFA000" opacity="0.7" />
    {/* Body */}
    <ellipse cx="100" cy="115" rx="35" ry="45" fill="#FFD700" />
    {/* Lightning emblem on chest */}
    <polygon points="105,85 95,108 108,105 95,130 115,100 102,103 112,85" fill="#FF6F00" stroke="#E65100" strokeWidth="1" />
    {/* Belt */}
    <rect x="72" y="130" width="56" height="8" rx="4" fill="#FF6F00" />
    <circle cx="100" cy="134" r="5" fill="#E65100" />
    {/* Head */}
    <circle cx="100" cy="55" r="32" fill="#FDBCB4" />
    {/* Spiky hair */}
    <path d="M68 45 L72 15 L82 40 L88 10 L98 38 L105 8 L112 40 L120 18 L125 42 L132 30 L130 48" fill="#FF6F00" />
    <path d="M68 48 Q68 42 72 40 L68 45" fill="#FF6F00" />
    {/* Mask */}
    <path d="M75 48 Q78 38 100 36 Q122 38 125 48 L123 58 Q118 65 100 67 Q82 65 77 58 Z" fill="#FFA000" opacity="0.85" />
    {/* Eyes through mask */}
    <ellipse cx="88" cy="50" rx="7" ry="6" fill="white" />
    <ellipse cx="112" cy="50" rx="7" ry="6" fill="white" />
    <circle cx="89" cy="50" r="3.5" fill="#333" />
    <circle cx="113" cy="50" r="3.5" fill="#333" />
    <circle cx="90" cy="49" r="1.2" fill="white" />
    <circle cx="114" cy="49" r="1.2" fill="white" />
    {/* Smile */}
    <path d="M88 65 Q100 76 112 65" stroke="#E65100" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    {/* Arms (dynamic running pose) */}
    <path d="M65 100 L30 80 L25 70" stroke="#FDBCB4" strokeWidth="8" fill="none" strokeLinecap="round" />
    <path d="M135 105 L165 120 L170 130" stroke="#FDBCB4" strokeWidth="8" fill="none" strokeLinecap="round" />
    {/* Gloves */}
    <circle cx="25" cy="68" r="7" fill="#FFA000" />
    <circle cx="170" cy="132" r="7" fill="#FFA000" />
    {/* Legs (running pose) */}
    <rect x="80" y="155" width="12" height="25" rx="6" fill="#FFD700" transform="rotate(-10 86 155)" />
    <rect x="108" y="155" width="12" height="25" rx="6" fill="#FFD700" transform="rotate(10 114 155)" />
    {/* Boots */}
    <ellipse cx="82" cy="182" rx="10" ry="6" fill="#FFA000" />
    <ellipse cx="118" cy="182" rx="10" ry="6" fill="#FFA000" />
  </svg>
);

// ==================== MEGA BOT (Blue/Robot) ====================
const MegaBot = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Antenna */}
    <line x1="100" y1="15" x2="100" y2="28" stroke="#2E6EB5" strokeWidth="4" />
    <circle cx="100" cy="12" r="6" fill="#FF4444" />
    <circle cx="100" cy="12" r="3" fill="#FF8888" />
    {/* Body (more angular/robotic) */}
    <rect x="68" y="80" width="64" height="70" rx="8" fill="#4A90D9" />
    {/* Chest plate */}
    <rect x="78" y="88" width="44" height="30" rx="4" fill="#2E6EB5" />
    {/* Gear emblem */}
    <circle cx="100" cy="103" r="12" fill="#87CEEB" stroke="#4A90D9" strokeWidth="2" />
    <circle cx="100" cy="103" r="6" fill="#4A90D9" />
    {/* Gear teeth */}
    <rect x="97" y="88" width="6" height="5" fill="#87CEEB" />
    <rect x="97" y="113" width="6" height="5" fill="#87CEEB" />
    <rect x="85" y="100" width="5" height="6" fill="#87CEEB" />
    <rect x="110" y="100" width="5" height="6" fill="#87CEEB" />
    {/* Belt */}
    <rect x="68" y="128" width="64" height="10" rx="3" fill="#2E6EB5" />
    <rect x="92" y="126" width="16" height="14" rx="3" fill="#FFD700" />
    {/* Buttons on body */}
    <circle cx="82" cy="140" r="3" fill="#4CAF50" />
    <circle cx="92" cy="140" r="3" fill="#FF4444" />
    {/* Head (robot - more square) */}
    <rect x="74" y="32" width="52" height="42" rx="10" fill="#4A90D9" />
    {/* Face plate */}
    <rect x="80" y="38" width="40" height="28" rx="6" fill="#E8F4FD" />
    {/* Eyes (LED style) */}
    <circle cx="92" cy="50" r="7" fill="#2E6EB5" />
    <circle cx="108" cy="50" r="7" fill="#2E6EB5" />
    <circle cx="92" cy="50" r="4" fill="#00E5FF" />
    <circle cx="108" cy="50" r="4" fill="#00E5FF" />
    <circle cx="93" cy="48" r="1.5" fill="white" />
    <circle cx="109" cy="48" r="1.5" fill="white" />
    {/* Mouth (LED smile) */}
    <path d="M90 62 Q100 70 110 62" stroke="#00E5FF" strokeWidth="3" fill="none" strokeLinecap="round" />
    {/* Ear panels */}
    <rect x="66" y="42" width="10" height="16" rx="3" fill="#2E6EB5" />
    <rect x="124" y="42" width="10" height="16" rx="3" fill="#2E6EB5" />
    {/* Arms (robotic) */}
    <rect x="40" y="88" width="28" height="12" rx="6" fill="#4A90D9" />
    <rect x="132" y="88" width="28" height="12" rx="6" fill="#4A90D9" />
    {/* Forearms */}
    <rect x="32" y="98" width="14" height="20" rx="5" fill="#2E6EB5" />
    <rect x="154" y="98" width="14" height="20" rx="5" fill="#2E6EB5" />
    {/* Hands (claws) */}
    <circle cx="39" cy="122" r="8" fill="#87CEEB" />
    <circle cx="161" cy="122" r="8" fill="#87CEEB" />
    {/* Legs */}
    <rect x="80" y="150" width="14" height="25" rx="5" fill="#4A90D9" />
    <rect x="106" y="150" width="14" height="25" rx="5" fill="#4A90D9" />
    {/* Boots */}
    <rect x="76" y="172" width="22" height="12" rx="4" fill="#2E6EB5" />
    <rect x="102" y="172" width="22" height="12" rx="4" fill="#2E6EB5" />
  </svg>
);

// ==================== ECO VERDE (Green/Nature) ====================
const EcoVerde = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Cape (leaf-shaped) */}
    <path d="M70 80 Q50 120 55 165 Q75 145 100 140 Q125 145 145 165 Q150 120 130 80" fill="#2E7D32" opacity="0.7" />
    {/* Leaf details on cape */}
    <path d="M75 100 Q85 120 80 145" stroke="#4CAF50" strokeWidth="2" fill="none" opacity="0.5" />
    <path d="M125 100 Q115 120 120 145" stroke="#4CAF50" strokeWidth="2" fill="none" opacity="0.5" />
    {/* Body */}
    <ellipse cx="100" cy="115" rx="35" ry="45" fill="#4CAF50" />
    {/* Leaf emblem on chest */}
    <path d="M100 85 Q115 95 115 110 Q115 120 100 128 Q85 120 85 110 Q85 95 100 85 Z" fill="#81C784" stroke="#2E7D32" strokeWidth="1.5" />
    <line x1="100" y1="90" x2="100" y2="125" stroke="#2E7D32" strokeWidth="1.5" />
    <path d="M100 100 Q108 95 112 98" stroke="#2E7D32" strokeWidth="1" fill="none" />
    <path d="M100 108 Q92 103 88 106" stroke="#2E7D32" strokeWidth="1" fill="none" />
    {/* Belt (vine) */}
    <path d="M72 132 Q86 128 100 132 Q114 136 128 132" stroke="#795548" strokeWidth="6" fill="none" strokeLinecap="round" />
    <circle cx="100" cy="132" r="5" fill="#FFD700" />
    {/* Hood/Head */}
    <circle cx="100" cy="55" r="32" fill="#FDBCB4" />
    {/* Hood */}
    <path d="M65 55 Q60 25 100 20 Q140 25 135 55 Q130 42 100 38 Q70 42 65 55 Z" fill="#2E7D32" />
    <path d="M65 55 Q63 50 68 45 Q65 60 68 70" fill="#2E7D32" />
    <path d="M135 55 Q137 50 132 45 Q135 60 132 70" fill="#2E7D32" />
    {/* Leaf on hood */}
    <path d="M95 22 Q100 10 105 22 Q100 18 95 22 Z" fill="#81C784" stroke="#2E7D32" strokeWidth="1" />
    {/* Mask */}
    <path d="M75 48 Q78 38 100 36 Q122 38 125 48 L123 58 Q118 65 100 67 Q82 65 77 58 Z" fill="#388E3C" opacity="0.85" />
    {/* Eyes through mask */}
    <ellipse cx="88" cy="50" rx="7" ry="6" fill="white" />
    <ellipse cx="112" cy="50" rx="7" ry="6" fill="white" />
    <circle cx="89" cy="50" r="3.5" fill="#333" />
    <circle cx="113" cy="50" r="3.5" fill="#333" />
    <circle cx="90" cy="49" r="1.2" fill="white" />
    <circle cx="114" cy="49" r="1.2" fill="white" />
    {/* Smile */}
    <path d="M90 65 Q100 74 110 65" stroke="#2E7D32" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    {/* Arms */}
    <path d="M65 100 L42 90 L35 100" stroke="#FDBCB4" strokeWidth="8" fill="none" strokeLinecap="round" />
    <path d="M135 100 L158 90 L165 100" stroke="#FDBCB4" strokeWidth="8" fill="none" strokeLinecap="round" />
    {/* Gloves (leaf-shaped) */}
    <ellipse cx="35" cy="98" rx="8" ry="7" fill="#388E3C" />
    <ellipse cx="165" cy="98" rx="8" ry="7" fill="#388E3C" />
    {/* Legs */}
    <rect x="82" y="155" width="12" height="25" rx="6" fill="#4CAF50" />
    <rect x="106" y="155" width="12" height="25" rx="6" fill="#4CAF50" />
    {/* Boots */}
    <ellipse cx="88" cy="183" rx="10" ry="6" fill="#2E7D32" />
    <ellipse cx="112" cy="183" rx="10" ry="6" fill="#2E7D32" />
    {/* Floating leaves */}
    <path d="M165 40 Q170 35 172 42 Q168 38 165 40 Z" fill="#81C784" opacity="0.7" />
    <path d="M30 70 Q25 65 28 72 Q26 68 30 70 Z" fill="#81C784" opacity="0.6" />
  </svg>
);

// ==================== MAIN COMPONENT ====================
export function HeroCharacter({ heroId, size = 80, className = '', animated = false }: HeroCharacterProps) {
  const animClass = animated ? 'hero-bounce' : '';

  const renderHero = () => {
    switch (heroId) {
      case 'CAPITANA_ESTRELLA':
        return <CapitanaEstrella size={size} />;
      case 'RAYO_VELOZ':
        return <RayoVeloz size={size} />;
      case 'MEGA_BOT':
        return <MegaBot size={size} />;
      case 'ECO_VERDE':
        return <EcoVerde size={size} />;
      default:
        return <CapitanaEstrella size={size} />;
    }
  };

  return (
    <div className={`inline-flex items-center justify-center ${animClass} ${className}`}>
      {renderHero()}
    </div>
  );
}

// ==================== HERO AVATAR (head only, for smaller displays) ====================
interface HeroAvatarProps {
  heroId: HeroId;
  size?: number;
  className?: string;
}

export function HeroAvatar({ heroId, size = 48, className = '' }: HeroAvatarProps) {
  const colors: Record<HeroId, { main: string; accent: string; eye: string }> = {
    CAPITANA_ESTRELLA: { main: '#FF69B4', accent: '#FF1493', eye: '#8B4513' },
    RAYO_VELOZ: { main: '#FFD700', accent: '#FFA000', eye: '#FF6F00' },
    MEGA_BOT: { main: '#4A90D9', accent: '#2E6EB5', eye: '#00E5FF' },
    ECO_VERDE: { main: '#4CAF50', accent: '#2E7D32', eye: '#2E7D32' },
  };

  const c = colors[heroId];

  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
        <circle cx="30" cy="30" r="28" fill={c.main} />
        <circle cx="30" cy="30" r="25" fill={c.accent} opacity="0.3" />
        {/* Mask shape */}
        <path d="M12 28 Q15 18 30 16 Q45 18 48 28 L46 36 Q42 42 30 44 Q18 42 14 36 Z" fill={c.accent} opacity="0.7" />
        {/* Eyes */}
        <ellipse cx="22" cy="29" rx="5" ry="4.5" fill="white" />
        <ellipse cx="38" cy="29" rx="5" ry="4.5" fill="white" />
        <circle cx="23" cy="29" r="2.5" fill="#333" />
        <circle cx="39" cy="29" r="2.5" fill="#333" />
        <circle cx="24" cy="28" r="1" fill="white" />
        <circle cx="40" cy="28" r="1" fill="white" />
        {/* Smile */}
        <path d="M22 40 Q30 48 38 40" stroke={c.accent} strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* Hero-specific feature */}
        {heroId === 'CAPITANA_ESTRELLA' && (
          <polygon points="30,6 32,12 38,12 33,16 35,22 30,18 25,22 27,16 22,12 28,12" fill="#FFD700" />
        )}
        {heroId === 'RAYO_VELOZ' && (
          <path d="M30,8 L26,18 L32,16 L28,26" stroke="#FF6F00" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        )}
        {heroId === 'MEGA_BOT' && (
          <>
            <line x1="30" y1="4" x2="30" y2="10" stroke={c.accent} strokeWidth="2.5" />
            <circle cx="30" cy="3" r="3" fill="#FF4444" />
          </>
        )}
        {heroId === 'ECO_VERDE' && (
          <path d="M27 8 Q30 2 33 8 Q30 5 27 8 Z" fill="#81C784" stroke="#2E7D32" strokeWidth="1" />
        )}
      </svg>
    </div>
  );
}

// ==================== HERO TOKEN (minimal circular for board) ====================
interface HeroTokenProps {
  heroId: HeroId;
  size?: number;
  className?: string;
  isCurrentPlayer?: boolean;
}

export function HeroToken({ heroId, size = 32, className = '', isCurrentPlayer = false }: HeroTokenProps) {
  const colors: Record<HeroId, { main: string; accent: string; emoji: string }> = {
    CAPITANA_ESTRELLA: { main: '#FF69B4', accent: '#FF1493', emoji: '⭐' },
    RAYO_VELOZ: { main: '#FFD700', accent: '#FFA000', emoji: '⚡' },
    MEGA_BOT: { main: '#4A90D9', accent: '#2E6EB5', emoji: '🤖' },
    ECO_VERDE: { main: '#4CAF50', accent: '#2E7D32', emoji: '🌿' },
  };

  const c = colors[heroId];

  return (
    <div
      className={`inline-flex items-center justify-center rounded-full ${isCurrentPlayer ? 'hero-token-pulse' : ''} ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${c.main}, ${c.accent})`,
        border: `2px solid ${c.accent}`,
        fontSize: size * 0.5,
        boxShadow: isCurrentPlayer ? `0 0 8px ${c.main}, 0 0 16px ${c.main}40` : '0 2px 4px rgba(0,0,0,0.2)',
        transition: 'transform 0.3s ease',
      }}
    >
      {c.emoji}
    </div>
  );
}
