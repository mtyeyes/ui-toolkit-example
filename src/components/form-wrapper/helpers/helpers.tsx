import React from 'react';
import styles from './helpers.module.scss';
import cn from 'classnames';

export interface HelpersProps {
  isInvalid?: boolean;
  helperText?: string;
  counter?: Counter;
  className?: string;
}

export interface Counter {
  maxCount: number;
  currentCount: number;
}

export const Helpers = ({ isInvalid = false, helperText, counter }: HelpersProps) => {
  return (
    <div className={cn({ [styles.invalid]: isInvalid }, styles.helperWrapper)}>
      {helperText && <p className={styles.text}>{helperText}</p>}
      {counter && <span className={styles.counter}>{`${counter.currentCount}/${counter.maxCount}`}</span>}
    </div>
  );
};
