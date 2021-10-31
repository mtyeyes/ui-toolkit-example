import React, { ReactNode, MouseEvent } from 'react';
import styles from './overlay.module.scss';

export interface OverlayProps {
  onClick?: () => void;
  children: ReactNode;
}

export const Overlay = ({ onClick, children }: OverlayProps) => {
  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target && onClick !== undefined) onClick();
  };

  return (
    <div className={styles.overlay} onClick={handleClick}>
      {children}
    </div>
  );
};
