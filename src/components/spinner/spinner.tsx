import React from 'react';
import styles from './spinner.module.scss';
import cn from 'classnames';

export interface SpinnerProps {
  className?: string;
}

export const Spinner = ({ className }: SpinnerProps) => {
  return (
    <svg
      className={cn(styles.spinner, className)}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 9C1 10.5822 1.46919 12.129 2.34824 13.4446C3.22729 14.7602 4.47672 15.7855 5.93853 16.391C7.40034 16.9965 9.00887 17.155 10.5607 16.8463C12.1126 16.5376 13.538 15.7757 14.6569 14.6569C15.7757 13.538 16.5376 12.1126 16.8463 10.5607C17.155 9.00888 16.9965 7.40034 16.391 5.93853C15.7855 4.47672 14.7602 3.22729 13.4446 2.34824C12.129 1.46919 10.5823 1 9 1"
        stroke="currentColor"
        strokeOpacity="0.56"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};
