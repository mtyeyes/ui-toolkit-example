import React, { useEffect, useState } from 'react';

export interface ProgressRingProps {
  stroke: number;
  radius: number;
  progress: number;
  isClockwise?: boolean;
  className?: string;
}

const calculateCircleValues = (radius: number, stroke: number, progress: number, isClockwise: boolean) => {
  if (progress > 100) progress = 100;
  if (progress < 0) progress = 0;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = isClockwise
    ? circumference - (progress / 100) * circumference
    : circumference + (progress / 100) * circumference;

  return { normalizedRadius, circumference, strokeDashoffset };
};

export const ProgressRing = ({ stroke, radius, progress, isClockwise = true, className }: ProgressRingProps) => {
  const [calculatedValues, setCalculatedValues] = useState(
    calculateCircleValues(radius, stroke, progress, isClockwise),
  );

  useEffect(() => {
    setCalculatedValues(calculateCircleValues(radius, stroke, progress, isClockwise));
  }, [radius, stroke, progress, isClockwise]);

  return (
    <svg className={className} height={radius * 2} width={radius * 2}>
      <circle
        stroke="currentColor"
        fill="transparent"
        strokeDasharray={`${calculatedValues.circumference} ${calculatedValues.circumference}`}
        style={{ strokeDashoffset: calculatedValues.strokeDashoffset }}
        strokeWidth={stroke}
        strokeLinecap="round"
        r={calculatedValues.normalizedRadius}
        cx={radius}
        cy={radius}
      />
    </svg>
  );
};
