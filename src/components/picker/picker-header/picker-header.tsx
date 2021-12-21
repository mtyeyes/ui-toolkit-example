import React from 'react';
import styles from './picker-header.module.scss';

import { Button } from '../../../index';
import { CaretLeft, CaretRight } from 'phosphor-react';

export interface PickerHeaderProps {
  beforeSelectProps: Record<string, any>;
  afterSelectProps: Record<string, any>;
  children: string;
}

export const PickerHeader = ({ beforeSelectProps, afterSelectProps, children }: PickerHeaderProps) => {
  return (
    <div className={styles.wrapper}>
      <Button
        theme="onLight"
        impact="none"
        size="small"
        icon="only"
        iconComponent={<CaretLeft size="24px" />}
        className={styles.btn}
        {...beforeSelectProps}
      />
      <h6 className={styles.header}>{children}</h6>
      <Button
        theme="onLight"
        impact="none"
        size="small"
        icon="only"
        iconComponent={<CaretRight size="24px" />}
        className={styles.btn}
        {...afterSelectProps}
      />
    </div>
  );
};
