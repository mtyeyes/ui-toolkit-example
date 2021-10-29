import React, { ReactNode } from 'react';
import styles from './input-icon.module.scss';
import cn from 'classnames';

export interface InputIconProps {
  onClick?: () => void;
  className?: string;
  children: ReactNode;
}

export const InputIcon = ({ className, onClick, children }: InputIconProps) => {
  const Tag: keyof JSX.IntrinsicElements = onClick !== undefined ? 'button' : 'div';

  return (
    <Tag className={cn({ [styles.clickable]: onClick !== undefined }, styles.iconWrapper, className)} onClick={onClick}>
      {children}
    </Tag>
  );
};
