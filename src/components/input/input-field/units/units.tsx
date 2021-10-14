import React from 'react';
import styles from './units.module.scss';

export interface UnitsProps {
  children: string;
}

export const Units = ({ children }: UnitsProps) => {
  return <span className={styles.text}>{children}</span>;
};
