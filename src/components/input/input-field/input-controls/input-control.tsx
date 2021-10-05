import React from 'react';
import styles from './input-control.module.scss';
import cn from 'classnames';

import search from '../../../../resources/icons/search.svg';
import cross from '../../../../resources/icons/cross.svg';

const iconsMap = { search, cross };

export interface InputControlProps {
  type: 'search' | 'cross';
  onClick: () => void;
  className?: string;
  isDisabled?: boolean;
}

export const InputControl = ({ type, isDisabled = false, className, onClick }: InputControlProps) => {
  const Icon = iconsMap[type];

  return (
    <button className={cn(styles.btn, className)} disabled={isDisabled} type="button" onClick={onClick}>
      <Icon className={styles.icon} />
    </button>
  );
};
