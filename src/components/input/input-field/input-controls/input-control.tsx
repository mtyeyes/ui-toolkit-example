import React from 'react';
import styles from './input-control.module.scss';
import cn from 'classnames';

export interface InputControlProps {
  onClick: () => void;
  className?: string;
  tabIndex?: number;
  isDisabled?: boolean;
  children: React.FunctionComponent<React.SVGAttributes<SVGAElement>>;
}

export const InputControl = ({ isDisabled = false, className, tabIndex, onClick, children }: InputControlProps) => {
  const Icon = children;

  return (
    <button
      type="button"
      tabIndex={tabIndex}
      className={cn(styles.btn, className)}
      disabled={isDisabled}
      onClick={onClick}
    >
      <Icon className={styles.icon} />
    </button>
  );
};
