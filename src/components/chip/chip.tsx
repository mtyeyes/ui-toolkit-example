import React from 'react';
import styles from './chip.module.scss';
import cn from 'classnames';

import CloseIcon from '../../resources/icons/x-circle.svg';

export interface ChipProps {
  theme?: 'light' | 'dark' | 'accent';
  handleDissmiss?: () => void;
  isDisabled?: boolean;
  children: string;
}

export const Chip = ({ theme = 'light', handleDissmiss, isDisabled = false, children }: ChipProps) => {
  const wrapperClassName = cn({ [styles.disabled]: isDisabled }, styles[theme], styles.wrapper);
  return (
    <div className={wrapperClassName}>
      <span className={styles.text}>{children}</span>
      {handleDissmiss !== undefined && (
        <button className={styles.btn} disabled={isDisabled} onClick={handleDissmiss} aria-label="закрыть">
          <CloseIcon />
        </button>
      )}
    </div>
  );
};
