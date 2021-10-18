import React from 'react';
import styles from './helpers.module.scss';
import cn from 'classnames';

export interface HelpersProps {
  isInvalid?: boolean;
  isDisabled?: boolean;
  helperText?: string;
  counter?: Counter;
  className?: string;
}

export interface Counter {
  maxCount: number;
  currentCount: number;
}

export const Helpers = ({ isInvalid = false, isDisabled = false, helperText, counter }: HelpersProps) => {
  return (
    <div className={cn({ [styles.invalid]: isInvalid, [styles.disabled]: isDisabled }, styles.helperWrapper)}>
      {helperText && <p className={styles.text}>{helperText}</p>}
      {counter && <span className={styles.counter}>{`${counter.currentCount}/${counter.maxCount}`}</span>}
    </div>
  );
};
