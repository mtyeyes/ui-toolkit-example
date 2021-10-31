import React from 'react';
import styles from './visualization.module.scss';
import cn from 'classnames';

import { ProgressRing } from '../../index';

export interface VisualizationProps {
  progress: number;
  size?: 'small' | 'normal';
}

export const Visualization = ({ progress, size = 'normal' }: VisualizationProps) => {
  return (
    <div className={cn(styles[size], styles.wrapper)}>
      <ProgressRing
        className={styles.icon}
        stroke={4}
        radius={size === 'normal' ? 32 : 24}
        isClockwise
        progress={progress}
      />
      <span className={styles.text}>{`${progress}%`}</span>
    </div>
  );
};
