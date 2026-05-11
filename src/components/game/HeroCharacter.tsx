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

// ==================== FLAMA ÍGNEA (Fire Superheroine) ====================
const FlamaIgnea = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Fire aura */}
    <path d="M60 85 Q50 60 70 50 Q60 35 80 30 Q90 15 100 20 Q110 15 120 30 Q140 35 130 50 Q150 60 140 85" fill="#FF5722" opacity="0.3" />
    {/* Cape (flame-shaped) */}
    <path d="M70 80 Q45 120 50 170 Q70 150 100 145 Q130 150 150 170 Q155 120 130 80" fill="#D84315" opacity="0.7" />
    <path d="M78 90 Q60 125 65 155 Q80 140 100 138 Q120 140 135 155 Q140 125 122 90" fill="#BF360C" opacity="0.5" />
    {/* Body */}
    <ellipse cx="100" cy="115" rx="35" ry="45" fill="#FF5722" />
    {/* Flame emblem on chest */}
    <path d="M100 85 Q110 95 108 105 Q115 100 112 112 Q108 120 100 128 Q92 120 88 112 Q85 100 92 105 Q90 95 100 85Z" fill="#FFAB91" stroke="#D84315" strokeWidth="1.5" />
    {/* Belt */}
    <rect x="72" y="130" width="56" height="8" rx="4" fill="#D84315" />
    <circle cx="100" cy="134" r="5" fill="#FFAB91" />
    {/* Head */}
    <circle cx="100" cy="55" r="32" fill="#FDBCB4" />
    {/* Hair (flame-shaped) */}
    <path d="M68 48 Q65 20 85 15 Q80 30 88 25 Q85 10 100 8 Q95 22 102 18 Q100 5 115 12 Q108 25 115 22 Q115 30 120 20 Q125 30 132 28 Q130 42 132 48" fill="#FF5722" />
    <path d="M88 28 Q92 18 100 15 Q95 22 98 25" fill="#FFAB91" opacity="0.6" />
    {/* Mask */}
    <path d="M75 48 Q78 38 100 36 Q122 38 125 48 L123 58 Q118 65 100 67 Q82 65 77 58 Z" fill="#D84315" opacity="0.85" />
    {/* Eyes through mask */}
    <ellipse cx="88" cy="50" rx="7" ry="6" fill="white" />
    <ellipse cx="112" cy="50" rx="7" ry="6" fill="white" />
    <circle cx="89" cy="50" r="3.5" fill="#333" />
    <circle cx="113" cy="50" r="3.5" fill="#333" />
    <circle cx="90" cy="49" r="1.2" fill="white" />
    <circle cx="114" cy="49" r="1.2" fill="white" />
    {/* Smile */}
    <path d="M90 65 Q100 74 110 65" stroke="#D84315" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    {/* Arms */}
    <path d="M65 100 L42 88 L38 78" stroke="#FDBCB4" strokeWidth="8" fill="none" strokeLinecap="round" />
    <path d="M135 100 L158 88 L162 78" stroke="#FDBCB4" strokeWidth="8" fill="none" strokeLinecap="round" />
    {/* Gloves (flame cuffs) */}
    <circle cx="38" cy="76" r="7" fill="#D84315" />
    <circle cx="162" cy="76" r="7" fill="#D84315" />
    {/* Legs */}
    <rect x="82" y="155" width="12" height="25" rx="6" fill="#FF5722" />
    <rect x="106" y="155" width="12" height="25" rx="6" fill="#FF5722" />
    {/* Boots */}
    <ellipse cx="88" cy="183" rx="10" ry="6" fill="#D84315" />
    <ellipse cx="112" cy="183" rx="10" ry="6" fill="#D84315" />
    {/* Small floating flames */}
    <path d="M165 35 Q170 25 168 35 Q172 30 170 38" fill="#FFAB91" opacity="0.6" />
    <path d="M32 55 Q28 45 32 52 Q28 48 30 56" fill="#FFAB91" opacity="0.5" />
  </svg>
);

