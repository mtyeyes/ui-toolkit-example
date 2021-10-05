import React from 'react';
import styles from './separator.module.scss';
import cn from 'classnames';

export interface SeparatorProps {
  offsetSize?: 'micro' | 'small' | 'medium';
  isShrinked?: boolean;
}

export const Separator = ({ offsetSize = 'micro', isShrinked = false }: SeparatorProps) => {
  return <div className={cn({ [styles.shrinked]: isShrinked }, styles[`${offsetSize}Offset`], styles.separator)} />;
};
