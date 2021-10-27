import React from 'react';
import styles from './sidenav.module.scss';

import { SidenavItem, SidenavItemProps } from './sidenav-item/sidenav-item';

export interface SidenavProps {
  children: SidenavItemProps[];
}

export const Sidenav = ({ children }: SidenavProps) => {
  const childrenMapCallback = ({ name, ...props }: SidenavItemProps) => {
    return <SidenavItem key={name} name={name} {...props} />;
  };

  return (
    <nav>
      <ul className={styles.list}>{children.map(childrenMapCallback)}</ul>
    </nav>
  );
};
