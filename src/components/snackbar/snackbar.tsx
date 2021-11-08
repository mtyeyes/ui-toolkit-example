import React from 'react';
import styles from './snackbar.module.scss';
import cn from 'classnames';

import { Button } from '../../index';

export interface SnackbarProps {
  title: string;
  btnText: string;
  onClick: () => void;
  isVisible: boolean;
}

export const Snackbar = ({ title, btnText, onClick, isVisible }: SnackbarProps) => {
  return (
    <div className={cn({ [styles.visible]: isVisible }, styles.wrapper)}>
      <p className={styles.text}>{title}</p>
      <Button onClick={onClick} theme="onLight" impact="medium" size="small">
        {btnText}
      </Button>
    </div>
  );
};
