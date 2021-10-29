import React from 'react';
import styles from './flag-required.module.scss';
import cn from 'classnames';

export interface FlagRequiredProps {
  className?: string;
}

export const FlagRequired = ({ className }: FlagRequiredProps) => {
  return (
    <svg
      className={cn(styles.icon, className)}
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M4 0L5.41421 2.58579L8 4L5.41421 5.41421L4 8L2.58579 5.41421L0 4L2.58579 2.58579L4 0Z"
      />
    </svg>
  );
};
