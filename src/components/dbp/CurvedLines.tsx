import * as React from "react";
import { cn } from "@/lib/utils";

type CurvedLinesProps = {
  className?: string;
  style?: React.CSSProperties;
};

/**
 * Subtle brochure-like curved line accent. Uses currentColor so it can adapt to light/dark panels.
 */
export function CurvedLines({ className, style }: CurvedLinesProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1200 600"
      className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
      style={style}
      preserveAspectRatio="none"
    >
      <g fill="none" stroke="currentColor" strokeWidth="2" opacity="0.55">
        <path d="M-40,140 C220,20 480,40 720,150 C980,270 1150,250 1240,210" />
        <path d="M-60,300 C200,200 500,210 760,320 C980,420 1110,420 1260,360" />
        <path d="M-40,470 C220,380 520,390 780,490 C980,570 1120,560 1260,520" />
      </g>
    </svg>
  );
}
