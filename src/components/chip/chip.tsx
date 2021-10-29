import React from 'react';
import styles from './chip.module.scss';
import cn from 'classnames';

import { XCircle } from 'phosphor-react';

export interface ChipProps {
  theme?: 'light' | 'dark' | 'accent';
  onClick?: () => void;
  withIcon?: boolean;
  isDisabled?: boolean;
  children: string;
}

export const Chip = ({ theme = 'light', onClick, withIcon = false, isDisabled = false, children }: ChipProps) => {
  const wrapperClassName = cn({ [styles.clickable]: onClick !== undefined }, styles[theme], styles.wrapper);

  return (
    <button type="button" disabled={isDisabled} onClick={onClick} className={wrapperClassName}>
      <span className={styles.text}>{children}</span>
      {withIcon && <XCircle size="24px" className={styles.icon} />}
    </button>
  );
};
