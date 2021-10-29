import React from 'react';
import styles from './blockqoute.module.scss';

export interface BlockqouteProps {
  children: string;
}

export const Blockqoute = ({ children }: BlockqouteProps) => {
  return (
    <blockquote className={styles.wrapper}>
      <p className={styles.text}>{children}</p>
    </blockquote>
  );
};
