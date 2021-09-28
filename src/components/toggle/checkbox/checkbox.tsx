import React from 'react';
import styles from './checkbox.module.scss';

import Checkmark from '../../../resources/icons/checkmark.svg';
import Dash from '../../../resources/icons/dash.svg';

export interface CheckboxProps {
  isIntermidiate?: boolean;
}

export const Checkbox = ({ isIntermidiate = false }: CheckboxProps) => {
  const IconToDisplay = isIntermidiate ? Dash : Checkmark;

  return (
    <div className={styles.box}>
      <IconToDisplay className={styles.icon} />
    </div>
  );
};
