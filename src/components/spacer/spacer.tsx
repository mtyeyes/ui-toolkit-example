import React from 'react';
import styles from './spacer.module.scss';
import cn from 'classnames';

export interface SpacerProps {
  size?: 'micro' | 'small' | 'medium' | 'large' | 'huge';
}

export const Spacer = ({ size = 'medium' }: SpacerProps) => {
  return <div className={cn(styles[size], styles.spacer)} />;
};
