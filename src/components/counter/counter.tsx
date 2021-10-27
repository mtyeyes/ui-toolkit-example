import React from 'react';
import styles from './counter.module.scss';
import cn from 'classnames';

export type CounterProps = MicroCounter | NormalCounter;

interface MicroCounter {
  size: 'micro';
  theme?: 'accent' | 'dark';
}

interface NormalCounter {
  size?: 'normal';
  theme?: 'accent' | 'dark';
  children: string;
}

export const Counter = (props: CounterProps) => {
  const { size = 'normal', theme = 'accent' } = props;
  return (
    <div className={cn(styles[size], styles[theme], styles.counter)}>{props.size === 'normal' && props.children}</div>
  );
};