// ==================== CRISTAL POLAR (Ice Superheroine) ====================
const CristalPolar = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Ice crystal aura */}
    <path d="M100 5 L104 18 L115 12 L108 22 L125 20 L110 28 L128 35 L108 34 L115 48 L100 38 L85 48 L92 34 L72 35 L90 28 L75 20 L92 22 L85 12 L96 18 Z" fill="#80DEEA" opacity="0.25" />
    {/* Cape (icicle-shaped) */}
    <path d="M70 80 Q50 115 52 155 L60 145 L65 160 L75 142 L82 158 L88 140 L100 148 L112 140 L118 158 L125 142 L132 160 L140 145 L148 155 Q150 115 130 80" fill="#00838F" opacity="0.6" />
    {/* Body */}
    <ellipse cx="100" cy="115" rx="35" ry="45" fill="#00BCD4" />
    {/* Snowflake emblem on chest */}
    <circle cx="100" cy="106" r="12" fill="#E0F7FA" stroke="#00838F" strokeWidth="1.5" />
    <line x1="100" y1="92" x2="100" y2="120" stroke="#00838F" strokeWidth="2" />
    <line x1="88" y1="106" x2="112" y2="106" stroke="#00838F" strokeWidth="2" />
    <line x1="91" y1="97" x2="109" y2="115" stroke="#00838F" strokeWidth="2" />
    <line x1="109" y1="97" x2="91" y2="115" stroke="#00838F" strokeWidth="2" />
    {/* Belt */}
    <rect x="72" y="130" width="56" height="8" rx="4" fill="#00838F" />
    <circle cx="100" cy="134" r="5" fill="#80DEEA" />
    {/* Head */}
    <circle cx="100" cy="55" r="32" fill="#FDBCB4" />
    {/* Hair (flowing icy blue) */}
    <path d="M68 50 Q65 22 100 18 Q135 22 132 50 L130 38 Q125 28 100 24 Q75 28 70 38 Z" fill="#00ACC1" />
    <path d="M68 50 Q62 45 65 60 Q62 55 66 70" fill="#00ACC1" />
    <path d="M132 50 Q138 45 135 60 Q138 55 134 70" fill="#00ACC1" />
    {/* Snowflake hair pin */}
    <line x1="100" y1="14" x2="100" y2="22" stroke="#E0F7FA" strokeWidth="2" />
    <line x1="95" y1="16" x2="105" y2="20" stroke="#E0F7FA" strokeWidth="2" />
    <line x1="105" y1="16" x2="95" y2="20" stroke="#E0F7FA" strokeWidth="2" />
    {/* Mask */}
    <path d="M75 48 Q78 38 100 36 Q122 38 125 48 L123 58 Q118 65 100 67 Q82 65 77 58 Z" fill="#00838F" opacity="0.85" />
    {/* Eyes through mask */}
    <ellipse cx="88" cy="50" rx="7" ry="6" fill="white" />
    <ellipse cx="112" cy="50" rx="7" ry="6" fill="white" />
    <circle cx="89" cy="50" r="3.5" fill="#333" />
    <circle cx="113" cy="50" r="3.5" fill="#333" />
    <circle cx="90" cy="49" r="1.2" fill="white" />
    <circle cx="114" cy="49" r="1.2" fill="white" />
    {/* Smile */}
    <path d="M90 65 Q100 74 110 65" stroke="#00838F" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    {/* Arms */}
    <path d="M65 100 L40 88 L35 95" stroke="#FDBCB4" strokeWidth="8" fill="none" strokeLinecap="round" />
    <path d="M135 100 L160 88 L165 95" stroke="#FDBCB4" strokeWidth="8" fill="none" strokeLinecap="round" />
    {/* Gloves (ice crystal) */}
    <ellipse cx="35" cy="94" rx="8" ry="7" fill="#00838F" />
    <ellipse cx="165" cy="94" rx="8" ry="7" fill="#00838F" />
    {/* Legs */}
    <rect x="82" y="155" width="12" height="25" rx="6" fill="#00BCD4" />
    <rect x="106" y="155" width="12" height="25" rx="6" fill="#00BCD4" />
    {/* Boots */}
    <ellipse cx="88" cy="183" rx="10" ry="6" fill="#00838F" />
    <ellipse cx="112" cy="183" rx="10" ry="6" fill="#00838F" />
    {/* Small floating snowflakes */}
    <text x="168" y="45" fontSize="12" opacity="0.5">❄</text>
    <text x="25" y="65" fontSize="10" opacity="0.4">❄</text>
  </svg>
);

