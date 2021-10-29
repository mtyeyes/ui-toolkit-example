import React, { ReactNode, useState } from 'react';
import styles from './table-menu-btn.module.scss';

import { Button } from '../../../../../index';
import { DotsThreeVertical } from 'phosphor-react';

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
        iconComponent={<DotsThreeVertical size="24px" />}
        size="small"
      />
      {isToggled && children}
    </div>
  );
};
