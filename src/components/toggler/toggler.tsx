import React from 'react';
import styles from './toggler.module.scss';
import cn from 'classnames';

import { Button } from '../../index';
import { Heart } from 'phosphor-react';

export interface TogglerProps {
  isToggled: boolean;
  setIsToggled: (val: boolean) => void;
  className?: string;
}

export const Toggler = ({ isToggled, setIsToggled, className }: TogglerProps) => {
  return (
    <Button
      onClick={() => {
        setIsToggled(!isToggled);
      }}
      className={className}
      size="small"
      theme="onLight"
      impact="none"
      icon="only"
      iconComponent={
        <Heart
          size="24px"
          weight={isToggled ? 'fill' : 'regular'}
          className={cn({ [styles.toggled]: isToggled }, styles.icon)}
        />
      }
    />
  );
};
