import React from 'react';
import styles from './switch.module.scss';
import cn from 'classnames';

import Checkmark from '../../../resources/icons/checkmark-small.svg';

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
    <div className={fieldClassname}>
      <div className={styles.shapeWrapper}>
        <Checkmark className={styles.shape} />
      </div>
    </div>
  );
};
