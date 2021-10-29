import React from 'react';
import styles from './checkbox.module.scss';

import { Check, Minus } from 'phosphor-react';

export interface CheckboxProps {
  isIntermidiate?: boolean;
}

export const Checkbox = ({ isIntermidiate = false }: CheckboxProps) => {
  const IconToDisplay = isIntermidiate ? Minus : Check;

  return (
    <span className={styles.field}>
      <IconToDisplay size="24px" className={styles.icon} />
    </span>
  );
};
