import React from 'react';
import styles from './input-control.module.scss';
import cn from 'classnames';

export interface InputControlProps {
  onClick: () => void;
  className?: string;
  isDisabled?: boolean;
  children: React.FunctionComponent<React.SVGAttributes<SVGAElement>>;
}

export const InputControl = ({ isDisabled = false, className, onClick, children }: InputControlProps) => {
  const Icon = children;

  return (
    <button className={cn(styles.btn, className)} disabled={isDisabled} type="button" onClick={onClick}>
      <Icon className={styles.icon} />
    </button>
  );
};