// ==================== VELOCIBOT (Robot Speed Superheroine) ====================
const Velocibot = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Speed lines */}
    <line x1="8" y1="75" x2="28" y2="75" stroke="#CE93D8" strokeWidth="3" opacity="0.5" />
    <line x1="5" y1="95" x2="25" y2="95" stroke="#CE93D8" strokeWidth="3" opacity="0.4" />
    <line x1="10" y1="115" x2="30" y2="115" stroke="#CE93D8" strokeWidth="3" opacity="0.3" />
    <line x1="172" y1="80" x2="192" y2="80" stroke="#CE93D8" strokeWidth="3" opacity="0.3" />
    <line x1="175" y1="100" x2="195" y2="100" stroke="#CE93D8" strokeWidth="3" opacity="0.2" />
    {/* Body (sleek robotic) */}
    <rect x="70" y="82" width="60" height="65" rx="12" fill="#9C27B0" />
    {/* Chest plate */}
    <rect x="80" y="90" width="40" height="28" rx="5" fill="#6A1B9A" />
    {/* Speed gauge emblem */}
    <circle cx="100" cy="104" r="10" fill="#CE93D8" stroke="#9C27B0" strokeWidth="2" />
    <path d="M100 104 L106 98" stroke="#6A1B9A" strokeWidth="2" strokeLinecap="round" />
    <circle cx="100" cy="104" r="2" fill="#6A1B9A" />
    {/* Speed lines on body */}
    <path d="M78 95 L85 95" stroke="#CE93D8" strokeWidth="1.5" />
    <path d="M78 99 L88 99" stroke="#CE93D8" strokeWidth="1.5" />
    <path d="M115 95 L122 95" stroke="#CE93D8" strokeWidth="1.5" />
    <path d="M112 99 L122 99" stroke="#CE93D8" strokeWidth="1.5" />
    {/* Belt */}
    <rect x="70" y="128" width="60" height="10" rx="3" fill="#6A1B9A" />
    <rect x="92" y="126" width="16" height="14" rx="3" fill="#CE93D8" />
    {/* Buttons */}
    <circle cx="82" cy="140" r="3" fill="#4CAF50" />
    <circle cx="92" cy="140" r="3" fill="#FF4081" />
    {/* Head (robot, sleek feminine) */}
    <rect x="76" y="32" width="48" height="42" rx="12" fill="#9C27B0" />
    {/* Face plate */}
    <rect x="82" y="38" width="36" height="28" rx="8" fill="#F3E5F5" />
    {/* Eyes (LED style) */}
    <ellipse cx="93" cy="50" rx="7" ry="6" fill="#6A1B9A" />
    <ellipse cx="107" cy="50" rx="7" ry="6" fill="#6A1B9A" />
    <ellipse cx="93" cy="50" rx="4" ry="3.5" fill="#E040FB" />
    <ellipse cx="107" cy="50" rx="4" ry="3.5" fill="#E040FB" />
    <circle cx="94" cy="48" r="1.5" fill="white" />
    <circle cx="108" cy="48" r="1.5" fill="white" />
    {/* Eyelash details */}
    <path d="M86 45 Q89 43 93 44" stroke="#6A1B9A" strokeWidth="1.5" fill="none" />
    <path d="M107 44 Q111 43 114 45" stroke="#6A1B9A" strokeWidth="1.5" fill="none" />
    {/* Mouth (LED smile) */}
    <path d="M92 62 Q100 68 108 62" stroke="#E040FB" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    {/* Antenna (speed fin) */}
    <path d="M92 32 L95 18 L100 22 L105 18 L108 32" fill="#CE93D8" stroke="#6A1B9A" strokeWidth="1.5" />
    <circle cx="100" cy="16" r="4" fill="#E040FB" />
    {/* Ear panels (streamlined) */}
    <path d="M76 42 L64 48 L64 56 L76 54" fill="#6A1B9A" />
    <path d="M124 42 L136 48 L136 56 L124 54" fill="#6A1B9A" />
    {/* Arms (robotic, speed pose) */}
    <rect x="38" y="88" width="32" height="10" rx="5" fill="#9C27B0" />
    <rect x="130" y="88" width="32" height="10" rx="5" fill="#9C27B0" />
    {/* Forearms */}
    <rect x="28" y="96" width="14" height="18" rx="5" fill="#6A1B9A" />
    <rect x="158" y="96" width="14" height="18" rx="5" fill="#6A1B9A" />
    {/* Hands */}
    <circle cx="35" cy="118" r="7" fill="#CE93D8" />
    <circle cx="165" cy="118" r="7" fill="#CE93D8" />
    {/* Legs (sleek) */}
    <rect x="80" y="150" width="14" height="25" rx="5" fill="#9C27B0" />
    <rect x="106" y="150" width="14" height="25" rx="5" fill="#9C27B0" />
    {/* Boots (speed boots) */}
    <path d="M76 172 L92 172 L94 180 L74 180 Z" fill="#6A1B9A" rx="3" />
    <path d="M108 172 L124 172 L126 180 L106 180 Z" fill="#6A1B9A" rx="3" />
  </svg>
);

