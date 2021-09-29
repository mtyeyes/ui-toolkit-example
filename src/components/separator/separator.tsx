import React from 'react';
import styles from './separator.module.scss';
import cn from 'classnames';

export interface SeparatorProps {
  offsetSize?: 'micro' | 'small' | 'medium';
}

export const Separator = ({ offsetSize = 'micro' }: SeparatorProps) => {
  return <div className={cn(styles.separator, styles[`${offsetSize}Offset`])} />;
};
