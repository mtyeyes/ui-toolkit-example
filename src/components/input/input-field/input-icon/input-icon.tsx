import React, { KeyboardEventHandler, MouseEventHandler, ReactNode } from 'react';
import styles from './input-icon.module.scss';
import cn from 'classnames';

export interface InputIconProps {
  className?: string;
  children: ReactNode;
  onClick?: () => void;
  onKeyDown?: KeyboardEventHandler<HTMLElement>;
  onKeyUp?: KeyboardEventHandler<HTMLElement>;
  onMouseDown?: MouseEventHandler<HTMLElement>;
  onMouseUp?: MouseEventHandler<HTMLElement>;
  isDisabled?: boolean;
}

export const InputIcon = ({ className, isDisabled = false, children, onClick, ...props }: InputIconProps) => {
  const Tag: keyof JSX.IntrinsicElements = onClick !== undefined ? 'button' : 'div';

  return (
    <Tag
      className={cn({ [styles.clickable]: onClick !== undefined }, styles.iconWrapper, className)}
      disabled={isDisabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </Tag>
  );
};