// ==================== AQUA TORRENTE (Water Superhero) ====================
const AquaTorrente = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Water splash aura */}
    <path d="M55 82 Q48 65 58 55 Q52 40 68 42 Q65 28 80 35 Q85 22 100 25 Q115 22 120 35 Q135 28 132 42 Q148 40 142 55 Q152 65 145 82" fill="#4FC3F7" opacity="0.2" />
    {/* Cape (wave-shaped) */}
    <path d="M70 80 Q48 115 52 160 Q65 150 78 155 Q88 145 100 148 Q112 145 122 155 Q135 150 148 160 Q152 115 130 80" fill="#01579B" opacity="0.7" />
    {/* Wave details on cape */}
    <path d="M72 110 Q82 105 92 110 Q102 115 112 110" stroke="#4FC3F7" strokeWidth="2" fill="none" opacity="0.5" />
    <path d="M68 130 Q80 125 92 130 Q104 135 116 130" stroke="#4FC3F7" strokeWidth="2" fill="none" opacity="0.4" />
    {/* Body */}
    <ellipse cx="100" cy="115" rx="35" ry="45" fill="#0277BD" />
    {/* Water drop emblem on chest */}
    <path d="M100 85 Q115 100 115 110 Q115 120 100 128 Q85 120 85 110 Q85 100 100 85Z" fill="#4FC3F7" stroke="#01579B" strokeWidth="1.5" />
    <ellipse cx="96" cy="108" rx="3" ry="5" fill="#E1F5FE" opacity="0.6" />
    {/* Belt */}
    <rect x="72" y="130" width="56" height="8" rx="4" fill="#01579B" />
    <circle cx="100" cy="134" r="5" fill="#4FC3F7" />
    {/* Head */}
    <circle cx="100" cy="55" r="32" fill="#FDBCB4" />
    {/* Hair (wavy blue-black) */}
    <path d="M68 48 Q65 22 100 18 Q135 22 132 48 L130 36 Q125 26 100 22 Q75 26 70 36 Z" fill="#0D47A1" />
    <path d="M68 50 Q60 45 64 62 Q58 58 65 72" fill="#0D47A1" />
    <path d="M132 50 Q140 45 136 62 Q142 58 135 72" fill="#0D47A1" />
    {/* Wave detail in hair */}
    <path d="M78 30 Q88 26 98 30 Q108 26 118 30" stroke="#4FC3F7" strokeWidth="2" fill="none" opacity="0.6" />
    {/* Mask */}
    <path d="M75 48 Q78 38 100 36 Q122 38 125 48 L123 58 Q118 65 100 67 Q82 65 77 58 Z" fill="#01579B" opacity="0.85" />
    {/* Eyes through mask */}
    <ellipse cx="88" cy="50" rx="7" ry="6" fill="white" />
    <ellipse cx="112" cy="50" rx="7" ry="6" fill="white" />
    <circle cx="89" cy="50" r="3.5" fill="#333" />
    <circle cx="113" cy="50" r="3.5" fill="#333" />
    <circle cx="90" cy="49" r="1.2" fill="white" />
    <circle cx="114" cy="49" r="1.2" fill="white" />
    {/* Smile */}
    <path d="M90 65 Q100 74 110 65" stroke="#01579B" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    {/* Arms (dynamic water pose) */}
    <path d="M65 100 L38 90 L30 98" stroke="#FDBCB4" strokeWidth="8" fill="none" strokeLinecap="round" />
    <path d="M135 100 L162 90 L170 98" stroke="#FDBCB4" strokeWidth="8" fill="none" strokeLinecap="round" />
    {/* Gloves (wave-shaped) */}
    <ellipse cx="30" cy="96" rx="8" ry="7" fill="#01579B" />
    <ellipse cx="170" cy="96" rx="8" ry="7" fill="#01579B" />
    {/* Legs */}
    <rect x="82" y="155" width="12" height="25" rx="6" fill="#0277BD" />
    <rect x="106" y="155" width="12" height="25" rx="6" fill="#0277BD" />
    {/* Boots */}
    <ellipse cx="88" cy="183" rx="10" ry="6" fill="#01579B" />
    <ellipse cx="112" cy="183" rx="10" ry="6" fill="#01579B" />
    {/* Water droplets */}
    <circle cx="170" cy="40" r="3" fill="#4FC3F7" opacity="0.5" />
    <circle cx="28" cy="60" r="2.5" fill="#4FC3F7" opacity="0.4" />
    <circle cx="175" cy="55" r="2" fill="#4FC3F7" opacity="0.3" />
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
      case 'FLAMA_IGNEA':
        return <FlamaIgnea size={size} />;
      case 'CRISTAL_POLAR':
        return <CristalPolar size={size} />;
      case 'VELOCIBOT':
        return <Velocibot size={size} />;
      case 'AQUA_TORRENTE':
        return <AquaTorrente size={size} />;
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
    FLAMA_IGNEA: { main: '#FF5722', accent: '#D84315', eye: '#D84315' },
    CRISTAL_POLAR: { main: '#00BCD4', accent: '#00838F', eye: '#00838F' },
    VELOCIBOT: { main: '#9C27B0', accent: '#6A1B9A', eye: '#E040FB' },
    AQUA_TORRENTE: { main: '#0277BD', accent: '#01579B', eye: '#01579B' },
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
        {heroId === 'FLAMA_IGNEA' && (
          <path d="M27 6 Q30 2 33 6 Q30 4 27 6 Z" fill="#FFAB91" stroke="#D84315" strokeWidth="1" />
        )}
        {heroId === 'CRISTAL_POLAR' && (
          <>
            <line x1="30" y1="4" x2="30" y2="10" stroke="#E0F7FA" strokeWidth="1.5" />
            <line x1="26" y1="7" x2="34" y2="7" stroke="#E0F7FA" strokeWidth="1.5" />
          </>
        )}
        {heroId === 'VELOCIBOT' && (
          <>
            <path d="M27 10 L30 4 L33 10" fill="#CE93D8" stroke="#6A1B9A" strokeWidth="1" />
            <circle cx="30" cy="3" r="2" fill="#E040FB" />
          </>
        )}
        {heroId === 'AQUA_TORRENTE' && (
          <path d="M30 6 Q34 10 34 13 Q34 16 30 18 Q26 16 26 13 Q26 10 30 6Z" fill="#4FC3F7" stroke="#01579B" strokeWidth="1" />
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
    FLAMA_IGNEA: { main: '#FF5722', accent: '#D84315', emoji: '🔥' },
    CRISTAL_POLAR: { main: '#00BCD4', accent: '#00838F', emoji: '❄️' },
    VELOCIBOT: { main: '#9C27B0', accent: '#6A1B9A', emoji: '⚙️' },
    AQUA_TORRENTE: { main: '#0277BD', accent: '#01579B', emoji: '🌊' },
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
