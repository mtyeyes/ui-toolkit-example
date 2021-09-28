import React, { LabelHTMLAttributes, DetailedHTMLProps } from 'react';
import styles from './label.module.scss';
import cn from 'classnames';

import FlagRequired from '../../resources/icons/required.svg';

export interface LabelProps extends DefaultLabelProps {
  isRequired?: boolean;
}

type DefaultLabelProps = DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;

export const Label = ({ isRequired = false, className, children, ...props }: LabelProps) => {
  return (
    <div className={styles.labelWrapper}>
      <label className={cn(styles.label, className)} {...props}>
        {children}
      </label>
      {isRequired && <FlagRequired className={styles.icon} />}
    </div>
  );
};
