import React from 'react';
import styles from './badge.module.scss';
import cn from 'classnames';

export interface BadgeProps {
  children: string;
  type?: 'accent' | 'primary' | 'secondary' | 'muted';
}

export const Badge = ({ type = 'primary', children }: BadgeProps) => {
  return <div className={cn(styles[type], styles.badge)}>{children}</div>;
};
