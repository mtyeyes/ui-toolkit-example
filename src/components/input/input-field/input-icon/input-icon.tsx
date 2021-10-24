import React from 'react';
import styles from './input-icon.module.scss';
import cn from 'classnames';

export interface InputIconProps {
  onClick?: () => void;
  className?: string;
  children: React.FunctionComponent<React.SVGAttributes<SVGAElement>>;
}

export const InputIcon = ({ className, onClick, children }: InputIconProps) => {
  const Icon = children;

  const Tag: keyof JSX.IntrinsicElements = onClick !== undefined ? 'button' : 'div';

  return (
    <Tag className={cn({ [styles.clickable]: onClick !== undefined }, styles.iconWrapper, className)} onClick={onClick}>
      <Icon className={styles.icon} />
    </Tag>
  );
};
