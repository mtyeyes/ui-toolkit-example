import React, { forwardRef, DetailedHTMLProps, InputHTMLAttributes } from 'react';
import styles from './input-element.module.scss';
import cn from 'classnames';

export type InputELementProps = Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'ref'>;

export const InputELement = forwardRef<HTMLInputElement, InputELementProps>(({ className, ...props }, ref) => {
  const inputClassName = cn(className, styles.input);

  return <input ref={ref} className={inputClassName} {...props} />;
});

InputELement.displayName = 'InputProxy';
