import React from 'react';
import styles from './switch.module.scss';
import cn from 'classnames';

import Checkmark from '../../../resources/icons/checkmark-small.svg';
import { State } from '../toggle';

export interface SwitchProps {
  isChecked: boolean;
  state?: State;
  isFilled?: boolean;
  isIntermidiate?: boolean;
}

export const Switch = ({ isChecked, state, isFilled }: SwitchProps) => {
  const boxClassname = cn(
    {
      [styles.checked]: isChecked,
      [styles.disabled]: state === 'disabled',
      [styles.invalid]: state === 'invalid',
      [styles.filled]: isFilled,
    },
    styles.box,
  );

  return (
    <div className={boxClassname}>
      <div className={styles.shapeWrapper}>
        <Checkmark className={styles.shape} />
      </div>
    </div>
  );
};
