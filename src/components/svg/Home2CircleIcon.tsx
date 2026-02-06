import * as React from "react";

const Home2CircleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <defs>
            {/* Soft background glow */}
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="35" />
            </filter>

            {/* Glass refraction/blur */}
            <filter id="glass_effect" x="-10%" y="-10%" width="120%" height="120%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="12" />
            </filter>

            {/* Main Pink/Purple/Blue Gradient */}
            <linearGradient id="torus_grad" x1="50" y1="50" x2="450" y2="450" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FF71C6" />
                <stop offset="40%" stopColor="#B288FF" />
                <stop offset="75%" stopColor="#7CC3FF" />
                <stop offset="100%" stopColor="#8FF9FF" />
            </linearGradient>

            {/* Surface reflection */}
            <linearGradient id="reflection_grad" x1="250" y1="100" x2="250" y2="250" gradientUnits="userSpaceOnUse">
                <stop stopColor="white" stopOpacity="0.5" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
        </defs>

        {/* Distant Glow */}
        <ellipse cx="250" cy="250" rx="180" ry="120" fill="url(#torus_grad)" opacity="0.2" filter="url(#glow)" transform="rotate(-30 250 250)" />

        {/* Main 3D Torus Body */}
        <g transform="rotate(-35 250 250)">
            {/* Outer Shell */}
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M250 100C371.53 100 470 167.16 470 250C470 332.84 371.53 400 250 400C128.47 400 30 332.84 30 250C30 167.16 128.47 100 250 100ZM250 185C305.23 185 350 214.1 350 250C350 285.9 305.23 315 250 315C194.77 315 150 285.9 150 250C150 214.1 194.77 185 250 185Z"
                fill="url(#torus_grad)"
                fillOpacity="0.85"
            />

            {/* Sharp Rim Highlight */}
            <path
                d="M400 180C420 210 430 250 420 290"
                stroke="white"
                strokeWidth="10"
                strokeLinecap="round"
                opacity="0.4"
                filter="url(#glass_effect)"
            />

            {/* Top Surface Light */}
            <ellipse cx="250" cy="140" rx="120" ry="25" fill="url(#reflection_grad)" opacity="0.3" filter="url(#glass_effect)" />

            {/* Inner Rim Light */}
            <path
                d="M180 220C200 200 230 190 260 195"
                stroke="white"
                strokeWidth="6"
                strokeLinecap="round"
                opacity="0.3"
            />
        </g>
    </svg>
);

export default Home2CircleIcon;
