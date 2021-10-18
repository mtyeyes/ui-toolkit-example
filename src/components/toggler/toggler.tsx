import React from 'react';
import styles from './toggler.module.scss';
import cn from 'classnames';

import HeartFilled from '../../resources/icons/heart-filled.svg';
import HeartStroke from '../../resources/icons/heart-stroke.svg';

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
      <HeartStroke className={cn({ [styles.toggled]: isToggled }, styles.icon, styles.stroke)} />
      <HeartFilled className={cn({ [styles.toggled]: isToggled }, styles.icon, styles.fill)} />
    </button>
  );
};
