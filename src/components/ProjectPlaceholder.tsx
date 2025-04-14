import React from 'react';
import { ShoppingCart, ListTodo, MessageSquare, Activity, Cloud, FileText } from 'lucide-react';

interface ProjectPlaceholderProps {
  title: string;
  category: 'frontend' | 'backend' | 'fullstack' | 'mobile';
  id: number;
}

const gradients = {
  frontend: ['#9B87F5', '#6B5BFF'], // Gaming purple theme
  backend: ['#4A90E2', '#2B6CB0'],  // Gaming blue theme
  fullstack: ['#4A90E2', '#2B6CB0'], // Changed from orange to blue theme
  mobile: ['#FC8181', '#F56565']    // Gaming red theme
};

const projectIcons = {
  'E-Commerce Platform': ShoppingCart,
  'Task Management App': ListTodo,
  'Real-time Chat API': MessageSquare,
  'Fitness Tracking App': Activity,
  'Weather Dashboard': Cloud,
  'Content Management System': FileText
};

export const ProjectPlaceholder: React.FC<ProjectPlaceholderProps> = ({ title, category, id }) => {
  const [gradientStart, gradientEnd] = gradients[category];
  const Icon = projectIcons[title as keyof typeof projectIcons];

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 400 300"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={gradientStart} />
          <stop offset="100%" stopColor={gradientEnd} />
        </linearGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <filter id="scanlines">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
          <feBlend in="SourceGraphic" mode="screen" />
        </filter>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" />
        </pattern>
        <pattern id="binary" width="10" height="10" patternUnits="userSpaceOnUse">
          <text x="0" y="8" fontFamily="monospace" fontSize="5" fill="white" fillOpacity="0.1">
            0101
          </text>
        </pattern>
      </defs>
      
      {/* Background */}
      <rect width="400" height="300" fill="url(#gradient)" />
      <rect width="400" height="300" fill="url(#grid)" />
      <rect width="400" height="300" fill="url(#binary)" />
      
      {/* Scanlines effect */}
      <rect width="400" height="300" fill="black" fillOpacity="0.1" filter="url(#scanlines)" />
      
      {/* Corner accents */}
      <path d="M 0 0 L 20 0 L 0 20 Z" fill="white" fillOpacity="0.1" />
      <path d="M 400 0 L 380 0 L 400 20 Z" fill="white" fillOpacity="0.1" />
      <path d="M 0 300 L 0 280 L 20 300 Z" fill="white" fillOpacity="0.1" />
      <path d="M 400 300 L 400 280 L 380 300 Z" fill="white" fillOpacity="0.1" />
      
      {/* Project icon with cyber effect */}
      <g transform="translate(200, 100)" filter="url(#glow)">
        <rect x="-35" y="-35" width="70" height="70" fill="black" fillOpacity="0.3" rx="5" />
        <foreignObject width="60" height="60" x="-30" y="-30">
          <div className="flex items-center justify-center w-full h-full">
            {Icon && <Icon size={40} className="text-white" />}
          </div>
        </foreignObject>
        <path d="M -35 -35 L 35 -35 L 35 35 L -35 35 Z" fill="none" stroke="white" strokeWidth="1" strokeOpacity="0.3" />
      </g>
      
      {/* Project title with cyber effect */}
      <g transform="translate(200, 175)">
        <rect x="-100" y="-15" width="200" height="30" fill="black" fillOpacity="0.3" rx="3" />
        <text
          textAnchor="middle"
          fill="white"
          fontFamily="'Courier New', monospace"
          fontSize="12"
          fontWeight="bold"
          filter="url(#glow)"
        >
          {title}
        </text>
      </g>
      
      {/* Project category */}
      <g transform="translate(200, 195)">
        <text
          textAnchor="middle"
          fill="white"
          fontFamily="'Courier New', monospace"
          fontSize="8"
          opacity="0.8"
        >
          {category.toUpperCase()}
        </text>
      </g>
      
      {/* Level indicator with cyber effect */}
      <g transform="translate(200, 225)">
        <rect x="-30" y="-10" width="60" height="20" rx="10" fill="black" fillOpacity="0.5" />
        <rect x="-30" y="-10" width="60" height="20" rx="10" fill="none" stroke="white" strokeWidth="0.5" strokeOpacity="0.3" />
        <text
          textAnchor="middle"
          fill="white"
          fontFamily="'Courier New', monospace"
          fontSize="10"
          fontWeight="bold"
        >
          LEVEL {id}
        </text>
      </g>
      
      {/* Binary code animation */}
      <g transform="translate(200, 250)">
        <text
          textAnchor="middle"
          fill="white"
          fontFamily="monospace"
          fontSize="6"
          opacity="0.3"
        >
          01010100 01001000 01000101 00100000 01000110 01010101 01010100 01010101 01010010 01000101
        </text>
      </g>
    </svg>
  );
}; 