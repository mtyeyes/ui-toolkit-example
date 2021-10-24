import React, { ReactNode, useState } from 'react';
import styles from './table-menu-btn.module.scss';

import { Button } from '../../../../../index';
import MenuIcon from '../../../../../resources/icons/menu-dots.svg';

export interface TableMenuBtnProps {
  children: ReactNode;
}

export const TableMenuBtn = ({ children }: TableMenuBtnProps) => {
  const [isToggled, setIsToggled] = useState(false);

  const handleClick = () => {
    setIsToggled((prevState) => !prevState);
  };

  return (
    <div className={styles.wrapper}>
      <Button
        onClick={handleClick}
        theme="onLight"
        impact="low"
        icon="only"
        iconSrc={MenuIcon}
        iconFillColored={true}
        size="small"
      />
      {isToggled && children}
    </div>
  );
};
