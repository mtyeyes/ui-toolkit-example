import React, { ReactNode } from 'react';
import styles from './sidenav-item.module.scss';
import cn from 'classnames';

export interface SidenavItemProps {
  isCurrent: boolean;
  iconComponent?: ReactNode;
  href: string;
  name: string;
}

export const SidenavItem = ({ isCurrent, iconComponent, href, name }: SidenavItemProps) => {
  return (
    <li className={cn({ [styles.current]: isCurrent }, styles.item)}>
      <a href={isCurrent ? undefined : href} className={styles.link}>
        {iconComponent}
        <span>{name}</span>
      </a>
    </li>
  );
};
