import React, { ReactNode } from 'react';
import styles from './toggle-group.module.scss';
import cn from 'classnames';

import { Label } from '../../index';

export interface ToggleGroupProps {
  children: ReactNode;
  label: string;
  isRequired?: boolean;
  isInvalid?: boolean;
  helperText?: string;
  helperCounter?: HelperCounter;
}

interface HelperCounter {
  maxCount: number;
  currentCount: number;
}

export const ToggleGroup = ({
  children,
  label,
  isRequired = false,
  isInvalid = false,
  helperText,
  helperCounter,
}: ToggleGroupProps) => {
  const fieldClassName = cn({ [styles.invalid]: isInvalid }, styles.fieldset);

  return (
    <fieldset className={fieldClassName}>
      <Label tag="legend" className={styles.label} isRequired={isRequired}>
        {label}
      </Label>
      <div className={styles.container}>{children}</div>
      <div className={styles.helperWrapper}>
        {helperText && <p className={styles.helperText}>{helperText}</p>}
        {helperCounter && (
          <span className={styles.helperCounter}>{`${helperCounter.currentCount}/${helperCounter.maxCount}`}</span>
        )}
      </div>
    </fieldset>
  );
};
