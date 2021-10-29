import React from 'react';
import styles from './toggler.module.scss';
import cn from 'classnames';

import { Heart } from 'phosphor-react';

export interface TogglerProps {
  isToggled: boolean;
  setIsToggled: (val: boolean) => void;
}

export const Toggler = ({ isToggled, setIsToggled }: TogglerProps) => {
  const btnClassName = cn(styles.btn);

  return (
    <button
      className={btnClassName}
      type="button"
      onClick={() => {
        setIsToggled(!isToggled);
      }}
    >
      <Heart
        size="24px"
        weight={isToggled ? 'fill' : 'regular'}
        className={cn({ [styles.toggled]: isToggled }, styles.icon)}
      />
    </button>
  );
};
