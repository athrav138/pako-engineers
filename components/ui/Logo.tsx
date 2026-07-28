import React from "react";
import Image from "next/image";
import { cn } from '@/lib/utils';

import { Images } from "@/lib/images";
interface LogoProps {
  className?: string;
  variant?: 'default' | 'white';
  /** Show only the PE monogram mark without the wordmark */
  compact?: boolean;
}

export const Logo = ({ className, variant = 'default', compact = false }: LogoProps) => {
  const isWhite = variant === 'white';

  // Color palette — professional blues matching the brand
  const primaryBlue = isWhite ? '#FFFFFF' : '#1B5A96';     // P letter & "PAKO"
  const accentBlue  = isWhite ? '#C8DDEF' : '#4A9AD4';     // E letter & "Engineers"
  const serifColor  = isWhite ? '#E8F0F7' : '#2D7BBE';     // Serif detail / shadow

  if (compact) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 72 72"
        className={cn("h-full w-auto", className)}
        aria-label="Pako Engineers"
        role="img"
      >
        <defs>
          <linearGradient id="pe-grad-c" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={primaryBlue} />
            <stop offset="100%" stopColor={serifColor} />
          </linearGradient>
        </defs>
        {/* P letter — bold serif style */}
        <text
          x="12"
          y="56"
          fontFamily="'Georgia', 'Times New Roman', serif"
          fontWeight="700"
          fontSize="58"
          fill="url(#pe-grad-c)"
          letterSpacing="-0.02em"
        >
          P
        </text>
        {/* E subscript — elegant lowercase */}
        <text
          x="38"
          y="60"
          fontFamily="'Georgia', 'Times New Roman', serif"
          fontWeight="400"
          fontStyle="italic"
          fontSize="34"
          fill={accentBlue}
        >
          E
        </text>
      </svg>
    );
  }

  if (!isWhite) {
    return (
      <Image
        src={Images.assets.logo.src}
        alt="Pako Engineers"
        width={1536}
        height={1024}
        className={cn("h-full w-auto object-contain", className)}
        priority={false}
      />
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 340 64"
      className={cn("h-full w-auto", className)}
      aria-label="Pako Engineers"
      role="img"
    >
      <defs>
        <linearGradient id="pe-p-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={isWhite ? '#FFFFFF' : '#1E6DB5'} />
          <stop offset="100%" stopColor={primaryBlue} />
        </linearGradient>
        <linearGradient id="pe-e-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={accentBlue} />
          <stop offset="100%" stopColor={isWhite ? '#A8C8E8' : '#6BB3E0'} />
        </linearGradient>
      </defs>

      {/* ── PE Monogram ── */}
      <g>
        {/* P — large bold serif */}
        <text
          x="4"
          y="52"
          fontFamily="'Georgia', 'Times New Roman', serif"
          fontWeight="700"
          fontSize="54"
          fill="url(#pe-p-grad)"
          letterSpacing="-0.02em"
        >
          P
        </text>
        {/* E — overlapping italic subscript */}
        <text
          x="30"
          y="56"
          fontFamily="'Georgia', 'Times New Roman', serif"
          fontWeight="400"
          fontStyle="italic"
          fontSize="30"
          fill="url(#pe-e-grad)"
        >
          E
        </text>
      </g>

      {/* ── Wordmark ── */}
      <g>
        {/* PAKO — bold */}
        <text
          x="68"
          y="40"
          fontFamily="'Manrope', 'Inter', 'Helvetica Neue', Arial, sans-serif"
          fontWeight="800"
          fontSize="28"
          fill={primaryBlue}
          letterSpacing="0.06em"
        >
          PAKO
        </text>
        {/* Engineers — lighter weight */}
        <text
          x="170"
          y="40"
          fontFamily="'Manrope', 'Inter', 'Helvetica Neue', Arial, sans-serif"
          fontWeight="400"
          fontSize="28"
          fill={accentBlue}
          letterSpacing="0.02em"
        >
          Engineers
        </text>
      </g>

      {/* ── Subtle underline accent ── */}
      <rect
        x="68"
        y="50"
        width="40"
        height="2"
        rx="1"
        fill={accentBlue}
        opacity="0.5"
      />
    </svg>
  );
};
