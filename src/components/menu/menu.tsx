import React from 'react';
import styles from './menu.module.scss';

import { MenuItem, MenuItemProps } from './menu-item/menu-item';

export interface MenuProps {
  children: MenuItemProps[];
}

export const Menu = ({ children }: MenuProps) => {
  const childrenMapCallback = (props: MenuItemProps) => {
    return <MenuItem key={JSON.stringify(props)} {...props} />;
  };

  return <ul className={styles.list}>{children.map(childrenMapCallback)}</ul>;
};
