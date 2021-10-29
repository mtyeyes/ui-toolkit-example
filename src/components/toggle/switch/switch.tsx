import React from 'react';
import styles from './switch.module.scss';
import cn from 'classnames';

import { Check } from 'phosphor-react';

export interface SwitchProps {
  isChecked: boolean;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isFilled?: boolean;
}

export const Switch = ({ isChecked, isDisabled = false, isInvalid = false, isFilled = false }: SwitchProps) => {
  const fieldClassname = cn(
    {
      [styles.checked]: isChecked,
      [styles.disabled]: isDisabled,
      [styles.invalid]: isInvalid,
      [styles.filled]: isFilled,
    },
    styles.field,
  );

  return (
    <span className={fieldClassname}>
      <span className={styles.shapeWrapper}>
        <Check size="12px" className={styles.shape} />
      </span>
    </span>
  );
};
