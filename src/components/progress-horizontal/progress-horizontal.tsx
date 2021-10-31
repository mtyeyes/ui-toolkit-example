import React from 'react';
import styles from './progress-horizontal.module.scss';

export interface ProgressHorizontalProps {
  progress: number;
}

export const ProgressHorizontal = ({ progress }: ProgressHorizontalProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.bar} style={{ width: `${progress}%` }} />
    </div>
  );
};
