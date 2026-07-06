import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  variant?: 'default' | 'white';
}

export const Logo = ({ className, variant = 'default', ...props }: LogoProps) => {
  const fillColor = variant === 'white' ? 'fill-white' : 'fill-navy';
  const textColor = variant === 'white' ? 'fill-white' : 'fill-navy';
  const accentColor = variant === 'white' ? 'fill-white/90' : 'fill-steel';
  const innerBgColor = variant === 'white' ? '#0A2342' : '#ffffff';

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 380 80" 
      className={cn("h-full w-auto", className)}
      {...props}
    >
      {/* Industrial Gear Icon */}
      <g className={fillColor}>
        <circle cx="40" cy="40" r="32" />
        <rect x="34" y="4" width="12" height="72" rx="2" />
        <rect x="34" y="4" width="12" height="72" rx="2" transform="rotate(45 40 40)" />
        <rect x="34" y="4" width="12" height="72" rx="2" transform="rotate(90 40 40)" />
        <rect x="34" y="4" width="12" height="72" rx="2" transform="rotate(135 40 40)" />
      </g>
      
      {/* Inner Circle */}
      <circle cx="40" cy="40" r="23" fill={innerBgColor} />
      
      {/* Pe Monogram */}
      <text x="33" y="48" fontFamily="var(--font-manrope), sans-serif" fontWeight="800" fontSize="24" className={accentColor} textAnchor="middle">P</text>
      <text x="50" y="48" fontFamily="var(--font-manrope), sans-serif" fontWeight="600" fontSize="20" className={fillColor} textAnchor="middle">e</text>

      {/* Brand Text */}
      <text x="95" y="48" fontFamily="var(--font-manrope), sans-serif" fontWeight="800" fontSize="32" letterSpacing="0.02em" className={textColor}>PAKO</text>
      <text x="190" y="48" fontFamily="var(--font-manrope), sans-serif" fontWeight="400" fontSize="32" letterSpacing="0.02em" className={accentColor}>ENGINEERS</text>
    </svg>
  );
};
